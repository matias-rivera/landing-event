import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 10rem;
    background: var(--gradient-white-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 1200px) {
        padding: 5rem 5rem;
    }

    @media (max-width: 1024px) {
        padding: 5rem 5rem;
    }
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const Underline = styled.hr`
    color: var(--color-primary-dark);
    width: 100px;
    align-self: center;
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    color: var(--color-primary-dark);
    font-size: 1.8rem;
`;

export const Sponsor = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    img {
        height: 50px;
        width: 150px;
        transition: all 0.3s;
        &:hover {
            transform: scale(1.1);
        }
        @media (max-width: 768px) {
            height: 50px;
            width: 100px;
        }
        @media (max-width: 480px) {
            height: 40px;
            width: 75px;
        }
    }
`;

export const SponsorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
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
