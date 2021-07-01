import React, { useContext } from 'react'
import styled from 'styled-components'
import CardOrder from '../CardOrder'
import { DataContext } from '../Context'
import BackBanner from '../BackBanner'

export default function Orders() {
    const {orders} = useContext(DataContext);

    return (
        <Content>
            <BackBanner description=""/>
            {
                orders ?
                <div className='contentpage'>
                    <h1>Historial</h1>
                    <div className='list'>
                        {
                            orders.map(e=>(
                                // console.log(e.data())
                                <CardOrder data={e}/>
                            ))
                        }
                      
                    </div>
                </div>
                :
                <div className='contentpage'>
                    <h1>No hay ninguna orden aún</h1>
                    <div className='list'>
                        {/* <CardOrder/>
                        <CardOrder/>
                        <CardOrder/>
                        <CardOrder/>
                        <CardOrder/> */}
                    </div>
                </div>

            }
        </Content>
    )
}

const Content = styled.div`

    width: 100%;
    display: block;
    justify-content: center;
    padding-top: 10px;

    background-color: #0B1D2B;
    color: white;
    
    .contentpage{
        width: 90%;
        display: block;
        margin: 0 auto;
    }

    .list{
        margin-top: 20px;
    }

    @media screen and (min-width: 768px){

        .contentpage{
            width:70%;
            display: block;
            margin: 0 auto;
        }

    }
`