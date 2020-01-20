import * as ActionType from './talkConstants'
import { RoomState as RoomCreateState } from '../../components/Organisms/Header/TalkHeader'
import { TalkRoomState, chatState } from '../../reducers/talkReducer'

export type RoomState = Omit<TalkRoomState, 'isRock'> & {talk: chatState[]} 
export type RoomParam = Pick<TalkRoomState, 'isRock' | '_id'> & {password?: string}

export const getAllTalkRooms = () => ({
    type: ActionType.TALK_GET_ALLROOMS as typeof ActionType.TALK_GET_ALLROOMS
})

export const getTalkRoom = (roomParam : RoomParam) => ({
    type: ActionType.TALK_GET_ROOM as typeof ActionType.TALK_GET_ROOM,
    payload: {
        ...roomParam
    }
})

export const createTalkRoom = (data: RoomCreateState) => ({
    type: ActionType.TALK_CREATE_ROOM as typeof ActionType.TALK_CREATE_ROOM,
    payload: {
        data
    }
})

export const setTalkRooms = (data: TalkRoomState[]) => ({
    type: ActionType.TALK_SET_ROOMS as typeof ActionType.TALK_SET_ROOMS,
    payload: data
})

export const setTalkRoom = (data: RoomState) => ({
    type: ActionType.TALK_SET_ROOM as typeof ActionType.TALK_SET_ROOM,
    payload: {
        ...data
    }
})


export type TalkAction = 
    | ReturnType<typeof getAllTalkRooms>
    | ReturnType<typeof getTalkRoom>
    | ReturnType<typeof createTalkRoom>
    | ReturnType<typeof setTalkRooms>
    | ReturnType<typeof setTalkRoom>
    