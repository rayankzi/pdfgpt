import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

interface FormFieldProps {
  title: string
  value: string
  handleTextChange: (text: string) => void
  otherStyles: string
  keyboardType?: KeyboardTypeOptions
}

const FormField = ({ title, otherStyles, keyboardType }: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')

  return (
    <View className={` ${otherStyles}`}>
      <Text className='text-base text-[#24786D] font-secondary-bold'>
        {title}
      </Text>

      <View className='relative w-full h-16 border-b border-[#CDD1D0] flex flex-row items-center'>
        <TextInput
          className='flex-1 text-black font-secondary font-semibold text-base'
          value={value}
          onChangeText={(e) => setValue(e)}
          secureTextEntry={title === 'Your password' && !showPassword}
          keyboardType={keyboardType}
        />

        {title === 'Your password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='mt-3 h-6 w-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>

      <Text className='text-transparent text-right mt-2 text-[10px]'>
        Invalid Email Address
      </Text>
    </View>
  )
}

export default FormField
