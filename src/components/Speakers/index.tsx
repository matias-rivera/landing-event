import { useState } from "react";
import {
    Container,
    Title,
    SpeakersContainer,
    Speaker,
    SpeakerName,
    SpeakerInfo,
    PictureContainer,
    Picture,
    PictureIcon,
    SubTitle,
    Underline,
    Profile,
    ProfileTitle,
    ProfileSubTitle,
    ProfileCompany,
    ProfileBio,
    ProfileInfo,
    ProfilePicture,
    SocialList,
    SocialListItem,
} from "./SpeakersStyles";

import Modal from "../Modal";

import { BsPlusCircle } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Speakers: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const renderSpeaker = () => (
        <Speaker>
            <PictureContainer>
                <Picture src={"/images/person.jpg"} />
                <PictureIcon>
                    <BsPlusCircle onClick={() => setIsOpen(true)} />
                </PictureIcon>
            </PictureContainer>
            <SpeakerName>Alfredo Paredes</SpeakerName>
            <SpeakerInfo>UI/UX Designer</SpeakerInfo>
        </Speaker>
    );
    return (
        <Container>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Profile>
                    <ProfilePicture src={"/images/person.jpg"} />
                    <ProfileInfo>
                        <div>
                            <ProfileTitle>Alfredo Paredes</ProfileTitle>
                            <ProfileSubTitle>UI/UX Designer</ProfileSubTitle>
                        </div>
                        <ProfileCompany
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                            }
                        />
                        <ProfileBio>
                            World is committed to making participation in the
                            event a harass ment free experience for everyone,
                            regardless of level experience gender, gender
                            identity and expression
                        </ProfileBio>
                        <SocialList>
                            <SocialListItem>
                                <FaFacebook />
                            </SocialListItem>
                            <SocialListItem>
                                <FaTwitter />
                            </SocialListItem>
                            <SocialListItem>
                                <FaInstagram />
                            </SocialListItem>
                            <SocialListItem>
                                <FaLinkedin />
                            </SocialListItem>
                        </SocialList>
                    </ProfileInfo>
                </Profile>
            </Modal>
            <SubTitle>Conoce a</SubTitle>
            <Title>Nuestros Presentadores</Title>
            <Underline />
            <SpeakersContainer>
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
                {renderSpeaker()}
            </SpeakersContainer>
        </Container>
    );
};

export default Speakers;
