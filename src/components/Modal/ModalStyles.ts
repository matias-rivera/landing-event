import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;

    z-index: 1000;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    &:hover {
        cursor: pointer;
    }
`;

export const CloseButton = styled(FaTimes)`
    position: absolute;
    font-size: 2rem;
    right: 1rem;
    top: 1rem;
    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
    }
`;
