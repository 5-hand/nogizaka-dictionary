import React from 'react'
import styled from 'styled-components'
import Img from '../../Atoms/Img'
import {Paragragh} from '../../Atoms/Paragragh'
import Wrapper from '../../Atoms/Wrapper'
import Txt from '../../Atoms/Txt'
import TxtRowSection from './TxtRowSection'
import dummy from '../../../style/img/anonymous.png'
import { Member } from '../../../reducers/MembersReducer'
import close from '../../../style/img/close.png'
import Hash from './Hash'

const zoomFieldStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    height: "100%",
    width: "100%",
    z_index: "10",
    bgColor: "rgba(0,0,0,0.7)" as "rgba(0,0,0,0.7)",
}

const contentStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "360px",
    min_height: "576px",
    bgColor: "#fff" as "#fff",
    transform: "translate(-50%,-50%)",
    padding: "20px",
}

const WeakTxt = styled(Txt)`
    display: inline-block;
    margin-left: 12px
`

const HashWrapper = styled(Wrapper)`
    overflow-Y: scroll
`

interface zoomCardProps {
    zoomOutHandler : () => void
    name: string[]
}

export type Props = Member & zoomCardProps

const ZoomCard : React.FC<Props> = props => (
    <Wrapper styled={{...zoomFieldStyle}} onClick={props.zoomOutHandler}>
        <Wrapper styled={{...contentStyle}}>
            <Wrapper styled={{position: 'absolute', top: '-30px', right: '-50px'}} onClick={props.zoomOutHandler}>
                <Img styled={{width: '100%',height: '100%'}} src={close} />
            </Wrapper>
            <Img src={props.img ? props.img : dummy} styled={{width: '100%', height: '300px'}}/>
            <Wrapper styled={{margin: '40px 0 0 0'}}>
                <Paragragh styled={{margin_top: '40px', font_weight: 'bold', font_size: '2.4rem'}}>
                    {props.name[0]}
                    <WeakTxt styled={{font_size: '1.2rem', font_weight: 'bold'}}>
                        {props.name[1]}
                    </WeakTxt>
                </Paragragh>
            </Wrapper>
            <Wrapper styled={{margin: '17px 0 0 0'}}>
                <TxtRowSection title={"生年月日"} content={props.dateOfBirth} />
                <TxtRowSection title={"血液型"} content={props.blod} />
                <TxtRowSection title={"身長"} content={`${props.height}cm`} />
            </Wrapper>
            <HashWrapper styled={{wrap:"wrap", margin: '15px 0 0 0', max_height: '50px'}}>
                <Hash hash={props.hash} segment={props.segment}/>
            </HashWrapper>
        </Wrapper>
    </Wrapper>
)

export default ZoomCard