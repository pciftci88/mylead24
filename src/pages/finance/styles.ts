import styled from 'styled-components/macro';
import FinanceOverviewImage from '../../images/teaser/finance-teaser.jpg';
import { TitleWrapper } from '../../global/pageStyles';

export const Teaser = styled(TitleWrapper)`
    background-image: url(${FinanceOverviewImage});
`;