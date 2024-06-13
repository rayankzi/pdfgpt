import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import FormField from '@/components/FormField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  return (
    <SafeAreaView className='bg-gray-100 h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 pt-10 space-y-32'>
          <View>
            <View className='space-y-4 px-5'>
              <Text className='text-center font-primary-bold text-lg'>
                Sign Up with Email
              </Text>

              <Text className='text-[#484c4b] text-center'>
                Get chatting with friends and family today by signing up for our
                chat app!
              </Text>
            </View>

            <KeyboardAwareScrollView className='mt-4'>
              <View className='px-2'>
                <FormField
                  title='Username'
                  placeholder='Username'
                  otherStyles='mt-10'
                />

                <FormField
                  title='Username'
                  placeholder='Username'
                  otherStyles='mt-10'
                />

                <FormField
                  title='Username'
                  placeholder='Username'
                  otherStyles='mt-10'
                />
              </View>
            </KeyboardAwareScrollView>
          </View>

          <View className='flex-row'>
            <TouchableOpacity className='bg-[#24786D] rounded-full flex-1 py-3'>
              <Text className='text-white text-lg font-primary-semibold text-center'>
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
