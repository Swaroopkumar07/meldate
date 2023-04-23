import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Animated } from 'react-native';
export default function Display({route}) {
  const position = new Animated.Value(0);
  Animated.timing(position, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const firstname =route.params.Firstname
  const secondname = route.params.secondname
  const Age = route.params.Age
  const occupation = route.params.Occupation
  const company = route.params.Company
  
    return (
   

    <SafeAreaView>
    <View>
   
    <View
                style={{
                    backgroundColor: '#000000',
                    height: 350,
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    justifyContent: 'flex-end',
                }}>
                 <Animated.View style={{ transform: [{ translateY: position }] }}>
                <Image
                    source={require('../assets/display.png')}
                    style={{
                        width: '50%',
                        height: '60%',
                        alignSelf: 'center',
                    }} />
                    <Text style={{color:'#fff',textAlign:'center',fontSize:20,fontWeight:'500'}}>Details</Text>
                    </Animated.View>
                    
            </View>
           
   
 

    
    <View style={{justifyContent:'center',alignSelf:'center',borderWidth:2,borderRadius:10,width:'99%',marginTop:'30%',padding:20,}}>
      <Text style={{fontSize:16,fontWeight:'500',color:'#111',}}>{firstname} {secondname} is {Age} years old and working as a {occupation} in {company}</Text>
    </View>
         
    </View>
    </SafeAreaView>
  )
}