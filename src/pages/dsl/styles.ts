import styled from 'styled-components';
import DslOverviewImage from '../../images/teaser/dsl-teaser.jpg';
import { TitleWrapper } from '../../global/pageStyles';

export const Teaser = styled(TitleWrapper)`
    background-image: url(${DslOverviewImage});
`;