 import React from 'react';
 import {View,Button} from 'react-native';
 import Notification from './services/Notification';
 import PushNotification  from 'react-native-push-notification';
 const App =()=>{

  
  
const handleClick=()=>{
  Notification.configure().localNotificationSchedule({
    message:'helllooo',
    date:new Date(Date.now()+1000),
    color: "red",
    actions: '["DISMISS", "SNOOZE"]',
    bigPictureUrl: "https://reactjs.org/logo-og.png",
  });
}

  return(<View style={{margin:80,flex:1,justifyContent:'space-evenly'}}>
    <Button title="pick date and time"/>
    <Button title ="press"
    onPress={handleClick}
     />
  </View>)
 }
 export default App;