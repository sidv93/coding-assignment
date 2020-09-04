import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TableHeader from '../components/TableHeader';
import ContactContent from '../components/Contacts';

const contacts = new Array(30).fill({email: 'siddhuv93@gmail.com', name: 'Siddharth Venkatesh', phoneNumber: '8056083548'});

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background: #E5E5E5;
`;
const ContentContainer = styled.div`
    padding: 30px 15%;
`;

const Contacts = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <TableHeader count={contacts.length} />
                <ContactContent contacts={contacts} />
            </ContentContainer>
        </Container>
    );
};

export default Contacts;