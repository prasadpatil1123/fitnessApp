import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () =>{
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth, email,password);
      }catch(err){
        console.log('got error: ', err.message);
      }
    }
  }

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}
            className="bg-gray-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image source={require('../assets/images/vector.jpg')}
            style={{ width: 165, height: 110, marginBottom: 10, borderRadius: 10 }} />

        </View>
        <View className="flex-row justify-center">
          <Text className="text-gray-700 font-extrabold ml-4"
          style={{fontSize:25, marginBottom:10}}
          >Welcome to SignUp Page </Text>
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8">
       

        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2x1 mb-3"
            placeholder='Enter name'
            value=''
          />

          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2x1 mb-3"
            value={email}
            onChangeText={value=> setEmail(value)}
            placeholder='Enter Email'
          />

          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2x1 mb-3"
            secureTextEntry
            value={password}
            onChangeText={value=> setPassword(value)}
            placeholder='password'
          />
          <TouchableOpacity
            // className="py-3  bg-gray-700 mx-7 rounded-xl"
            className="py-3 mx-7 rounded-xl"
            style={{ backgroundColor: themeColors.bt }}
          >
            <Text
              className="text-x1 font-bold text-center  text-gray-700"
              onPress={handleSubmit}
            >
              Sign Up
            </Text>

          </TouchableOpacity>
        </View>

        <Text className="text-x1 font-bold text-center py-5">
          Or
        </Text>

        <View className="flex-row justify-center space-x-12" >

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2x1" >
            <Image source={require("../assets/icons/google.png")} className="w-10 h-10" />
          </TouchableOpacity>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2x1" >
            <Image source={require("../assets/icons/apple.png")} className="w-10 h-10" />
          </TouchableOpacity>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2x1" >
            <Image source={require("../assets/icons/facebook.png")} className="w-10 h-10" />
          </TouchableOpacity>

        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-blue-500 font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen