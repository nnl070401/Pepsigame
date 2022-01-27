import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
  } from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height; 
  
  const Rules: React.FC = () => {
    return (
      <ImageBackground
      source={require('../Screens/assets/main_background.png')}
      style={styles.container}
      >
        <View>
        <Image
        source={require('../Screens/assets/head_icon.png')}
        style={styles.headImage}/>

        <Text style={styles.textInstruction}>{'Hướng dẫn'}</Text>
        <Button
                title='Chơi ngay'
                
                />
                <Button
                title='Quét mã '
                
                />
                <Button
                title='Bộ sưu tập'
                
                />
                <Button
                title='Chi tiết quà tặng'
                
                />
        </View>
      </ImageBackground>
    );
  };
  
  export default Rules;

  const styles = StyleSheet.create({
    container:{
        flex:1,
        

    },
    subTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      subTextHighlight: {
        fontSize: 13,
        color: 'yellow',
        fontWeight: 'bold',
      },
      subText: {
        fontSize: 12,
        color: 'white',
      },
      headImage: {
        alignSelf: 'center',
        marginTop: windowHeight * 0.1,
        
      },
      textInstruction: {
        color: '#e3c91e',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
  });


