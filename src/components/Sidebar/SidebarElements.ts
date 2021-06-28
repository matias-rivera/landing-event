import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

interface Open {
    isOpen: boolean;
}

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background-image: var(--gradient-primary-2);

    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }: Open) => (isOpen ? "0" : "-1000px")};

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--color-white);
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--color-white);
    cursor: pointer;
    padding: 2rem 0;

    &:hover {
        color: var(--color-primary);
        background: var(--color-white);
        transition: 0.2s ease-in-out;
    }
    @media screen and (max-width: 480px) {
        padding: 1.5rem 0;
    }
    @media screen and (max-height: 480px) {
        padding: 0.5rem 0;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
