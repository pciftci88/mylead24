import styled from 'styled-components/macro';
import InsuranceOverviewImage from '../../images/teaser/insurance-teaser.jpg';
import { TitleWrapper } from '../../global/pageStyles';

export const Teaser = styled(TitleWrapper)`
    background-image: url(${InsuranceOverviewImage});
`;