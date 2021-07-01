import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ImaBanner from '../Image/banner2.jpg'
import JyceIcon from './svg/LogoTafibg.png'
import BackIcon from './svg/back.svg'

export default function BackBanner({path, description}) {
    return (
        <Bann>
            <div className='ban-content'>
                <div className='well'>
                    <Link to='/'>
                    <h1 className ='title'><img src={BackIcon} alt="" width="30" backgroundColor='#67B31B'/>Volver</h1>
                    </Link>
                    <img src={JyceIcon} alt="" width="150" backgroundColor='#67B31B'/>
                </div>
                <div className='line'></div>
                <br/>
               <span>{description}</span>
            </div>
        </Bann>
    )
}

const Bann = styled.div`
    width: 100%;
    margin: 0;
    /* height: 45vh; */
    background-color: #0B1D2B;
    text-align: left;
    color: #fff;
    .line{
        height: 1px;
        width: calc(100% - 40px);
        background-color: #fff;
    }
    .well{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        list-style: decimal;
    }

    Link{
        color: #fff;
    }

    .ban-content{
        margin: 0;
        /* padding:0 auto]; */
        width: calc(100% - 40px);
        padding: 20px;

        display: inline-block;
        justify-content: start;
        height: 100%;
        
    }
    .title{
            font-size: 30px;
            display: inline-block;
            justify-content: start;
            align-content: center;
            color: #fff;
        }

        h3{
            font-size: 20px;
        }

    @media screen and (max-width: 768px){
        width: 100%;
        .ban-content{
            margin: 0;
            padding:0 auto;
            display: inline-block;
        justify-content: start;
        height: 100%;
            margin-top:10px;
        }
        
    }

`