import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url("/images/hero.jpg");
    background-position: center top;
    height: 20rem;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    gap: 2rem;
`;

export const SubTitle = styled.h3`
    color: var(--color-white-2);

    font-size: 1.3rem;
    font-weight: 400;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        width: 4rem;
        height: 2px;
        background: var(--color-primary);
        bottom: -0.6rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Title = styled.div`
    color: var(--color-white);
    text-align: center;
    font-weight: 800;
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
