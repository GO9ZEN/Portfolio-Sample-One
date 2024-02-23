import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { profileDetailsReducer } from './reducers/profileReducers'
import { projectDetailsReducer } from './reducers/projectReducers'
import { servicesDetailsReducer } from './reducers/serviceReducers'
import { skillsDetailsReducer } from './reducers/skillReducer'

import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    profileDetails: profileDetailsReducer,
    projectDetails: projectDetailsReducer,
    servicesDetails: servicesDetailsReducer,
    skillsDetails: skillsDetailsReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userSignIn: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store