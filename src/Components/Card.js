import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import { deleteuser } from '../Redux/actions/usersaction'
import navigationstring from '../Navigations/navigationstring'

const Card = ({ item,navigation}) => {
    const _deleteuser=(id)=>{
        deleteuser(id);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Address: {item.address}</Text>
            <Text style={styles.text}>Phone: {item.phone}</Text>
            <Text style={styles.text}>Phone: {item.age}</Text>
            <View style={styles.buttcon}>
            <TouchableOpacity style={{...styles.button,backgroundColor:"green"}} 
            onPress={()=>navigation.navigate(navigationstring.ADDUSER,{data:item})} >
                <Text style={{color:"white"}}>Edit</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             onPress={()=>_deleteuser(item.id)}><Text style={{color:"white"}}>Delete</Text>
             </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: "skyblue",
        marginVertical: verticalScale(20),
        padding: scale(30),
        marginHorizontal: scale(50),
        borderRadius: 10,
        alignItems:"center"
    },
    text: {
        fontSize:20,
    },
    button:{
        backgroundColor:"crimson",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:scale(80),
        height:verticalScale(40),
        borderRadius:scale(6),
        marginTop:verticalScale(10)
    },
    buttcon:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"100%",
    }
})