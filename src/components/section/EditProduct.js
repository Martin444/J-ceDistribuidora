import React from 'react'
import styled from 'styled-components'
import BackBanner from '../BackBanner'
import FormEditProduct from '../FromEditProduct'

export default function EditProduct(props) {


    return (
        <EditProducte>
            <BackBanner description='Edita cualquier dato de este producto'/>
            <div>
                <h2 style={{textAlign: "center"}}>Editar producto</h2>
                <FormEditProduct producter= {props.location.state}/>
            </div>
        </EditProducte>
    )
}

const EditProducte = styled.div`
    height: 100vh;
    background-color: #0B1D2B;
    justify-content: center;

`
