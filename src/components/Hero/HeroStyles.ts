import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(
            to right,
            rgba(0, 8, 106, 0.8),
            rgba(0, 8, 106, 0.8)
        ),
        url("/images/hero.jpg");
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 80%;
`;

const Text = styled.h1`
    text-align: center;
    color: white;
`;

export const Title = styled(Text)`
    font-size: 6rem;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 3px white;
`;

export const SubTitle = styled(Text)`
    font-size: 3.5rem;
`;

export const Location = styled(Text)`
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const Company = styled(Text)``;

export const Date = styled(Text)`
    font-weight: 400;
    letter-spacing: 4px;
`;

export const Button = styled.button`
    border: 2px solid currentColor;
    background: transparent;
    border-radius: 3rem;
    color: white;
    font-size: 2rem;
    font-weight: 100;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::after {
        background: linear-gradient(
            90deg,
            rgba(0, 151, 255, 1) 0%,
            rgba(0, 91, 255, 1) 67%
        );
        border-radius: 3rem;
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-100%, 0) rotate(10deg);
        transform-origin: top left;
        transition: 0.2s transform ease-out;
        will-change: transform;
        z-index: -1;
    }
    &:hover::after {
        transform: translate(0, 0);
    }
    &:hover {
        cursor: pointer;
        border: 2px solid transparent;

        transform: scale(1.05);
        will-change: transform;
    }
`;

/* export const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    background: rgb(0, 151, 255);
    background: linear-gradient(
        90deg,
        rgba(0, 151, 255, 1) 0%,
        rgba(0, 91, 255, 1) 100%
    );
    transition: all 2s;

    &:hover {
        cursor: pointer;
        background: linear-gradient(
            90deg,
            rgba(0, 151, 255, 1) 50%,
            rgba(0, 91, 255, 1) 100%
        );
    }
`;
 */
