import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '../assets/icons/delete-icon.svg';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 20px 0;
`;
const Table = styled.table`
    width: 100%;
    border-collapse: seperate;
     border-spacing: 0 8px;
     overflow-x: hidden;
`;
const Th = styled.th`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.08em;
    color: #B0C6FF;
    text-transform: uppercase;
    text-align: left;
`;
const Tr = styled(motion.tr)`
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        border: 1px solid #4EB4FF;

        .selectBox {
            visibility: visible;
        }
    }
`;
const Td = styled.td`
    text-align: center;
    border-style: none;
`;
const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 40px;

    .selectBox {
        visibility: hidden;
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }
`;
const EmailContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const PhoneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
`;
const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 12px;
    border: 1px solid #FF0000;
`;

const Contacts = ({ contacts, deleteContact }) => {
    if (!contacts.length) {
        return <p style={{ textAlign: 'center' }}>No contacts found</p>
    }
    return (
        <Container
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.6,
                ease: [0.6, 0.05, -0.01, 0.9]
            }}>
            <Table>
                <thead>
                    <tr>
                        <Th><span style={{ paddingLeft: '80px' }}>Name</span></Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => <Tr whileHover={{
                            scale: 1.05
                        }}
                        key={contact.email}>
                            <Td>
                                <NameContainer>
                                    <input type="checkbox" className="selectBox" />
                                    <ProfilePicture src={contact.picture} alt="profile-picture" />
                                    {contact.name}
                                </NameContainer>
                            </Td>
                            <Td>
                                <EmailContainer>
                                    {contact.email}
                                </EmailContainer>
                            </Td>
                            <Td>
                                <PhoneContainer>
                                    {contact.phone}
                                    <img src={DeleteIcon} width="20px" height="20px" onClick={() => deleteContact(contact.id)} alt="delete-icon" />
                                </PhoneContainer>
                            </Td>
                        </Tr>)
                    }
                </tbody>
            </Table>
        </Container>
    )
};

export default Contacts;