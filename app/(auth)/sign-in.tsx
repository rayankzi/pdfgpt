import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import { ZodError, ZodIssue, z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
})

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ZodIssue[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = () => {
    setIsSubmitting(true)

    try {
      const correctData = formSchema.parse(formData)
      setErrors([])

      // Handle successful form submission (e.g., send data to the server)
      Alert.alert('Success', 'Logged in successfully!')
    } catch (err) {
      if (err instanceof ZodError) {
        setErrors(err.issues)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-gray-100 h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 pt-1 min-h-[80vh]'>
          <View>
            <View className='space-y-4 px-5'>
              <Text className='text-center font-primary-bold text-lg'>
                Sign In with Email
              </Text>

              <Text className='text-[#484c4b] text-center'>
                Welcome back! Please sign in to continue.
              </Text>
            </View>

            <View className='mt-4'>
              <View className='px-2'>
                <FormField
                  title='Your email'
                  value={formData.email}
                  handleTextChange={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                  otherStyles='mt-10'
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
            </View>
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
                Sign In
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

export default SignIn
