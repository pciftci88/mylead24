import React from 'react';
import { Wrapper, Product, ProductHeader } from './styles';

function Overview() {
    return (
        <Wrapper>
            <Product>
                <ProductHeader>Finanzen</ProductHeader>
            </Product>
            <Product>
                <ProductHeader>Versicherungen</ProductHeader>
            </Product>
            <Product>
                <ProductHeader>Haushalt</ProductHeader>
            </Product>
        </Wrapper>
    )
}

export default Overview;