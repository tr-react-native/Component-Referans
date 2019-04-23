import {StyleSheet} from 'react-native';

export const styleSayfa = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor:'green',
      color:'white',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  export const styleKutu = StyleSheet.create({
     kutu:{
         width:100,
         height:100,
         borderWidth:1,
         borderColor:'#333',
         backgroundColor:'#dedede',
     },
     
     secili:{
         backgroundColor:'#333',
         borderColor:'red',
     }
  });


/*

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

*/
  