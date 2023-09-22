import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = () => {
  return (
    <View>
      <ImageBackground 
      source={
        require('./../../assets/images/nathan.jpg')
      } style={{position:'absolute'}}
      />
    </View>
  )
}

export default Background