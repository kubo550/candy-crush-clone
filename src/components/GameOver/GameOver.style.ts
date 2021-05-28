import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  position: fixed;
  overflow: hidden;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    background-color: rgba(244, 244, 244, 0.6);
    width: 30%;
    height: 30%;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;


    h2 {
        font-size: 2.5rem;
         font-family: 'Annie Use Your Telescope', cursive !important;
        color: #c92200;
        margin: 0;
        margin-bottom: 40px;
        text-transform: uppercase;

    }


    button {
      box-shadow: inset 0px 1px 0px 0px #f9eca0;
      background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
      background-color: #f0c911;
      border-radius: 6px;
      border: 1px solid #e65f44;
      display: inline-block;
      cursor: pointer;
      color: #c92200;
       font-family: 'Annie Use Your Telescope', cursive !important;
      font-size: 20px;
      font-weight: bold;
      padding: 6px 24px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #ded17c;

      &:hover {
        background: linear-gradient(to bottom, #f2ab1e 5%, #f0c911 100%);
        background-color: #f2ab1e;
      }
      &:active {
        position: relative;
        top: 1px;
      }
    }
  }
`;
