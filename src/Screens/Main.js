import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import navigationstring from '../Navigations/navigationstring';
import { addUser } from '../Redux/Reducers/addusers';
import { getUserData } from '../utils/asynstorage';
const Main = ({ navigation }) => {
  const[userdata,setuserdata]=useState();
  const adduserscreen = () => {
    navigation.navigate(navigationstring.ADDUSER)
  }
  const user = async () => {
    let users = await getUserData();
    return users;
  }
  let storage=useSelector(state=>state.Users.user);
  const getdata=()=>{
    user().then(value=>{
      addUser(value);
      setuserdata(storage);
      console.log(storage)
    })
  }
  useEffect(getdata, [storage])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>-: Users :-</Text>
      <FlatList
        data={userdata}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
      />
      <TouchableOpacity style={styles.button} onPress={adduserscreen}>
        <Text style={{ fontSize: 50, color: "white" }}>+</Text></TouchableOpacity>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(35),
    height: Dimensions.get("window").height,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "blue",
    padding: scale(10),
    color: "white",
    marginHorizontal: scale(50),
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    backgroundColor: "blue",
    right: scale(10),
    bottom: verticalScale(10),
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    justifyContent: "center",
    alignItems: "center"
  }
})