import styled from "styled-components";
interface CellProps {
    playable: boolean
}


export const Cell = styled.div<CellProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: 1px solid rgba(74, 114, 161, 1);
    padding: 5px;
    cursor: ${({ playable }) => playable ? "grab" : "default"};
`;