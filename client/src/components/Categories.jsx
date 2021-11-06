import React from 'react'
import styled from 'styled-components'
import { categories } from '../script'
import Categoryitem from './CategoryItem'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`
const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <Categoryitem item={item}/>
            ))}
        </Container>
    )
}

export default Categories
