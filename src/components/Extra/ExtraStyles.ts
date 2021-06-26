import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Image = styled.div`
    width: 50%;

    background: linear-gradient(
            45deg,
            rgba(56, 108, 11, 0.4),
            rgba(56, 108, 11, 0.4)
        ),
        url("/images/hero.jpg");

    background-position: center;
    background-size: cover;
`;

export const Info = styled.div`
    width: 50%;
    background-image: radial-gradient(
            circle at 40% 91%,
            rgba(251, 251, 251, 0.04) 0%,
            rgba(251, 251, 251, 0.04) 50%,
            rgba(229, 229, 229, 0.04) 50%,
            rgba(229, 229, 229, 0.04) 100%
        ),
        radial-gradient(
            circle at 66% 97%,
            rgba(36, 36, 36, 0.04) 0%,
            rgba(36, 36, 36, 0.04) 50%,
            rgba(46, 46, 46, 0.04) 50%,
            rgba(46, 46, 46, 0.04) 100%
        ),
        radial-gradient(
            circle at 86% 7%,
            rgba(40, 40, 40, 0.04) 0%,
            rgba(40, 40, 40, 0.04) 50%,
            rgba(200, 200, 200, 0.04) 50%,
            rgba(200, 200, 200, 0.04) 100%
        ),
        radial-gradient(
            circle at 15% 16%,
            rgba(99, 99, 99, 0.04) 0%,
            rgba(99, 99, 99, 0.04) 50%,
            rgba(45, 45, 45, 0.04) 50%,
            rgba(45, 45, 45, 0.04) 100%
        ),
        radial-gradient(
            circle at 75% 99%,
            rgba(243, 243, 243, 0.04) 0%,
            rgba(243, 243, 243, 0.04) 50%,
            rgba(37, 37, 37, 0.04) 50%,
            rgba(37, 37, 37, 0.04) 100%
        ),
        linear-gradient(90deg, rgb(56, 108, 11), rgb(56, 167, 0));

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
    gap: 1.5rem;
`;

export const SubTitle = styled.h3`
    color: var(--color-white);
    text-transform: uppercase;
`;

export const Title = styled.h1`
    color: var(--color-white);
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    color: var(--color-white);
    line-height: 1.5;
`;
