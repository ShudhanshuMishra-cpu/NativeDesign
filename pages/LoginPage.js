/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// // LoginPage.js

// import React, { useState } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import deskimg from '../assest/login1.png';
// import logoImg from '../assest/login3.png';



// const LoginPage = ({ navigation }) => {
//   // const [text, setText] = useState('');

//   // const handleChangeText = (newText) => {
//   //   setText(newText);
//   // };

//   return (
//     // <View style={styles.main}>
//     <View >

//       <View style={styles.deskimg}>
//         <Image source={deskimg} style={styles.image} />
//       </View>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>

//           <Image source={logoImg} style={styles.logoImage} />
//         </View>

//       </View>






//       {/* <View style={styles.fsce}>
//         <Text style={styles.welcome}>Welcome Back</Text>
//         <View style={styles.gtd}>
//           <Text style={styles.label} >Id</Text>
//           <TextInput style={styles.input} />

//         </View>
//         <View style={styles.gtd}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput secureTextEntry style={styles.input} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={() => navigation.navigate('Home')} >
//             <Text style={styles.SignIn}>Sign In</Text>
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Text style={styles.SignUp}>SignUp</Text>
//           </TouchableOpacity>
//         </View>
//       </View> */}
//     </View>
//   );
// }


// const styles = {

//   logo: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   deskimg: {
//     //   width: '100%',
//     //   aspectRatio: 16 / 9,

//     width: '100%',
//     height: '50%',
//   },
//   image: {
//     position: 'relative',
//     top: '-20%',
//     left: '-5%',
//     width: '50%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   gtd: {
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     paddingVertical: 0,
//     paddingHorizontal: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Set to space between
//     paddingHorizontal: 20,
//     marginTop: 20,
//     //   paddingHorizontal: 0,
//   },
//   input: {
//     borderWidth: 0.5,
//     borderColor: 'rgba(128, 128, 128, 0.308)',
//     width: '100%',
//     // Additional styling for the input if needed
//   },
//   welcome: {
//     color: 'black',   // Set color to black
//     fontSize: 35,     // Set font size to 20
//     padding: 10,
//     // Add padding
//     paddingHorizontal: 10,
//     fontWeight: 'bold' // Add horizontal padding
//   },
//   label: {
//     color: 'black',   // Set color to black
//     fontSize: 20,     // Set font size to 20
//     // Additional styling for the label if needed
//   },
//   //   input:{
//   //     color: 'black', // Set color to black
//   //   },
//   SignIn: {
//     backgroundColor: '#f5c754',
//     borderRadius: 20,
//     color: 'black',
//     // border:'none',
//     borderWidth: 0,
//     width: 'max-content',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderColor: 'black',
//   },
//   SignUp: {
//     backgroundColor: '#88b6e1',
//     borderRadius: 20,
//     // border:'none',
//     color: 'black',
//     borderWidth: 0,
//     width: 'max-content',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderColor: 'black',
//   },
//   buttonText: {
//     color: 'black',
//   },


//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff', // Set background color as per your requirement
//   height: 'max-content-height',
//   },
//   logoContainer: {
//     width: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height:'50%',
//   },
//   logoImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// };

// export default LoginPage;


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logoImg from '../assest/login3.png';
import deskimg from '../assest/login1.png';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={deskimg} style={styles.image} />
      </View>
      <View  style={styles.abc}>

        <View style={styles.logoContainer}>
          <Image source={logoImg} style={styles.logoImage} />
          <Text style={styles.logoText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Username</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your username"
      placeholderTextColor="#aaaaaa"
    />
  </View>
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Password</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your password"
      placeholderTextColor="#aaaaaa"
      secureTextEntry={true}
    />
  </View>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.forgotPassword}>Forgot Password?</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.signUp}  onPress={() => navigation.navigate('SignUpPage')}   >Sign Up</Text>
  </TouchableOpacity>
</View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputWrapper: {
    marginBottom: 8,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    position: 'relative',
    top: '-20%',
    left: '-25%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black'
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  abc: {  // Styles for container 'abc'
    position: 'relative',
    width: '100%',
    top: '-15%', // Set the top position to -20%
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'gray',
    marginBottom: 10,
  },
  signUp: {
    color: 'gray',
  },
});

export default LoginPage;
