import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
    Nav,
    NavbarContainer,
    NavLink,
    Logo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    LinksContainer,
} from "./NavbarElements";

interface Props {
    toggle: () => void;
}

const Navbar = ({ toggle }: Props) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        console.log(window.location.pathname);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLink
                            to="hero"
                            smooth={true}
                            duration={500}
                            spy={true}
                        >
                            <h6>SOFTWARE XXI</h6>
                        </NavLink>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Nosotros
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="schedule"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Horario
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="speakers"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Presentadores
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="subscribe"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Suscribete
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="location"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Lugar
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
