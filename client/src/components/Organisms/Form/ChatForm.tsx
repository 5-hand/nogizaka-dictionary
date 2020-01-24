import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import Form from '../../Molecules/Form'
import Wrapper from '../../Atoms/Wrapper'
import { userState } from '../../../reducers/userReducer';
import { RoomState, chatState } from '../../../reducers/talkReducer';

let socket : SocketIOClient.Socket;

interface Props {
    user: userState
    room: RoomState
    setChat: (data: chatState[]) => void
}

const ChatForm: React.FC<Props> = props => {
    const [chatState, setChatState] = useState('')

    if(!socket) {
        socket = io("localhost:3001")
        socket.on("return chat", (data: {content: chatState[]}) => {
            const chatData = data.content
            props.setChat(chatData)
        })
    }

    const PostChatForm = () => {
        if(checkEmpty(chatState)){
            sendChat()
            setChatState('')
        }else {
            alert('未入力では送信できません。')
        }
    }

    const sendChat = () => {
        const postData = {
            userName: props.user.nickName,
            chat: chatState,
            roomId: props.room._id
        }
        socket.emit("chat", postData)
    }

    const checkEmpty = (value: string) => {
        const isResult = value.length > 0 ? true : false
        return isResult  
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        PostChatForm()
    }

    const FormProps = {
        inputsProps: {
            inputs: [
                {
                    props: {
                        type: 'text',
                        maxLength: 120,
                        placeholder: 'メッセージを送る',
                        value: chatState,
                        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setChatState(e.target.value)
                    }
                }
            ],
            baseStyle: {
                inputStyle: {width: '400px', padding: '15px 12px', font_size: '1.4rem'} as const
            }
        },
        buttonsProps: {
            buttons: [
                {
                    buttonTxt: 'chat',
                }
            ],
            baseButtonStyle: {padding: '10px', bgColor: '#812990'} as const,
            baseButtonWrapperStyle: {margin: '0 0 0 20px'}
        },
        wrapperStyle: { display: 'flex', justify_content: 'center', align_items: 'center'} as const,
        submitHandler
    }

    return(
        <Wrapper styled={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px 0', bgColor: '#fff' as const}}>
            <Form {...FormProps}/>
        </Wrapper>
    )
}

export default ChatForm