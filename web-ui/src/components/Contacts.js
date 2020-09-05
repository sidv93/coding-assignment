import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '../assets/icons/delete-icon.svg';

const Th = styled.th`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.08em;
    color: #B0C6FF;
    text-transform: uppercase;
`;
const Tr = styled.tr`
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
    box-sizing: border-box;

    /* &:hover {
        border: 1px solid #4EB4FF;

        .selectBox {
            display: block;
        }
    } */
`;
const Td = styled.td`
    text-align: center;
    border-style: none;
    /* border: 1px solid #4EB4FF; */
`;
const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    .selectBox {
        /* display: none; */
        height: 20px;
        width: 20px;
        background: black;
        margin-right: 10px;
    }
`;
const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: black;
    margin: 0 12px;
    border: 1px solid #FF0000;
`;

const Contacts = ({ contacts }) => {
    return (
        <table
            style={{
                width: '100%',
                borderCollapse: 'seperate', borderSpacing: ' 0 8px'
            }}>
            <thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Phone</Th>
                </tr>
            </thead>
            <tbody style={{ overflowY: 'scroll' }}>
                {
                    contacts.map((contact, index) => <Tr key={String(index)}>
                        <Td>
                            <NameContainer>
                                <div className="selectBox" />
                                <ProfilePicture />
                                {contact.name}
                            </NameContainer>
                        </Td>
                        <Td>{contact.email}</Td>
                        <Td>
                            {contact.phoneNumber}
                            <img src={DeleteIcon} width="20px" height="20px" />
                        </Td>
                    </Tr>)
                }
            </tbody>
        </table>
    );
};

export default Contacts;