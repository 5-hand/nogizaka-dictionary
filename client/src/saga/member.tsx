import 
    { 
        // all,  fork, 
        put, call, takeLatest} 
from 'redux-saga/effects'
import * as Action from '../actions/members/membersConstants'
import * as MembersAction from '../actions/members/membersActions'
import { MemberApiFactory } from '../api/MemberApiFactory'

function* addMembers(action : ReturnType<typeof MembersAction.addMembers>){
    const memberData = action.payload;
    
    try{
        const api = MemberApiFactory();
        const apiOption = {
            method: 'post' as 'post', 
            data: memberData, 
            url: '/upload'
        }
        const result = yield call(api, apiOption)
        const data = result.data
        alert(`${data.message}`)
    }catch(error) {
        yield alert(error)
    }
}

function* getAllMembers(){
    try{
        const api = MemberApiFactory();
        const apiOption = {
            method: 'get' as 'get',
            url: '/members'
        }
        const result = yield call(api, apiOption)
        const data = result.data
        yield put(MembersAction.storageMembers({members: data.members}))
    }catch(error) {
        yield alert(error)
    }
}

export default function* memberActions() {
    yield takeLatest (Action.MEMBERS_MEMBER_ADD, addMembers)
    yield takeLatest (Action.MEMBERS_GET_ALLMEMBERS, getAllMembers)
}