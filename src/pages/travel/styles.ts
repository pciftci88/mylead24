import styled from 'styled-components';
import TravelOverviewImage from '../../images/teaser/travel-teaser.jpg';
import { TitleWrapper } from '../../global/pageStyles';

export const Teaser = styled(TitleWrapper)`
    background-image: url(${TravelOverviewImage});
`;