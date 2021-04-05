import React from 'react';
import { withRouter } from 'react-router-dom';
import { Content, Product, ProductTitle } from './styles';
import ImageSlider from '../../components/image-slider/ImageSlider';

function Homepage() {
    return (
        <Content>
            <ImageSlider />
            <React.Fragment>
                <Product>
                    <ProductTitle>Strom & Gas</ProductTitle>
                </Product>
                <Product>
                    <ProductTitle>DSL</ProductTitle>
                </Product>
                <Product>
                    <ProductTitle>Reisen</ProductTitle>
                </Product>
            </React.Fragment>
        </Content>
    );
};

export default withRouter(Homepage);