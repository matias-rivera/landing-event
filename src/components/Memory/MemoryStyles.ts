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
`;

export const Box = styled.div`
    color: var(--color-white);
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(56, 90, 11, 0.8);
    opacity: 0;
    transition: all 0.8s;

    span:nth-child(1) {
        font-weight: 700;
        font-size: 1.1rem;
    }
    span:nth-child(2) {
        font-size: 1.1rem;
    }
`;

export const Item = styled.div`
    background: url("/images/memory.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;

    &:hover ${Box} {
        opacity: 1;
    }

    &:hover {
        cursor: pointer;
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
