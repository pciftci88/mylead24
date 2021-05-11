import styled from 'styled-components';
import RentalCarTeaser from '../../images/teaser/rentalcar-teaser.jpg';
import RentalCarTeaserMob from '../../images/teaser/rentalcar-teaser-mob.jpg';
import { TitleWrapper } from '../../global/pageStyles';
import WidgetInitializer from '../../components/widget-initializer/WidgetInitializer';

export const Teaser = styled(TitleWrapper)`
    @media (min-width: 961px) {
        background-image: url(${RentalCarTeaser});  
    }
    
    @media (max-width: 960px) {
        background-image: url(${RentalCarTeaserMob});
    }
`;

export const Widget = styled(WidgetInitializer)`
    display: block;
`;