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
  value?: string
  placeholder: string
  handleTextChange?: (...event: any[]) => void
  otherStyles: string
  keyboardType?: KeyboardTypeOptions
}

const FormField = ({ title, otherStyles, keyboardType }: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')

  return (
    <View className={` ${otherStyles}`}>
      <Text className='text-base text-[#24786D] font-secondary-bold'>
        Your Name
      </Text>

      <View className='w-full h-16 border-b border-[#CDD1D0] flex flex-row items-center'>
        <TextInput
          className='flex-1 text-black font-secondary font-semibold text-base'
          value={value}
          placeholderTextColor='black'
          onChangeText={(e) => setValue(e)}
          secureTextEntry={title === 'Password' && !showPassword}
          keyboardType={keyboardType}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='h-6 w-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
