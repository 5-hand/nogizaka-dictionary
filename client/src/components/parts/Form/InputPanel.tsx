import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../../style/commonStyle'
import { DataType } from '../../../actions/login/loginActions'

const Form = styled.form`
    margin: 0 auto;
    text-align: center;
`

const Input = styled.input`
    margin: 5px 0;
    font-size: 1.4rem;
    padding: 5px 8px;
    width: 280px;
    border: 1px solid #dddfe2;
`

const Navi = styled.p`
    position: relative;
    overflow: hidden;
    width: 280px;
    margin: 10px auto 0;
    text-align: center;
    font-size: 1.2rem;
    &::before,&::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 300px;
        border-bottom: 1px solid #ccd0d5;
    }
    &::before {
        right: 63%;
    }
    &::after {
        left: 63%;
    }
`

const Wrapper = styled.div`
    margin: 20px auto;
    text-align: center;
`

interface props {
    tabIndex: number
    main: string
    sub: string
    tabChange: React.Dispatch<1 | 2>
    createAcount: (data: DataType) => void
    loginAcount: (data: DataType) => void
}

const InputPanel: React.FC<props> = (props) => {
    
    const tab = props.tabIndex === 1 ? 2 : 1 
    const initialValue = {name: '', password: ''}
    const [value, setValue] = useState(initialValue)
    const submitForm = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        const data = {
            name: value.name,
            password: value.password
        }

        if(data.name === '' || data.password === '') {
            alert('正しい値を入力してください。')
            return
        }else{
            if(props.tabIndex === 1){
                props.loginAcount(data)
                setValue(initialValue)
            }else{
                props.createAcount(data)
                setValue(initialValue)
            }
        }
    }
    
    return(
        <>
            <Form onSubmit={(e : React.FormEvent<HTMLElement>) => submitForm(e)}>
                <Input type="text" id = "form_name" placeholder="名前" value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}/>
                <Input type="password" id ="form_password" placeholder="パスワード" value={value.password} onChange={(e) => setValue({...value, password: e.target.value})}/>
                <Button styled={{width:"280",bgColor:"#bf87c1"}}>{props.main}</Button>
            </Form>
                <Navi>または</Navi>
                <Wrapper>
                    <Button styled={{bgColor:"#42b72a",padding: "10px 28px"}} onClick={() => props.tabChange(tab)}>{props.sub}</Button>
                </Wrapper>
        </>
    )
}

export default InputPanel