import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    color: #fe4010;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: rgba(238, 210, 222, 0.5);
    border-radius: 10px;
    padding: 5px 20px;

    p {
        margin: 0;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-family: 'Annie Use Your Telescope', cursive !important;
        color: #069725;
        font-weight: 700;

        .lover{
            text-transform: lowercase;
            margin-left: -5px;

        }

        img {
            transform: translateY(7px) ;
            margin-right: 5px;
        }
    }
`