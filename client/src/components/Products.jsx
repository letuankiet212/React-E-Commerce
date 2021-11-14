
import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../script'
import Product from './Product';

const Container = styled.div`
    padding:20px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
`

const Products = () => {
    return (
         <Container>
            {popularProducts.map(product => (
                <Product product={product} key={'product'+product.id}/>
            ))}
        </Container>
    )
}

export default Products