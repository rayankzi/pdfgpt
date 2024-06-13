import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <SafeAreaView className='bg-gray-100 h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[65vh] px-4 my-6'>
          <View className='space-y-4 px-5'>
            <Text className='text-center font-primary-bold text-lg'>
              Sign Up with Email
            </Text>

            <Text className='text-[#484c4b] text-center'>
              Get chatting with friends and family today by signing up for our
              chat app!
            </Text>
          </View>

          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
