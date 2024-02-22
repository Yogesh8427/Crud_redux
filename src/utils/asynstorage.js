import AsyncStorage from '@react-native-async-storage/async-storage';
import keystring from '../constants/keystring';
export const UserData = async (value) => {
    try {
        let users = await AsyncStorage.getItem(keystring.ADDUSER);
        if (users==null) {
            await AsyncStorage.setItem(keystring.ADDUSER, JSON.stringify([]));
            users=JSON.parse(users);
            users.push(value);
            await AsyncStorage.setItem(keystring.ADDUSER, JSON.stringify(users));
        }
        else {
            users=JSON.parse(users);
            users.push(value);
            await AsyncStorage.setItem(keystring.ADDUSER, JSON.stringify(users));
        }
    } catch (e) {
    }
};

export const getUserData = async () => {
    try {
        const data = await AsyncStorage.getItem(keystring.ADDUSER);
        return JSON.parse(data);
    } catch (error) {

    }
}