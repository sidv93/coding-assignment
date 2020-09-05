import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TableHeader from '../components/TableHeader';
import ContactContent from '../components/Contacts';
import Vector3 from '../assets/icons/vector3.svg';
import Vector4 from '../assets/icons/vector4.svg';
import { useGlobalStateContext } from '../context/globalContext';
import axios from 'axios';

const contacts = new Array(30).fill({ email: 'siddhuv93@gmail.com', name: 'Siddharth Venkatesh', phoneNumber: '8056083548' });
const API_URL = 'http://localhost:4000/api/v1/contacts';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background: #E5E5E5;
    position: relative;
`;
const ContentContainer = styled.div`
    padding: 30px 15%;
    position: relative;
    z-index: 2;
`;
const V3 = styled.img`
    position: absolute;
    width: 653.5px;
    height: 606px;
    left: 0px;
    top: 4px;
    z-index: 1;
`;
const V4 = styled.img`
    position: absolute;
    width: 387.1px;
    height: 491.2px;
    right: 0.4px;
    top: 159.8px;
    z-index: 1;
`;

const Contacts = () => {
    const { accessToken } = useGlobalStateContext();
    console.log('access token = ' , accessToken);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contacts = await axios(API_URL, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                console.log('contacts', contacts);
                // setContacts(contacts);
            } catch (e) {
                console.log('error when fetching contacts', e);
                // setContacts([]);
            }
        }
        fetchContacts();
    }, []);
    return (
        <Container>
            <V3 src={Vector3} />
            <V4 src={Vector4} />
            <Header />
            <ContentContainer>
                <TableHeader count={contacts.length} />
                <ContactContent contacts={contacts} />
            </ContentContainer>
        </Container>
    );
};

export default Contacts;