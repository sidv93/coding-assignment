import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    text-align: center;
    letter-spacing: 0.08em;
    color: #053ED1;
`;
const Count = styled.p`
    margin: 0;
    padding-top: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.08em;
    color: #053ED1;
`;

const TableHeader = ({ count }) => {
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
            }}
        >
            <Title>Contacts&nbsp;</Title>
            <Count>(&nbsp;{count}&nbsp;)</Count>
        </Container>
    );
};

export default TableHeader;