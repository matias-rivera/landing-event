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

interface Props {
    speakers: {
        picture: string;
        name: string;
        job: string;
        company: {
            name: string;
            image: string;
        };
        bio: string;
    }[];
}

const Speakers: React.FC<Props> = ({ speakers }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [speaker, setSpeaker] = useState<number>(0);

    const handleModal = (id: number) => {
        setSpeaker(id);
        setIsOpen(true);
    };

    return (
        <Container id="speakers">
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Profile>
                    <ProfilePicture src={speakers[speaker].picture} />
                    <ProfileInfo>
                        <div>
                            <ProfileTitle>
                                {speakers[speaker].name}
                            </ProfileTitle>
                            <ProfileSubTitle>
                                {speakers[speaker].job}
                            </ProfileSubTitle>
                        </div>
                        <ProfileCompany
                            src={speakers[speaker].company.image}
                            alt={speakers[speaker].company.name}
                        />
                        <ProfileBio>{speakers[speaker].bio}</ProfileBio>
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
            {/* <SubTitle>Conoce a</SubTitle> */}
            <Title>Presentadores</Title>
            <Underline />
            <SpeakersContainer>
                {speakers.map((speaker, i) => (
                    <Speaker key={i}>
                        <PictureContainer>
                            <Picture src={speaker.picture} />
                            <PictureIcon>
                                <BsPlusCircle onClick={() => handleModal(i)} />
                            </PictureIcon>
                        </PictureContainer>
                        <SpeakerName>{speaker.name}</SpeakerName>
                        <SpeakerInfo>{speaker.job}</SpeakerInfo>
                    </Speaker>
                ))}
            </SpeakersContainer>
        </Container>
    );
};

export default Speakers;
