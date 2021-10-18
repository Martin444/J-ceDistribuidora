import React from 'react'
import styled from 'styled-components'
import BackBanner from '../BackBanner'
import FormProduct from '../FormProduct'

export default function NewProduct() {
    return (
        <NewProd>
            <BackBanner description='Completa el formulariocon los datos de tu producto'/>
            <h2 style={{textAlign: "center", marginTop: '3rem'}}>Nuevo producto</h2>
            <FormProduct/>
        </NewProd>
    )
}

const NewProd = styled.div`

    background-color: #0B1D2B;
    text-align: center;

`;
