import React from 'react'
import styled from 'styled-components'
import JyceIcon from './svg/LogoTafibg.png'

export default function Banner() {
    return (
        <Bann>
            <div className='ban-content'>
                <div className='well'>
                    <h1 className ='title'>Hola!</h1>
                    <img src={JyceIcon} alt="" width="150" backgroundColor='#67B31B'/>
                </div>
                <div className='line'></div>
               <span>Descubrí una 
                nueva forma de disfrutar tu 
                snack favorito</span>
            </div>
        </Bann>
    )
}


const Bann = styled.div`
    width: 100%;
    margin: 0;
    height: 30vh;
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
    }

    .ban-content{
        margin: 0;
        /* padding:0 auto]; */
        padding: 20px;

        display: inline-block;
        justify-content: start;
        height: 100%;
        
    }
    .title{
            font-size: 40px;
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