import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '@/constants'
import { ZodIssue } from 'zod'

interface FormFieldProps {
  title: string
  value: string
  handleTextChange: (text: string) => void
  otherStyles: string
  keyboardType?: KeyboardTypeOptions
  errors: ZodIssue[]
}

type FieldType = 'email' | 'password' | 'name'

interface ErrorMessages {
  type: FieldType
  message: string
}

const FormField = ({
  title,
  otherStyles,
  keyboardType,
  errors: allErrors,
  handleTextChange,
  value,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [specificErrorMsg, setSpecificErrorMsg] = useState('')

  useEffect(() => {
    const newErrors: ErrorMessages[] = allErrors.map((error) => ({
      type: error.path[0] as FieldType,
      message: error.message,
    }))

    checkIfErrorExists(newErrors)
  }, [allErrors, value])

  const getFieldTitle = () => {
    if (title === 'Your name') return 'name'
    else if (title === 'Your email') return 'email'
    else if (title === 'Your password') return 'password'
    else return ''
  }

  const checkIfErrorExists = (msgs: ErrorMessages[]) => {
    const fieldTitle = getFieldTitle()
    const errorForThisField = msgs.find(
      (errorMsg) => errorMsg.type === fieldTitle
    )
    if (errorForThisField) {
      setSpecificErrorMsg(errorForThisField.message)
    } else {
      setSpecificErrorMsg('')
    }
  }

  return (
    <View className={` ${otherStyles}`}>
      <Text
        className={`text-base font-secondary-bold ${
          specificErrorMsg ? 'text-red-500' : 'text-[#24786D]'
        }`}
      >
        {title}
      </Text>

      <View
        className={`relative w-full h-16 border-b flex flex-row items-center ${
          specificErrorMsg ? 'border-red-500' : 'border-[#CDD1D0]'
        }`}
      >
        <TextInput
          className='flex-1 text-black font-secondary font-semibold text-base'
          value={value}
          onChangeText={(text) => {
            handleTextChange(text)
          }}
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

      <Text
        className={`text-right mt-2 text-[10px] ${
          specificErrorMsg ? 'text-red-500' : 'text-transparent'
        }`}
      >
        {specificErrorMsg || 'Error message should go here!'}
      </Text>
    </View>
  )
}

export default FormField
