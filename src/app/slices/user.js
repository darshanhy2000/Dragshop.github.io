import {createSlice} from "@reduxjs/toolkit";

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        user:{}
    },
    reducers: {
        // Login
        login: (state) => {
            state.status = true
            state.user = {
                name: 'Darshan',
                role: 'customer',
                email: 'darshan@gmail.com',
                pass:'druva@1722'
            }
        },
        // Register
        register: (state, action) => {
            let { user, email, pass } = action.payload;
            state.status = true
            state.user = {
                name: user,
                role: 'customer',
                email: email,
                pass: pass
            }
        },
        // Logout
        logout: (state) => {
            state.status = false
            state.user = {}
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer
