import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-image: var(--gradient-white);

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

export const SubTitle = styled.h2`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--color-primary-dark);
    font-size: 1.8rem;
`;

export const Underline = styled.hr`
    color: var(--color-primary-dark);
    width: 70px;
    align-self: center;
    margin-bottom: 2rem;
`;

export const SpeakersContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const PictureIcon = styled.div`
    position: absolute;

    transform: translate(-50%, -50%);
    color: var(--color-white);
    font-size: 3rem;
    display: flex;
    opacity: 0;
    transition: all 0.3s;
    top: 80%;
    left: 50%;
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;

    transition: all 0.3s;
`;

export const PictureContainer = styled.div`
    border-radius: 50%;
    height: 150px;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`;

export const SpeakerName = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--color-black);
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const SpeakerInfo = styled.h4`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const Speaker = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: flex-start;
    align-items: center;

    &:hover ${PictureContainer} {
        background: var(--color-primary-dark);
    }

    &:hover ${Picture} {
        transform: scale(1.2);
        opacity: 0.6;
    }

    &:hover ${PictureIcon} {
        opacity: 1;
        top: 50%;
        cursor: pointer;
    }

    &:hover ${SpeakerName} {
        color: var(--color-primary);
    }
`;

export const Profile = styled.div`
    display: flex;
    width: 70rem;
    height: 30rem;
    @media (max-width: 1024px) {
        width: 48rem;
        height: 26rem;
    }
    @media (max-width: 768px) {
        width: 25rem;
        height: 100%;
    }
    @media (max-width: 480px) {
        width: 18rem;
        height: 100%;
    }
    @media (max-height: 480px) {
        width: 100vw;
    }
`;
export const ProfilePicture = styled.img`
    height: 100%;
    max-width: 50%;
    @media (max-width: 768px) {
        display: none;
    }
`;
export const ProfileInfo = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (max-width: 1200px) {
        gap: 1rem;
        padding: 3rem 2rem;
        flex-grow: 2;
    }
`;
export const ProfileTitle = styled.h1`
    color: var(--color-primary);
    margin-bottom: 0.5rem;
`;
export const ProfileSubTitle = styled.h3`
    color: var(--color-gray);
    font-weight: 400;
`;
export const ProfileCompany = styled.img`
    align-self: flex-start;
    max-height: 40px;
    max-width: 80px;
`;
export const ProfileBio = styled.p`
    color: var(--color-gray);
    font-size: 1.1rem;
    line-height: 1.5;
`;
export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;

    * {
        transition: all 0.2s;
        &:hover {
            color: var(--color-primary);
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`;
export const SocialListItem = styled.li`
    font-size: 1.5rem;
`;
