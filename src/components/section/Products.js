import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Banner from '../Banner';
import {DataContext} from '../Context'
import CartIcon from '../svg/shopping-cart-solid.svg'
import TruckIcon from '../svg/truck.svg'
import TrashIcon from '../svg/edit.svg'
import '../css/Products.css'
import Header from '../Header'


export class Products extends Component {

    static contextType = DataContext;


    render() {
        const {products,addCart, userAdmin} = this.context;

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

                                    {product.data().sendFree ? <p><img className='iconCard' src={TruckIcon} alt='Icono de camion'/>Envíos gratis</p> : <p></p>}
                                    {
                                        userAdmin ?
                                            <Link className='editbtn' to={{pathname:`/editar/${product.id}`, state: product.data() }}>
                                                <button><img className='iconCard' src={TrashIcon} alt='Icon de eliminar'/> Editar</button>
                                            </Link>
                                            :
                                            <button onClick={() => addCart(product)}><img className='iconCard' src={CartIcon}  alt='add'/>  - Añadir</button>
                                    }
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
