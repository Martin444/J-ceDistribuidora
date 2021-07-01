import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { DataContext } from '../Context'

export default function Login() {

    const {loginGoogle, user, cart, logOut} = useContext(DataContext);

    return (
        <DivLogin>
            <div className="content">
                {
                    user ?
                        <>
                            <h1>Gracias por formar parte de la familia</h1>
                            {
                                cart.length === 0 ?
                                <Link to='/'>
                                    <button className="btn-google" >Mirá nuestros productos</button>
                                    <button className="btn-google" onClick={logOut} >Cerrar sesión</button>
                                </Link>
                                :
                                <Link to='/confirmar'>
                                    <button className="btn-google" >Terminar el pedido</button>
                                </Link>
                            }
                        </>
                    :
                    <>
                        <h1>Inicia sesión en Eco Food</h1>
                        <h3>con</h3>
                        <button className="btn-google" onClick={()=>{
                           loginGoogle()

                        }}>Google</button>
                    </>


                }
            </div>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #2A302C;
    color: white;
    padding-top: 100px;

    .content{
        display: block;
        justify-content: center;
        text-align: center;
    }

    .btn-google{
        width: 250px;
        height: 40px;
        margin-top: 10px;
        margin-right: 5px;
        border:none;
        border-radius: 5px;
        color:white;
        font-size: 20px;
        font-weight: 700;
        background: #67B31B;
    }

    .btn-google:hover{
        cursor: pointer;
        transform: translateY(-1px)
    }
    .btn-google:active{
        cursor: pointer;
        transform: translateY(1px)
    }
`