import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TableHeader from '../components/TableHeader';
import ContactContent from '../components/Contacts';
import Vector3 from '../assets/icons/vector3.svg';
import Vector4 from '../assets/icons/vector4.svg';
import { useGlobalStateContext } from '../context/globalContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader';

const API_URL = 'https://api-server.siddhuv93.vercel.app/api/v1/contacts';

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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    const history = useHistory();
    const { accessToken } = useGlobalStateContext();
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        picture: '',
        contacts: []
    });
    const [loading, setLoading] = useState(false);
    const deleteContact = async (id) => {
        const { data } = await axios(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (data.status === 'success') {
            const indexOfContact = userDetails.contacts.findIndex((item) => item.id === id);
            const contacts = [...userDetails.contacts];
            contacts.splice(indexOfContact, 1);
            setUserDetails({
                ...userDetails, contacts
            });
        }
    }
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true)
                const { data } = await axios(API_URL, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setLoading(false);
                setUserDetails(data.data);
            } catch (e) {
                console.log('error when fetching contacts', e);
                setUserDetails({
                    name: '',
                    email: '',
                    picture: '',
                    contacts: []
                });
            }
        }
        if (accessToken) {
            fetchContacts();
        } else {
            history.push('/');
        }
    }, []);
    return (
        <Container>
            <V3 src={Vector3} alt="ellipse-background" />
            <V4 src={Vector4} alt="ellipse-background" />
            <Header details={{ name: userDetails.name, email: userDetails.email, picture: userDetails.picture }} />
            <ContentContainer>
                <TableHeader count={userDetails.contacts.length} />
                {
                    loading ? <Loader /> : <ContactContent contacts={userDetails.contacts} deleteContact={deleteContact} />
                }
            </ContentContainer>
        </Container>
    );
};

export default Contacts;