import styled from 'styled-components';
import EnergyOverviewImage from '../../images/teaser/energy-teaser.jpg';
import { TitleWrapper } from '../../global/pageStyles';

export const Teaser = styled(TitleWrapper)`
    background-image: url(${EnergyOverviewImage});
`;