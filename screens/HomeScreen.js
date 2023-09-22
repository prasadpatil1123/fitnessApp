import { Text,View, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const HomeScreen = () => {
  const handleLogout = async() =>{
    await signOut(auth);
  }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center">

      {/* <Text classname= "text-black-lg"> */}
      <View className="flex-row justify-center">
          <Text
          style={{fontSize:25, marginBottom:10, fontWeight: 'bold', color:'gray'}}
          > Home Screen  </Text>
        </View>
      <View>
      <TouchableOpacity
              onPress={() => navigation.navigate('Gender')}
              className="py-3 mx-7 rounded-xl"
              style={{ backgroundColor: themeColors.bt }}
            >
              <Text
                className="text-xl font-bold text-center text-gray-700"
              >
                Select Gender
              </Text>
            </TouchableOpacity>
            </View>
            <View>
      <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
        
      <Text className="text-black text-lg font-bold">Logout</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen