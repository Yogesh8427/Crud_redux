import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../Components/Input'
import { scale, verticalScale } from 'react-native-size-matters'
import { adduser, edituser } from '../Redux/actions/usersaction'
import navigationstring from '../Navigations/navigationstring'

const Adduser = ({ navigation, route }) => {
    const [user, setuser] = useState({ id: Date.now(), name: "", address: "", phone: "", age: "" });
    const getname = (name) => {
        setuser({ ...user, name })
    }
    const getaddress = (address) => {
        setuser({ ...user, address })
    }
    const getphone = (phone) => {
        setuser({ ...user, phone })
    }
    const getage = (age) => {
        setuser({ ...user, age })
    }
    const adddatatostorage = () => {
        if (user.name.trim() == "") {
            alert("please enetr a valid name")
        }
        else if (user.address.trim() == "") {
            alert("please enetr a valid address")
        }
        else if (user.phone.trim() == "") {
            alert("please enetr a valid phone")
        }
        else if (user.age.trim() == "") {
            alert("please enetr a valid age")
        } else {
            adduser(user);
            navigation.navigate(navigationstring.HOME);
        }
    }
    useEffect(() => {
        if (route.params) {
            setuser(route.params.data);
        }
    }, [])
    const editdatatostorage = () => {
        edituser(user);
        navigation.navigate(navigationstring.HOME)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.hadding}>{route.params?"Edit User":"Add User"}</Text>
            <Input tittle={"Name"} onChangeText={(text) => getname(text)}
                value={user.name} />
            <Input tittle={"Address"} onChangeText={(text) => getaddress(text)} value={user.address} />
            <Input tittle={"Phone"} keyboardType={"number-pad"} value={user.phone}
                maxLength={10} onChangeText={(text) => getphone(text)} />
            <Input tittle={"Age"} keyboardType={"number-pad"} value={user.age}
                maxLength={2} onChangeText={(text) => getage(text)} />
            {route.params ? <TouchableOpacity style={styles.button} onPress={editdatatostorage}>
                <Text style={{ fontSize: 30, color: "white" }}>edit</Text></TouchableOpacity>
                : <TouchableOpacity style={styles.button} onPress={adddatatostorage}>
                    <Text style={{ fontSize: 30, color: "white" }}>Submit</Text></TouchableOpacity>}
        </View>
    )
}

export default Adduser

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(50),
    },
    hadding: {
        fontSize: 30,
        backgroundColor: "blue",
        color: "white",
        padding: scale(10),
        borderRadius: 30,
        marginBottom: scale(50)
    },
    button: {
        backgroundColor: "green",
        color: "white",
        padding: scale(10),
        borderRadius: 10,
        marginVertical: verticalScale(50),
    }

})