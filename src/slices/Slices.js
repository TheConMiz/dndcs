import {createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({

    name: 'app',
    
    initialState: {
        app: {
            settingsMenu: false,
        },
    },

    reducers: {
    
        toggleSettings: (state) => {
            
            state.app.settingsMenu = !state.app.settingsMenu
        }
    }
})

export { appSlice }
