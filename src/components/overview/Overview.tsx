import React from 'react';
import { Wrapper, Product, ProductHeader } from './styles';

function Overview() {
    return (
        <Wrapper>
            <Product>
                <ProductHeader>Finance</ProductHeader>
            </Product>
            <Product>
                <ProductHeader>Insurances</ProductHeader>
            </Product>
            <Product>
                <ProductHeader>Housekeeping</ProductHeader>
            </Product>
        </Wrapper>
    )
}

export default Overview;