import { UserData, getUserData } from "../../utils/asynstorage"
import store from "../store"
import { addUser, deleteUser,editUser } from "../Reducers/addusers"
import keystring from "../../constants/keystring";
import { Alert } from "react-native";

export const adduser = async (value) => {
    if (Array.isArray(value)) {
        await store.dispatch(addUser(value));
    } else {
        await store.dispatch(addUser(value));
        // await UserData(value);
    }
    // let userdata = await getUserData(keystring.ADDUSER);
    // console.log(userdata);
}

export const deleteuser = (value) => {
    Alert.alert("Delete Users","Do you Really Want to delete",
     [{ text: "Cancel", style: "Cancel" }, 
     { text: "Delete", onPress: () =>store.dispatch(deleteUser(value))}]
     ,{cancelable:true})

}

export const edituser=(value)=>{
    store.dispatch(editUser(value))
}