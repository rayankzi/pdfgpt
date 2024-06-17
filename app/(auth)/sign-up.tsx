import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ZodError, ZodIssue, z } from 'zod'
import { router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(2),
})

const SignUp = () => {
  const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
    name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ZodIssue[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async () => {
    setIsSubmitting(true)

    try {
      const correctData = formSchema.parse(formData)
      setErrors([])

      // logic
      const result = await createUser(
        correctData.email,
        correctData.password,
        correctData.name
      )
      router.push('/home')
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.issues)
        setErrors(err.issues)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-gray-100 h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 pt-1'>
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
                  title='Your name'
                  value={formData.name}
                  handleTextChange={(text) =>
                    setFormData({ ...formData, name: text })
                  }
                  otherStyles='mt-10'
                  errors={errors}
                />

                <FormField
                  title='Your email'
                  value={formData.email}
                  handleTextChange={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                  otherStyles='mt-7'
                  keyboardType='email-address'
                  errors={errors}
                />

                <FormField
                  title='Your password'
                  value={formData.password}
                  handleTextChange={(text) =>
                    setFormData({ ...formData, password: text })
                  }
                  otherStyles='mt-7'
                  errors={errors}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>

          <View className='flex-row mt-32'>
            <TouchableOpacity
              onPress={onSubmit}
              disabled={isSubmitting}
              className={`bg-[#24786D] rounded-full flex-1 py-3 flex flex-row justify-center ${
                isSubmitting && 'opacity-50'
              }`}
            >
              <Text className='text-white text-lg font-primary-semibold text-center'>
                Create an Account
              </Text>

              {isSubmitting && (
                <ActivityIndicator
                  animating={isSubmitting}
                  color='#fff'
                  size='small'
                  className='ml-2'
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
