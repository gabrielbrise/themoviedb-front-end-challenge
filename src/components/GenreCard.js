import React from 'react';
import styled from 'styled-components';

const GenreCard = ({ title }) => (
	<Container>
		<h3><b>{title}</b></h3>
	</Container>
)

export default GenreCard;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
    margin: 8px;
    width: 312px;
    height: 202px;
    background: linear-gradient(-225deg, rgb(154, 76, 237) 0%, rgb(134, 127, 239) 46%, rgb(127, 199, 242) 100%);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
`