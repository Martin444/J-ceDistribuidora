import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import Login from './section/login'
import Orders from './section/Orders'
import NewProduct from './section/NewProduct'
import EditProduct from './section/EditProduct'


export class Section extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Products} exact />
                <Route path="/ordenes" component={Orders} exact  />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/editar/:id" component={EditProduct} exact />
                <Route path="/login" component={Login} exact/>
                <Route path="/confirmar" component={Payment} exact />
                <Route path="/carrito" component={Cart}  exact/>
                <Route path="/crearproducto" component={NewProduct}  exact/>
            </div>
        )
    }
}

export default Section
