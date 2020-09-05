import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TableHeader from '../components/TableHeader';
import ContactContent from '../components/Contacts';
import Vector3 from '../assets/icons/vector3.svg';
import Vector4 from '../assets/icons/vector4.svg';

const contacts = new Array(30).fill({ email: 'siddhuv93@gmail.com', name: 'Siddharth Venkatesh', phoneNumber: '8056083548' });

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