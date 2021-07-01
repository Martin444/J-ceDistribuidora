import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import firebase ,{ storage } from '../Utils/firebase'
import { DataContext } from './Context';
import Check2 from './svg/check2.svg'


export default function FormProduct() {

    const [petPhotom, setPetPhoto] = useState([]);
    const [sendForm, setSendForm] = useState(false);
    const [adminConf, setadminConf] = useState(false);

    const {user} = useContext(DataContext);

    const adminConfirm = () => {
        if(user){
            if(user.admin){
                setadminConf(true)
            } else {
                setadminConf(false)
            }
        } else {
            setadminConf(false)
        }
    }


    useEffect(()=>{
        adminConfirm();
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        const data = {
            'title': form.get('name'),
            'date' : newDate,
            'sendFree': form.get('description'),
            'content': form.get('conten'),
            'price': form.get('price'),
            'stock': form.get('stock'),
            'src': petPhotom,
            // 'profilePic':props.user.photoURL,
            // 'type': form.get('type'),
            // 'userContact': props.user.email,
            // 'userName': props.user.displayName,
        }

        firebase.firestore().collection('products').add(data).then(data=>{

            const data2 = {
                'title': form.get('name'),
                'date' : newDate,
                'sendFree': form.get('description'),
                'content': form.get('conten'),
                'price': form.get('price'),
                'stock': form.get('stock'),
                'src': petPhotom,
                'uid': data.id
                // 'profilePic':props.user.photoURL,
                // 'type': form.get('type'),
                // 'userContact': props.user.email,
                // 'userName': props.user.displayName,
            }

            firebase.firestore().collection('products').doc(data.id).set(data2).then((da)=>{

                setSendForm(true)
            })
        })
    }

    const onChange = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + '-' + file.name;

        if(file.name){
                const uploadFile = storageRef.child(name).put(file);
                uploadFile
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                    .then(donwloadURL => setPetPhoto(donwloadURL));
                });
                console.log(uploadFile)
        }
      }

    return (
        <DivForm>
            {
                adminConf ?
                    <div className='containerForm'>
                        {
                            sendForm ?
                            <div>
                                <h2>Producto subido con éxito</h2>
                                <button className='btn-load' onClick={()=>{
                                    setSendForm(false)
                                }}>Subir otro</button>
                            </div>
                            :
                            <form onSubmit={handleSubmit}>
                                <input type="file" onChange={onChange} name="photo" className='btn-load'/>
                                <input className='inputer' name="name" type="text" placeholder="Nombre del producto"/>
                                <input className='inputer' name="conten" type="text" placeholder="Breve descripción"/>
                                <div className='ch'>
                                    <input className='che' name="description" type="checkbox"/>
                                    <label for="description">Envios gratis</label>
                                </div>
                                <input className='inputer' name="stock" type="number" placeholder="Cantidad en stock"/>
                                <input className='inputer' name="price" type="number" placeholder="Precio"/>
                                <div className="totali">
                                    
                                    <button className="btn-confirme"> Listo  <img className='iconCard' width='20px' src={Check2}/></button>
                                </div>
                            </form>
                        }
                    </div>
                :
                <div className='containerFotm'>
                        <h2>No tenes permisos para agregar nuevos productos</h2>
                </div>
            }
        </DivForm>
    )
}


const DivForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #0B1D2B;
    padding-bottom: 100px;
    
    /* padding: 20px; */
    .containerFotm{
        display: inline-flex;
       
        justify-content: center;
        align-content: space-between;
        text-align: center;
        margin-top: 5px;

    }

    .totali{
        min-height: 70px;
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0px;
        margin: 0 auto;
        justify-content:center;
        align-items: center;
        align-self: center;
        justify-self: center;
        text-align: center;
        background-color: #0B1D2B;
        color: white;
        z-index: 1000;
    }

      .btn-confirme{
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        border: none;
        color: white;
        font-size: 20px;
        justify-self: center;
        text-align: center;
        align-items: center;
        align-self: center;
        background: #22A7F2;
        border-radius: 8px;
        padding: 8px 5px;
        width: calc(100vw - 30%);
    }

    label{
        color: #ffffff;
        font-size: 20px;
        width: 100%;
    }

    .che{
        
        height: 50px;
    }
    
    .ch{
        display: flex;
        width: 10%;
      
        margin-top: 25px;
    }
    
    .inputer{
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
    }
    
    h2{
        color:white;
    }

    .btn-load{
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        justify-self: center;
        text-align: center;
        align-items: center;
        background: #22A7F2;
        border-radius: 8px;
        color: white;
        font-size: 20px;
        padding: 8px 25px;
        margin: 0px 8px;
        min-width: calc(100vw - 70px);
    }

    .btn-load:hover{
        cursor:pointer;
    }

    .btn-load:active{
        transform: translateY(2px);
    }
 
    @media (max-width: 769px){
        
        justify-content: center;

        h2{
            font-size: 30px;
        }

        .containerForm{
            display: inline-flex;
     
        justify-content: center;
        align-content: center;
        text-align: center;
        margin-top: 5px;
        }

        .inputer{
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
        }
        
        .btn-load{
            cursor: pointer;
        display: inline-flex;
        justify-content: center;
        justify-self: center;
        text-align: center;
        align-items: center;
        background: #22A7F2;
        border-radius: 8px;
        padding: 8px 0px;
        margin: 0px 8px;
        max-width: calc(100vw - 590px);
          
        }

    }

`