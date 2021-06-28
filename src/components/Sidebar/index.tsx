import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
} from "./SidebarElements";

interface Props {
    isOpen: boolean;
    toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: Props) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                    >
                        Nosotros
                    </SidebarLink>
                    <SidebarLink
                        to="schedule"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                    >
                        Horario
                    </SidebarLink>
                    <SidebarLink
                        to="speakers"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                    >
                        Presentadores
                    </SidebarLink>
                    <SidebarLink
                        to="subscribe"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                    >
                        Inscríbete
                    </SidebarLink>
                    <SidebarLink
                        to="location"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                    >
                        Lugar y Hora
                    </SidebarLink>
                </SidebarMenu>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
