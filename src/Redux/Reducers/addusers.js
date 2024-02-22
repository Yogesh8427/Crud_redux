import { createSlice } from "@reduxjs/toolkit";

const Users = createSlice({
    name: "users",
    initialState:{user:[]},
    reducers:{
        addUser:(state,action)=>{
            if(Array.isArray(action.payload)){
                state.user=action.payload;
            }else{
                state.user.push(action.payload);
            }
        },
        deleteUser:(state,action)=>{
           state.user=state.user.filter((user)=>user.id!=action.payload);
        },
        editUser:(state,action)=>{
            let index=state.user.findIndex((user)=>user.id===action.payload.id);
            if(-1!==index){
              state.user[index]=action.payload;
            //   state.user[index].phone=action.payload.phone;
            //   state.user[index].address=action.payload.address;
            } 
        }
    }
})

export const{addUser,deleteUser,editUser}=Users.actions;
export default  Users.reducer;