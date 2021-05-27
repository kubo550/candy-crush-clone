import styled from "styled-components";

interface WrapperProps {
    size: number
}

export const Wrapper = styled.div<WrapperProps>`
    width: 600px;
    height: 600px;
    display: grid;
    grid-template: repeat(${({ size }) => size}, 1fr) /  repeat(${({ size }) => size}, 1fr);
    background-color: aliceblue;
    position: relative;
    
`

