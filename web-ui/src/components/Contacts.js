import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '../assets/icons/delete-icon.svg';

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
const Tr = styled.tr`
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
    /* border: 1px solid #4EB4FF; */
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
        background: black;
        margin-right: 10px;
    }
`;
const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 12px;
    border: 1px solid #FF0000;
`;

const Contacts = ({ contacts }) => {
    return (
        <div style={{
            height: '75vh',
            overflowY: 'scroll',
        }}>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'seperate', borderSpacing: ' 0 8px',
                }}>
                <thead>
                    <tr>
                        <Th><span style={{paddingLeft: '80px'}}>Name</span></Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                    </tr>
                </thead>
                <tbody style={{ overflowY: 'scroll' }}>
                    {
                        contacts.map((contact, index) => <Tr key={contact.email}>
                            <Td>
                                <NameContainer>
                                    <div className="selectBox" />
                                    <ProfilePicture src={contact.picture} alt="profile-picture" />
                                    {contact.name}
                                </NameContainer>
                            </Td>
                            <Td>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    {contact.email}
                                </div>
                            </Td>
                            <Td>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }}>
                                    {contact.phone}
                                    <img src={DeleteIcon} width="20px" height="20px" />
                                </div>
                            </Td>
                        </Tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Contacts;