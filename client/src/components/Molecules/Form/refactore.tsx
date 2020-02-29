import React from 'react'
import styled from 'styled-components'
import Inputs, {Props as InputsProps} from '../Inputs'
import FormBaseElement from '../../atoms/FormElement'
import Wrapper, {ElementStyle as WrapperStyle} from '../../atoms/Wrapper'
import ActionButton from '../../atoms/Button/ActionButton'
import { ButtonCustomProps } from '../../atoms/Button'

const FormElement = styled(FormBaseElement)`
    margin: 0 auto;
    text-align: center;
`

export interface Props {
    inputsProps: InputsProps
    button: ButtonCustomProps
    wrapperStyle?: WrapperStyle
    submitHandler?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<Props> = props => (
        <>
            <FormElement onSubmit={props.submitHandler}>
                <Wrapper styled={{...props.wrapperStyle}}>
                    <Inputs {...props.inputsProps} />
                    <Wrapper styled={{margin:'30px 0 0 0'}}>
                        <ActionButton clickHandler={props.button.clickHandler} txt={props.button.txt}/>
                    </Wrapper>
                </Wrapper>
            </FormElement>
        </>
)

export default Form