import styled from 'styled-components';

const ImageCard = styled.div`
    background-image: ${({ image }) => `url(${image})`};
    border-radius: 4px;
    background-size: cover;
    background-position: center;
`

export default ImageCard