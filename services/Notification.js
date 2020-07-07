import PushNotification from 'react-native-push-notification';
export default{
    configure(){
        PushNotification.configure({
            onNotification(notification){
                console.log('notification sent',notification);
            }
        });
        return PushNotification;
    }

};