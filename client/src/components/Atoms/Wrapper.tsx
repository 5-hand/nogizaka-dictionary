import styled from 'styled-components'
import constantStyle from '../../style/styleModel'
import {mediaMobile} from '../../style/commonStyle'

interface Style {
    [k :string] : string
}

export type ElementStyle = Partial<Style & Pick<constantStyle, 'display' | 'align_items' | 'justify_content' | 'flex_direction' | 'bgColor'>>

interface WrapperProps {
    styled: ElementStyle
}

const Wrapper = styled.div<WrapperProps>`
    display:${props => props.styled.display};
    align-items: ${props => props.styled.align_items};
    justify-content: ${props => props.styled.justify_content};
    flex-direction: ${props => props.styled.flex_direction};
    max-width: ${props => props.styled.max_width};
    min-width: ${props => props.styled.min_width};
    width: ${props => props.styled.width};
    max-height: ${props => props.styled.max_height};
    min-height: ${props => props.styled.min_height};
    height: ${props => props.styled.height};
    background-color: ${props => props.styled.bgColor};
    padding: ${props => props.styled.padding};
    margin: ${props => props.styled.margin};
`

export const withSPStyle = (Component : typeof Wrapper, spStyle: Style) => {
    return styled(Component)`
      ${mediaMobile`
        ${spStyle}
      `};
    `;
};

export default Wrapper