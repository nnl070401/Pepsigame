import React,{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import TextButton from '../Navigations/Button/TxBtn'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Button,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TxButton from '../Navigations/Button/TxBtn';
import TextInputField from '../Navigations/input/TextInputField';
import RetangleButton from '../Navigations/Button/RetangleButton';

const PhoneER =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const signInSchema = Yup.object({
    phoneNumber: Yup.string()
      .required('Enter your phone number!')
      .min(6, 'enter at least 6 numbers')
      .max(12, 'enter up to 12 numbers')
      .matches(PhoneER, 'ERROR'),
    userName: Yup.string()
      .min(2, 'Enter at least 2 characters')
      .max(100, 'Enter up to 100 characters')
      .required('Enter your name!'),
  });

const SignUp: React.FC = (props: any) => {
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] = React.useState('');
    const [check1, setCheck1] = useState(false);
    const {navigation} = (props);
    const isAllTrue = (isTermRead: boolean, formikValid: boolean) => {
        if (isTermRead === true || formikValid === true) {
          return true;
        }
        return false;
      };
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>
                Hey, chào mừng bạn đến với
            </Text>

            <Text style={styles.text2}>
                Pepsi Tet
            </Text>

            <Text style={styles.text3}>
                Đăng ký
            </Text>
            
            <TextInput
                style= {styles.textIp1}
                onChangeText={onChangeText}
                value={text}
                placeholder='Nhập số điện thoại'
            />

            <TextInput
                style= {styles.textIp2}
                onChangeText={onChangeText1}
                value={text1}
                placeholder='Tên người dùng'
            />
            
            <View style={styles.btnOTP}>
                <RetangleButton
                title='Lấy mã OTP'
                onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <Text style={styles.text4}>
                Hoặc
            </Text>

            <View style={styles.btnDN}>
                <Button
                title='Đăng nhập'
                onPress={() => navigation.navigate('Login')}
                />
            </View>
            <View style ={styles.Ckbox}>
                <CheckBox
                disabled ={false}
                value = {check1}
                onValueChange={(newvalue) => setCheck1(newvalue)}
                />
            </View>
            <View>
            <Text style={styles.text5}>
                    Tôi đã đọc và đồng ý với
            </Text>
            <TextButton
            title='thể lệ chương trình'
            onPress={() => {navigation.navigate('Rules')}}
            />
            <Text style={styles.text6}>
                    Pepsi Tết.
            </Text>
            </View>
            
            
        </View>
        
        
        
      );
};
export default SignUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',

    },
    text1:{
        position: 'absolute',
        width:179,
        height:24,
        left:98,
        top:112,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:16,
        fontWeight:'600',
        lineHeight:24,
    },

    text2:{
        position: 'absolute',
        width:163,
        height:148,
        left:106,
        top:136,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:36,
        fontWeight:'bold',
        lineHeight:48,

        color:'#000000'
    },

    text3:{
        position: 'absolute',
        width:103,
        height:26,
        left:136,
        top:214,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize:22,
        fontWeight:'normal',
        lineHeight:26,

        textAlign:'center',
        letterSpacing:-0.3,

        color:'#414141',
    },

    

    textIp1:{
        position: 'absolute',
        width:340,
        height:44,
        left:17,
        top:290,

        borderRadius:8,
        borderWidth:1,
    },
    textIp2:{
        position: 'absolute',
        width:340,
        height:44,
        left:17,
        top:350,

        borderRadius:8,
        borderWidth:1,
    },
    Ckbox:{
        position: 'absolute',
        width:228,
        height:14,
        left:10,
        top:400,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight:'normal',
        fontSize:12,
        lineHeight:14,

        color:'#000000',
    },
    btnOTP:{
        position: 'absolute',
        width:264,
        height:44,
        left:57,
        top:530,
    
        borderRadius:8,
    },
    text4:{
        position: 'absolute',
        width:24,
        height:14,
        left:175,
        top:580,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:10,
        fontWeight:'normal',
        lineHeight:14,

        color:'#000000'
    },

    btnDN:{
        position: 'absolute',
        width:264,
        height:44,
        left:57,
        top:610,
        
        backgroundColor:'Primary',
        borderColor:'Primary',
    },
    text5:{
        position: 'absolute',
        width:288,
        height:14,
        left:40,
        top:410,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize:12,
        fontWeight:'normal',
        lineHeight:14,

        color:'#000000',

    },
    text6:{
        position: 'absolute',
        width:288,
        height:14,
        left:277,
        top:410,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize:12,
        fontWeight:'normal',
        lineHeight:14,

        color:'#000000',

    },
});
