import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.div`
    padding: 5rem 10rem;
    background: var(--color-primary-darken);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1200px) {
        padding: 5rem 7rem;
    }

    @media (max-width: 1024px) {
        padding: 5rem 5rem;
    }
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const ItemLink = styled(LinkScroll)``;

export const Title = styled.div`
    color: var(--color-white);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.3rem;
    margin-bottom: 0.5rem;
    h1 {
        font-size: 1.8rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    h1 {
        span {
            color: var(--color-primary);
        }
    }
    & > span {
        width: 15px;
        height: 5px;
        background: var(--color-primary);
    }
`;

export const SubTitle = styled.h4`
    font-weight: 400;
    text-align: center;
    color: var(--color-white-2);
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const SiteList = styled.div`
    display: flex;
    list-style: none;
    gap: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    & > * {
        color: var(--color-white);
        transition: all 0.2s;

        font-weight: 600;
        text-align: center;
        &:hover {
            cursor: pointer;
            color: var(--color-primary);
            transform: scale(1.1);
        }
    }
`;

export const SiteListItem = styled.li``;

export const Copyright = styled.p`
    color: var(--color-gray-light);
    text-align: center;
`;

export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
`;
export const SocialListItem = styled.li`
    font-size: 1.5rem;
    color: var(--color-white);
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        color: var(--color-primary);
    }
`;
