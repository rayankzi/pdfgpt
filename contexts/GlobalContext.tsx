import { getCurrentUser } from '@/lib/appwrite'
import { createContext, useContext, useEffect, useRef } from 'react'
import { Models } from 'react-native-appwrite'
import { createStore, useStore } from 'zustand'

interface GlobalProps {
  isLoggedIn: boolean
  user: Models.Document | null
  loading: boolean
}

interface GlobalState extends GlobalProps {
  setUser: (user: Models.Document | null) => void
  setIsLoggedIn: (newValue: boolean) => void
  setLoading: (newValue: boolean) => void
}

type GlobalStore = ReturnType<typeof createGlobalStore>

const createGlobalStore = (initProps?: Partial<GlobalProps>) => {
  const DEFAULT_PROPS: GlobalProps = {
    isLoggedIn: false,
    user: null,
    loading: true,
  }

  return createStore<GlobalState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setUser: (user) => set(() => ({ user })),
    setIsLoggedIn: (newValue) => set(() => ({ isLoggedIn: newValue })),
    setLoading: (newValue) => set(() => ({ loading: newValue })),
  }))
}

const GlobalContext = createContext<GlobalStore | null>(null)

// turn this into const
export function useGlobalContext<T>(selector: (state: GlobalState) => T) {
  const store = useContext(GlobalContext)
  if (!store) throw new Error('Missing GlobalContext.Provider in the tree')
  return useStore(store, selector)
}

type BearProviderProps = React.PropsWithChildren<GlobalProps>

export const GlobalProvider = ({ children }: BearProviderProps) => {
  const store = useRef(createGlobalStore()).current

  return (
    <GlobalContext.Provider value={store}>
      <CheckUser />
      {children}
    </GlobalContext.Provider>
  )
}

const CheckUser = () => {
  const setIsLoggedIn = useGlobalContext((s) => s.setIsLoggedIn)
  const setUser = useGlobalContext((s) => s.setUser)
  const setLoading = useGlobalContext((s) => s.setLoading)

  useEffect(() => {
    getCurrentUser()
      .then((res: Models.Document) => {
        if (res) {
          setIsLoggedIn(true)
          setUser(res)
        } else {
          setIsLoggedIn(false)
          setUser(null)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  })

  return <></>
}
