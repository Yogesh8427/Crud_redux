import { StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.tittle}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:scale(10),
        marginVertical:scale(10),

    },
    text:{
        fontSize:20,
        textAlign:"center",
        padding:10, 
        width:verticalScale(80),
        width:"30%",
    },
    input: {
        backgroundColor: "grey",
        padding: scale(7),
        fontSize: 20,
        width:"50%",
        marginHorizontal: verticalScale(30),
        color: 'white',
        borderRadius: scale(5),
    }
})