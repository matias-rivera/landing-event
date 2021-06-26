import styled from "styled-components";

export const Container = styled.div`
    /*     background: radial-gradient(
            circle at 72% 83%,
            rgba(12, 12, 12, 0.5) 0%,
            rgba(12, 12, 12, 0.5) 50%,
            rgba(172, 172, 172, 0.04) 50%,
            rgba(172, 172, 172, 0.04) 100%
        ),
        linear-gradient(130deg, rgba(5, 235, 123, 0.8), rgba(47, 52, 6, 0.8)),
        url("/images/hero.jpg"); */

    background-image: radial-gradient(
            circle at 37% 80%,
            hsla(180, 0%, 7%, 0.1) 0%,
            hsla(180, 0%, 7%, 0.1) 45%,
            transparent 45%,
            transparent 73%,
            transparent 73%,
            transparent 100%
        ),
        radial-gradient(
            circle at 60% 45%,
            hsla(180, 0%, 7%, 0.1) 0%,
            hsla(180, 0%, 7%, 0.1) 67%,
            transparent 67%,
            transparent 71%,
            transparent 71%,
            transparent 100%
        ),
        radial-gradient(
            circle at 23% 84%,
            hsla(180, 0%, 7%, 0.1) 0%,
            hsla(180, 0%, 7%, 0.1) 55%,
            transparent 55%,
            transparent 97%,
            transparent 97%,
            transparent 100%
        ),
        radial-gradient(
            circle at 52% 76%,
            hsla(180, 0%, 7%, 0.1) 0%,
            hsla(180, 0%, 7%, 0.1) 37%,
            transparent 37%,
            transparent 95%,
            transparent 95%,
            transparent 100%
        ),
        radial-gradient(
            circle at 50% 81%,
            hsla(180, 0%, 7%, 0.1) 0%,
            hsla(180, 0%, 7%, 0.1) 79%,
            transparent 79%,
            transparent 85%,
            transparent 85%,
            transparent 100%
        ),
        linear-gradient(45deg, rgba(31, 89, 11, 0.9), rgba(104, 210, 51, 0.9)),
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
            var(--color-primary) 0%,
            var(--color-primary) 60%
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
