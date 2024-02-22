import { Alert } from "react-native";
import { addUser, deleteUser, editUser } from "../Reducers/addusers";
import store from "../store";

export const adduser = async (value) => {
    if (Array.isArray(value)) {
        await store.dispatch(addUser(value));
    } else {
        await store.dispatch(addUser(value));
    }

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
export const userLogin=()=>{

}