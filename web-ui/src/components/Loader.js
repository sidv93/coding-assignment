import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const transition = { duration: 0.4, yoyo: Infinity, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 250px 0;
`;
const Dots = styled(motion.div)`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Dot = styled(motion.div)`
    background-color: #0A45C2;
    height: 15px;
    width: 15px;
    border-radius: 10px;
    margin: 0 10px;
`;

const dotsVariant = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
}
const dotVariant = {
    start: {
        y: '0'
    },
    end: {
        y: '-40px'
    }
}

const ThreeDots = () => {
    return (
        <Container>
            <Dots variants={dotsVariant} initial="start" animate="end">
                <Dot variants={dotVariant} transition={transition} />
                <Dot variants={dotVariant} transition={transition} />
                <Dot variants={dotVariant} transition={transition} />
            </Dots>
        </Container>
    );
};

export default ThreeDots;
