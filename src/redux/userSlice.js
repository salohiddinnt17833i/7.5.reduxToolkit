import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
    value: []
}
const navigate = useNavigate()
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegister: (state, actions) => {
            let copied = JSON.parse(JSON.stringify(state.value))
            copied.push(actions.payload)
            state.value = copied
        },
        userLogin: (state, actions) => {
            let copied = JSON.parse(JSON.stringify(state.value))
            copied.map(ele => {
                if (ele.email == actions.email && ele.password == actions.password) {
                    navigate('/login')
                    localStorage.setItem('logged', JSON.stringify(true))
                }
            })
            state.value = copied
        }
    }
})
export const {userRegister, userLogin} = userSlice.actions
export default userSlice