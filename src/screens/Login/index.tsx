import React from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import * as Icons from '../../components/Icons'
const Login = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground
        resizeMode='cover'
        className='flex-1'
        source={require('../../assets/bg/images.jpeg')} >
        <View className='flex-col justify-between flex-1'>
          <View className='flex-row justify-between p-3'>
            <View className='mt-4'>
              <Icons.Menu size={30} color={'#fff'} />
            </View>
            <View >
              <View className='
            flex-row justify-center items-center
            h-5 w-5 bg-red-500 rounded-full fixed left-4 top-3 z-10'>
                <Text>9</Text>
              </View>
              <Icons.Bell size={30} color={'#fff'} />
            </View>
          </View>
          <View className='flex-row'>
            <Text className='text-body'>

              Open up App.js to start working on your app!
            </Text>
          </View>
          <View className='flex-row'>
            <Text className='text-body'>

              Open up App.js to start working on your app!
            </Text>
          </View>
        </View>


      </ImageBackground>
    </SafeAreaView>

  )
}

export default Login