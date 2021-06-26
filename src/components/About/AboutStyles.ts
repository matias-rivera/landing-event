import styled from "styled-components";

export const Container = styled.div`
    padding: 10rem 10rem;
    display: flex;
    justify-content: space-between;
`;

export const InfoContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InfoSubTitle = styled.h3`
    color: var(--color-gray);
    font-weight: 400;
`;

export const InfoTitle = styled.h1`
    font-size: 3rem;
    color: var(--color-primary);
`;

export const InfoText = styled.div`
    color: var(--color-gray);
    font-size: 1.1rem;
    line-height: 1.6;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;

    span:nth-child(1) {
        color: var(--color-primary);
    }

    span:nth-child(2) {
        font-weight: 700;
    }

    span:nth-child(3) {
        margin-left: 1rem;
        font-weight: 400;
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
    &:hover {
        cursor: pointer;
        background: var(--color-primary-dark);
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

export const Card = styled.div`
    padding: 40px;
    width: 350px;
    height: 200px;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

export const CardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #1c1c24;
`;

export const CardText = styled.p`
    color: var(--color-gray);
`;

export const CardNumber = styled.div`
    position: absolute;
    bottom: -2.5rem;
    right: -2.5rem;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: var(--color-primary-strong);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    * {
        position: absolute;
        bottom: 3.2rem;
        right: 3.5rem;
    }
`;

export const CardIcon = styled.div`
    font-size: 4rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: var(--color-gray-light);
`;
