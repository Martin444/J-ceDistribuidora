import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import styled from 'styled-components'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.data().uid === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        return (
            <DetailPage>
                {
                    product.map(item =>(
                        <div className="container" key={item.id}>
                            <img src={item.data().src} alt=""/>
                            <div className="">
                                <div className="row">
                                    <h2>{item.data().title}</h2>
                                    <span>Precio: ${item.data().price}</span>
                                </div>
                                <p>En stock: {item.data().stock}</p>
                                <p>Detalles: {item.data().content}</p>
                            </div>
                                <Link to="/" className="btn">
                                    Volver
                                </Link>
                        </div>
                    ))
                }
            </DetailPage>
        )
    }
}

const DetailPage = styled.div`
    display: flex;
    background-color: #0B1D2B;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    height: 100vh;

    p{
        color: white;
    }

    .container{
        align-content: center;
        justify-content: center;
        text-align: center;
    }

    .container img{
        width: 100%;
        object-fit: cover;
        height: 40vh;
        align-self: center;
        align-items: center;
        justify-content:center;
        text-align: center;
    }

    .btn{
        border: none;
        border-radius: 7px;
        outline: none;
        background: #22A7F2;
        color: white;
        justify-self: center;
        justify-content: center;
        align-self: center;
        align-items: center;
        width: 70%;
        height: 40px;
        display: inline-flex;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 1px;
        margin: 6px 0;
    }

`

export default Details
