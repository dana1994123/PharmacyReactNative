import {check, RESULTS,request, PERMISSIONS} from 'react-native-permissions';
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PLATFORM_CAMERA_PERMISSIONS ={
    ios:PERMISSIONS.IOS.CAMERA,
    android : PERMISSIONS.ANDROID.CAMERA
  }
  const REQUEST_PERMISSION_TYPE = {
    camera : PLATFORM_CAMERA_PERMISSIONS
  }
  const PERMISSION_TYPE ={
    camera:"camera"
  }
  
  
  class AppPermission{
    checkPermission = async (type) : Promise<boolean> =>{
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        if(!permissions){
            return true

        }
        try{
            const result = await check(permissions)
            if(result === RESULTS.GRANTED)return true
            return this.requestPermission(permissions)
        }catch(error){
            return false
        }
      }
      requestPermission = async(peemissions) : Promise<boolean> =>{
          try{
              const result = await request(permissions)
              return result === RESULTS.GRANTED
          }catch(error){
              return false

          }

      }

  }


  const Permission = new AppPermission()
  export {Permission, PERMISSION_TYPE}