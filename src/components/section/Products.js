import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Banner from '../Banner';
import {DataContext} from '../Context'
import CartIcon from '../svg/shopping-cart-solid.svg'
import TruckIcon from '../svg/truck.svg'
import TrashIcon from '../svg/edit.svg'
import '../css/Products.css'
import FormProduct from '../FormProduct';
import Header from '../Header'


export class Products extends Component {

    static contextType = DataContext;


    render() {
        const {products,addCart, userAdmin, removeProductAdmin} = this.context;
        


      

   
        return (
            <div id="product">
            <Header/>

            <Banner/>
            <div className='mu'>

                <h2>Productos</h2>
                {
                    products.map(product =>{
                        return (
                            <div className="card" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img className='imageProduct' src={product.data().src} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product.id}`}>{product.data().title}</Link>
                                    </h3>
                                    <span>${product.data().price}</span>
                                    <div>
                                        <br />
                                        <p>En stock: {product.data().stock}</p>
                                    </div>

                                    {product.data().sendFree ? <p><img className='iconCard' src={TruckIcon} />Envíos gratis</p> : <p></p>}
                                    {userAdmin ?
                                        <button onClick={() => removeProductAdmin(product.data())}><img className='iconCard' src={TrashIcon} /> Editar</button>
                                        :
                                        <button onClick={() => addCart(product.data())}><img className='iconCard' src={CartIcon} />  - Añadir</button>}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            </div>
        )
    }
}

export default Products
