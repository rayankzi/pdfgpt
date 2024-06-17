import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from 'react-native-appwrite'

const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.rayankazi.pdfgpt',
  projectId: '666f8443003db3f0063a',
  databaseId: '666f85000004afc358a6',
  userCollectionId: '666f863f0010865779df',
  // videoCollectionId: '6663b74a003e360f6d6d',
  storageId: '666f8518003dc34c3e47',
}

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  storageId,
} = config

const client = new Client()

client.setEndpoint(endpoint).setProject(projectId).setPlatform(platform)

const account = new Account(client)
const avatars = new Avatars(client)
const database = new Databases(client)

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name)

    if (!newAccount) throw new Error()

    const avatarUrl = avatars.getInitials(name)
    await signIn(email, password)

    const newUser = await database.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, email, name, avatar: avatarUrl }
    )

    return newUser
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()

    if (!currentAccount) throw new Error()

    const currentUser = await database.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if (!currentUser) throw new Error()

    return currentUser.documents[0]
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}
