import { createSlice } from "@reduxjs/toolkit"

const initialState={
    name:"",
    email:"",
    role :"",
    organizationID:"",
    organizationName:""
}
const UserSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setUser(state,action){
            state.name=action.payload.name;
            state.email=action.payload.email;
            // state.organizationName=action.payload.organizationName;
            state.organizationID=action.payload.organizationID;
        }
    }
})
export const {setUser} =UserSlice.actions;
export default UserSlice.reducer;