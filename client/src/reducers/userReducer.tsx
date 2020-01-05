import { Reducer } from 'redux'
import { LoginAction } from '../actions/login/loginActions'
import * as ActionType from '../actions/login/loginConstants'
import * as ActionUserType from '../actions/user/userConstants'
import { UserAction } from '../actions/user/userActions'

const initialState = {
    permission: '',
    id: '',
    nickName: '新参者',
    message: 'こんにちは。',
    rank: 'アンダー',
    favoriteMembers: [{}],
    login: false,
}

export type userState = typeof initialState

const UserReducer : Reducer<userState, LoginAction> = (state : userState = initialState, action : LoginAction | UserAction) => {
    switch(action.type) {
        case ActionType.LOGIN_SET_USERDATA : 
            return {
                ...state,
                ...action.payload
            }
        case ActionType.LOGIN_CHANGE_USER_ISLOGIN :
            return {
                ...state,
                login: action.payload.isLogin
            }
        case ActionUserType.USER_SET_USERDATA : 
            return {
                ...state,
                ...action.payload
            }
        default : 
            return state
    }
}

export default UserReducer