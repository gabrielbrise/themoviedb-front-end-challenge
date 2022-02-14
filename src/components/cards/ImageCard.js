import styled from 'styled-components';
import AvatarPNG from '../../assets/Avatar.png'

const ImageCard = styled.div`
    background-image: ${({ image }) => image ? `url(${image})` : `url(${AvatarPNG})`};
    background-color: ${({ image }) => image ? 'transparent' : 'var(--color-primary)'};
    border-radius: 4px;
    background-size: ${({ image }) => image ? 'cover' : 'auto'};
    background-repeat: no-repeat;
    background-position: center;
`

export default ImageCard