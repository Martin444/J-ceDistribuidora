import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import TruckIcon from '../svg/trash.svg'
import BackBanner from '../BackBanner'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <div className='conten-cart'>
                
                    <BackBanner description="Especifica la cantidad
                                                que quieres de cada producto"/>
                <h2 style={{textAlign:"center", justifyContent: 'center', color: '#fff', backgroundColor:'#2A302C'}}>No hay productos</h2>
            </div>
        }else{
            return (
                <div className="conten-cart">
                    <BackBanner description="Especifica la cantidad
                                                que quieres de cada producto"/>
                    <h2>Carrito</h2>
                    {
                        cart.map(item =>(
                            // console.log(item)
                            <div className="cart" key={item.id}>
                                <img src={item.src} alt="" className='imageCart'/>
                                <div className="">
                                    <div className="data">
                                        <h3>{item.title}</h3>
                                        <span>${item.price * item.quantity}</span>
                                    </div>
                                    {/* <Colors colors={item.colors}/> */}
                                    <p>{item.description}</p>
                                    
                                    <div className="amount">
                                       <div className="counter">
                                       <button className="count" onClick={() => reduction(item.uid)}> - </button>
                                        <span>{item.quantity}</span>
                                        <button className="count" onClick={() => increase(item.uid)}> + </button>
                                       </div>
                                        <div className="delete" onClick={() => removeProduct(item.uid)}><img className='iconCard' src={TruckIcon}/></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <h3>${total}</h3>
                        <Link to="/confirmar"><a> <img className='iconCard' width='30px' src={TruckIcon}/>Ordenar</a></Link>
                    </div>
                </div>
                )
            }
        }
}

export default Cart
