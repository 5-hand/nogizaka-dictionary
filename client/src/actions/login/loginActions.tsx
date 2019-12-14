import * as ActionType from './loginConstants'
import { userState } from '../../reducers/userReducer'

export interface DataType {
    email: string
    password: string
}

export interface UserIsLogin {
    isLogin: boolean
}

export const createAcount = (data : DataType) => ({
    type: ActionType.CREATE_ACOUNT as typeof ActionType.CREATE_ACOUNT,
    payload: {
        ...data
    }
})

export const loginAcount = (data: DataType) => ({
    type: ActionType.LOGIN_ACOUNT as typeof ActionType.LOGIN_ACOUNT,
    payload: {
        ...data
    }
})

export const setUserData = (data : userState) => ({
    type: ActionType.SET_USERDATA as typeof ActionType.SET_USERDATA,
    payload: {
        ...data
    }
})

export const changeUserIsLogin = (isLogin : Pick<UserIsLogin,'isLogin'>) => ({
    type: ActionType.CHANGE_USER_ISLOGIN as typeof ActionType.CHANGE_USER_ISLOGIN,
    payload: isLogin
})

export type LoginAction =
    |ReturnType<typeof createAcount>
    |ReturnType<typeof loginAcount>
    |ReturnType<typeof setUserData>
    |ReturnType<typeof changeUserIsLogin>