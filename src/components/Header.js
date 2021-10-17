import React, { Component } from 'react'
import CartIcon from './svg/shopping-cart-solid.svg'
import HistoryIcon from './svg/orderlist.svg'
import NewIcon from './svg/newprod.svg'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart, user, loginGoogle, userAdmin} = this.context;
        return (
            <header>
                {
                    user !== null ? 
                    <>
                        <div className="menu">
                            {
                                user !== null ? <>
                                        <span onClick={this.menuToggle}><Link to="/"><img className='profile' src={user.photoUrl} alt="" width="40"/></Link></span>
                                        <span className='hello'>Hola, {user.displayName.split(' ')[0]}!</span> 
                                </>: <div></div>
                            }
                                
                        </div>
                    
                        
                        <nav>
                          {
                              userAdmin ? <Link to="/ordenes">
                              <div className="nav-cart">
                                  <img src={HistoryIcon} alt="" width="20" backgroundColor='#67B31B'/>
                                  <span>Pedidos</span>
                              </div>
                          </Link> :<Link to="/ordenes">
                              <div className="nav-cart">
                                  <img src={HistoryIcon} alt="" width="20" backgroundColor='#67B31B'/>
                                  <span>Historial</span>
                              </div>
                          </Link>
                          }  
                        
                          {
                              userAdmin ?  <div className="nav-cart">
                             
                              <Link to="/crearproducto">
                                  <img src={NewIcon} alt="" width="30" height='20' backgroundColor='#67B31B'/>
                              </Link>
                          </div> 
                          : 
                            <Link to="/carrito">
                                <div className="nav-cart">
                                    <span>{cart.length}</span>
                                    <img src={CartIcon} alt="" width="20" backgroundColor='#67B31B'/>
                                </div>
                            </Link>
                          }
                           
                        </nav>
                    
                    </> 
                    : 
                    <LoginContainer>
                    <div className="menu">
                        {
                            user !== null ? <>
                                    <span onClick={this.menuToggle}><Link to="/"><img className='profile' src={user.photoUrl} alt="" width="40"/></Link></span>
                                    <span className='hello'>Hola, {user.displayName.split(' ')[0]}!</span> 
                            </>: <div></div>
                        }
                            
                    </div>
                
                    
                        <Link to="/ordenes">
                            <div className="nav-cart">
                                <span>Comienza a comprar</span>
                            </div>
                        </Link>
                   
                        
                        <div className="btn-login" onClick={()=> loginGoogle()}>
                                <img src={HistoryIcon} alt="" width="20" backgroundColor='#67B31B'/>
                            <span>Iniciar con google</span>
                        </div>
                   
                
                </LoginContainer>
                }
            
            </header>
        )
    }
}


const LoginContainer = styled.div`
    min-height: 90px;
    width: 100%;
    display: block;
    position: fixed;
    bottom: 0px;
    margin: 0 auto;
    justify-content:center;
    align-items: center;
    align-self: center;
    justify-self: center;
    text-align: center;
    overflow: hidden;
    background-color: #0B1D2B;
    color: white;
    z-index: 1000;

    .btn-login{
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        justify-self: center;
        text-align: center;
        align-items: center;
        background: #22A7F2;
        border-radius: 8px;
        padding: 8px 25px;
        margin: 0px 8px;
        min-width: calc(100% - 70px);
    }

`;



export default Header
