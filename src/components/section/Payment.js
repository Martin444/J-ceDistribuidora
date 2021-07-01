import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context';
import BackBanner from '../BackBanner'
import firebase from '../../Utils/firebase'
import { Link } from 'react-router-dom';
import TruckIcon from '../svg/shopping-cart-solid.svg'
import CheckIcon from '../svg/checkin.svg'
import Check2 from '../svg/check2.svg'
import {compose, withProps, withHandlers} from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, google} from 'react-google-maps';
import Map from '../Map'

const findMe = () => {
    if(!navigator.geolocation){
        alert('El navegador no soporta geolocalizacion');
        return;
    }
}
  
export const Payment = () => {
    
    const {user, cart, total, resetData} = useContext(DataContext);
    const [confirm, setConfirm] = useState(false)
    const [late, setLat] = useState(0);
    const [lng, setLnge] = useState(0);

    useEffect(()=>{
        findMe();

    });
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setTimeout( ()=>{
                console.log(position.coords.longitude);
                setLnge(position.coords.longitude);
                setLat(position.coords.latitude);
            }, 1000)
            
            // window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(late, lng));
        }
    );


    const StyleMaped = compose(
        withProps({
             googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcyumbv128GbLqZKIKmVf83k5Cge_T4Ss",
             loadingElement: <div style={{ height: `100%` }} />,
             containerElement: <div style={{ height: `200px` }} />,
             mapElement: <div style={{ height: `100%` }} />,
         }),
         
         withScriptjs,
         withGoogleMap
     )(props => <GoogleMap
         defaultZoom={15}
         defaultCenter={{ lat: late, lng: lng }}
         defaultMapTypeId='roadmap'
       >
           <Marker position={{ lat: late, lng: lng }}>

           </Marker>
       </GoogleMap>
       );
     

    
    
      const  sendOrder = (event) => {
            event.preventDefault();
            console.log(event.target)
            const form = new FormData(event.target);
            const newDate = new Date().toISOString();
    
            const data = {
                'date': newDate,
                'userID': user.uid,
                'name' : user.displayName,
                'email' : user.email,
                'photoUrl' : user.photoUrl,
                'numberPhone' : form.get('number'),
                'direction' : form.get('direction'),
                'storeName' : form.get('nameStore'),
                'lat' : late,
                'lng' : lng,
                'order' : cart,
                'total' : total,
                'completed' : 1,
            }

            
            firebase.firestore().collection('orders').add(data).then((doc)=>{

                const data2 = {
                    'date': newDate,
                    'userID': user.uid,
                    'name' : user.displayName,
                    'email' : user.email,
                    'photoUrl' : user.photoUrl,
                    'numberPhone' : form.get('number'),
                    'direction' : form.get('direction'),
                    'storeName' : form.get('nameStore'),
                    'lat' : late,
                    'lng' : lng,
                    'order' : cart,
                    'total' : total,
                    'completed' : 1,
                    'uid' : doc.id
                }

                firebase.firestore().collection('orders').doc(doc.id).set(data2).then((t)=>{
                    setConfirm(true)
                    resetData();
                })
            });
        }

    
        return (
            confirm ?
            <Conten>
                <div className='container'>
                <BackBanner description=""/>
                <img className='iconCard' width='90px' src={CheckIcon}/>
                    <h2 style={{textAlign: "center", color:'#fff'}}>Gracias, tu pedido se envió con éxito</h2>
                    <div className='btn-container'>
                    {/* <Link to='/'>
                        <button className="btn-confirm" >Seguir comprando</button>
                    </Link>  */}
                    </div>
                </div>

                <div className="total">
                        <div></div>
                        <Link to="/"><a> Finalizar <img  width='30px' src={Check2}/></a></Link>
                    </div>
            </Conten>

            :
            <Conten>
            {
                user ? 
                <>
                <BackBanner description="Completa el formulario con los datos de tu local"/>
                <form className='formis' onSubmit={sendOrder}>
                    <h2 style={{textAlign: "center"}}>Datos de envío</h2>
                        <div className='dat'>
                            <input className ='inpute' name="nameStore" placeholder="Nombre del negocio"/>
                            <input className ='inpute' name="direction" placeholder="Dirección"/>
                            <input className='inpute' name="number" placeholder="Número de telefono"/>
                            {/* <button className="btn-confirm" >Confirmar pedido</button> */}
                        </div>
                            <div className='map'>
                                <StyleMaped/>
                            </div>
                    <div className="total">
                        <h3>${total}</h3>
                        <button className="btn-confirm"> Listo  <img className='iconCard' width='20px' src={TruckIcon}/></button>
                    </div>
                    </form>
                </>:
                <div className='container'>
                    <h2 style={{textAlign: "center"}}>Para hacer un pedido debes iniciar sesión</h2>
                    <div className='btn-container'>
                    <Link to='/login'>
                        <button className="btn-confirm" >Iniciar</button>
                    </Link> 
                    </div>
                </div>
            }
            </Conten>
        )

}

const Conten = styled.div`
background-color: #0B1D2B;
    .formis{
        display: flex;
        height: calc(100vh - 20%);
        justify-content: center;
        background-color: #0B1D2B;
        flex-direction: column;
        color: #ffffff;
        padding-bottom: 80px;
    }

    .inpute{
        display: flex;
        padding: 10px;
        border: none;
        margin-top: 20px;
        border-radius: 6px;
        color: #ffffff;
        font-size: 20px;
        background-color: #304657;
        width: calc(100vw - 70px);
        ::placeholder{
            color: white;
        }
        /* width: 100%; */
    }

    .map{
        padding-inline: 30px;
        border-radius: 10px;
    }



    .dat{
        display: inline-flex;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 20px;
        align-items: center;
        align-content:center;
        position: relative;
        z-index: 0;
    }

    .container{
        width: 100%;
        display: flex;
        justify-content:center;
        align-self: center;
        align-items: center;
        flex-direction: column;
        background-color: #0B1D2B;
    }

    .btn-container{
        width: 400px;
        margin: 0 auto;
        /* justify-content: center; */
    }

    .total{
    background-color: #0B1D2B;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    position: fixed;
    bottom: 0px;
}
.total a{
    text-decoration: none;
    width: 200px;
    background: #22A7F2;
    border-radius:  10px;
    display: inline-flex;
    align-self: center;
    align-items: center;
    color: white;
    justify-content:space-between;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 20px;
    padding: 5px 10px;
}
.total h3{
    /* margin-right: 50px; */
    margin-left: 20px;
    color:white;
    font-weight: 500;
    font-size: 25px;
}

    .btn-confirm{
        text-decoration: none;
    width: 200px;
    background: #22A7F2;
    border: none;
    border-radius:  10px;
    display: inline-flex;
    align-self: center;
    align-items: center;
    color: white;
    justify-content:space-between;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 20px;
    padding: 12px 15px;
    }

    .btn-confirm:hover{
        cursor: pointer;
    }

    .btn-confirm:active{
        transform: translateY(2px);
    }


    @media screen and (max-width: 768px){
        .btn-container{
            width: 200px;
            margin: 0 auto;
            /* justify-content: center; */
        }
    }

`


export default Payment
