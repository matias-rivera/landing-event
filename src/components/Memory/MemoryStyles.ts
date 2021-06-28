import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
export const Title = styled.h1`
    color: var(--color-primary-dark);
`;
export const SubTitle = styled.h3`
    font-weight: 400;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Box = styled.div`
    color: var(--color-white);
    height: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(56, 90, 11, 0.8);
    padding: 0 2rem;
    transition: all 0.8s;
    font-size: 1.2rem;
    bottom: -1rem;
    width: 100%;

    overflow: hidden;

    span {
        transition: all 0.6s;
        opacity: 0;
    }

    span:nth-child(1) {
        font-weight: 700;
    }
    span:nth-child(2) {
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const Item = styled.div`
    background: ${({ url }: { url: string }) =>
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${url})`};
    background-position: center;
    background-size: cover;

    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    &:hover ${Box} {
        bottom: 0;
        height: 100%;
    }

    &:hover ${Box} span {
        opacity: 1;
    }

    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1024px) {
        height: 250px;
    }
    @media (max-width: 768px) {
        height: 200px;
    }
    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const Button = styled.button`
    color: white;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    transition: all 0.2s;
    width: 15rem;
    align-self: center;

    &:hover {
        cursor: pointer;
        background: var(--color-primary-dark);
    }
`;
