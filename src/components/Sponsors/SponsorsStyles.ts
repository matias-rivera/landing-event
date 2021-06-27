import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 10rem;
    background: var(--gradient-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

export const Title = styled.h1`
    color: var(--color-primary-dark);
`;

export const SponsorsContainer = styled.div`
    img {
        height: 50px;
        width: 150px;
        transition: all 0.3s;
        &:hover {
            transform: scale(1.1);
        }
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

    align-self: center;

    &:hover {
        cursor: pointer;
        background: var(--color-primary-dark);
    }
`;
