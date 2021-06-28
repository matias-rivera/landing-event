import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

interface Scroll {
    scrollNav: boolean;
}

export const Nav = styled.nav`
    background: ${({ scrollNav }: Scroll) =>
        scrollNav ? "var(--color-primary-black)" : "transparent"};

    height: ${({ scrollNav }) => (scrollNav ? "50px" : "80px")};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    margin-top: -80px;
    top: 0;
    z-index: 100;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px) {
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 90vw;
`;

export const Logo = styled.img`
    max-width: 50px;
`;

export const NavLink = styled(LinkScroll)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        margin-top: 0.3rem;
        display: initial;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: --22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 50px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    /* &.active {
        background: var(--color-white);
        color: var(--color-primary);
        border-bottom: 3px solid var(--color-primary);
    } */

    &:hover {
        background: var(--color-white);
        color: var(--color-primary);
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e31837;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
