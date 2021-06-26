import styled from "styled-components";

export const Container = styled.div`
    padding: 10rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: var(--color-white);
`;

export const SubTitle = styled.h2`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--color-primary-dark);
`;

export const Underline = styled.hr`
    color: var(--color-primary-dark);
    width: 100px;
    align-self: center;
    margin-bottom: 3rem;
`;

export const SpeakersContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    transition: all 0.3s;
`;

export const PictureContainer = styled.div`
    width: 255px;
    height: 255px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
`;

export const SpeakerName = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--color-black);
`;

export const SpeakerInfo = styled.h4`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
`;

export const Speaker = styled.div`
    width: 255px;
    height: 360px;
    display: flex;
    flex-direction: column;

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
    width: 100%;
    height: 100%;
`;
export const ProfilePicture = styled.img`
    width: 555px;
`;
export const ProfileInfo = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
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
    width: 200px;
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
