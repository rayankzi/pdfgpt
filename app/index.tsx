import { useGlobalContext } from '@/contexts/GlobalContext'
import { Link, Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const loading = useGlobalContext((s) => s.loading)
  const isLoggedIn = useGlobalContext((s) => s.isLoggedIn)

  if (!loading && isLoggedIn) return <Redirect href='/home' />
  return (
    // TODO: change background to gradient
    <SafeAreaView className='bg-[#21162b] h-full'>
      <View className='flex-1 items-center justify-between pt-3 px-10'>
        <Text className='text-white font-semibold text-base'>pdfgpt.</Text>

        <View className='space-y-4'>
          <View className='space-y-3'>
            <Text
              className='text-[56px] text-white tracking-wide font-primary'
              style={{ lineHeight: 70 }}
            >
              Chat with
            </Text>
            <Text
              className='text-[56px] text-white tracking-wide font-primary'
              style={{ lineHeight: 70 }}
            >
              your PDF
            </Text>
            <Text
              className='text-[56px] text-white tracking-wide font-primary-bold'
              style={{ lineHeight: 70 }}
            >
              in seconds
            </Text>
          </View>

          <Text className='text-[#B9C1BE] leading-6 font-secondary'>
            PDFGPT allows you to have conversations with any PDF document.
            Simply upload your file and start asking!
          </Text>
        </View>

        <View className='w-full space-y-10'>
          <View className='flex-row'>
            <TouchableOpacity
              className='bg-white rounded-full flex-1 py-3 shadow-md'
              onPress={() => router.push('/sign-up')}
            >
              <Text className='text-black text-lg font-primary-semibold text-center'>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View className='flex-row gap-1.5 justify-center pb-6'>
            <Text className='text-[#B9C1BE] text-center font-secondary'>
              Existing Account?
            </Text>

            <Link
              href='/sign-in'
              className='text-white font-secondary-semibold'
            >
              Log In
            </Link>
          </View>
        </View>
      </View>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}
