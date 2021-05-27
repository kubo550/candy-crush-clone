import { motion } from "framer-motion"
import styled from "styled-components"


export const Wrapper = styled(motion.div)`
    position: fixed;
    overflow: hidden;
    
       top: 0;
        left: 0;
        width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0,0,0, .4);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        background-color: rgba(244,244,244, 0.6);
        width: 30%;
        height: 30%;
        justify-content: center;
        align-items: center;
        border-radius: .5rem;

        button {
            cursor: pointer;
        }
    }
`

