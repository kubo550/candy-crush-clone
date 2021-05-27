import styled from "styled-components";
interface CellProps {
    playable: boolean
}


export const Cell = styled.div<CellProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: 1px solid brown;
    background-color: #ddd;
    padding: 5px;
    cursor: ${({ playable }) => playable ? "grab" : "default"};
`;