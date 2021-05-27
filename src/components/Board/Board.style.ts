import styled from "styled-components";

interface WrapperProps {
    size: number
}

export const Wrapper = styled.div<WrapperProps>`
    width: ${({ size }) => size * 60 + 'px'};
    height: ${({ size }) => size * 60 + 'px'};
    display: flex;
    flex-wrap: wrap;
    background-color: aliceblue;
    
`

