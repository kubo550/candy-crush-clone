import styled from "styled-components";

interface WrapperProps {
    size: number
}

export const Wrapper = styled.div<WrapperProps>`
    min-width: 600px;
    min-height: 600px;
    display: grid;
    grid-template: repeat(${({ size }) => size}, 1fr) /  repeat(${({ size }) => size}, 1fr);
    position: relative;
    background-color: rgba(238, 210, 222, 0.8);
    box-sizing: content-box;
    padding: 6px;
    backdrop-filter: blur(2px);
    border-radius: 15px;
`

