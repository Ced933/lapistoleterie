import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';

export default function Contact() {

    const onSubmit = (data)=>{
console.log(data)
reset();
    }
    const {
        register,
        handleSubmit,
        reset
        
    } = useForm()
  return (
    <form id='contact' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='h2-contact'>Contact</h2>
        <div className='form-box'>
            <div className='div-input'>
                {/* <label>nom</label> */}
                <input type='text' placeholder='Prénom' {...register('firstName')} name='firstName'/>
            </div>
            <div className='div-input'>
                {/* <label>nom</label> */}
                <input type='text' placeholder='Nom' {...register('lastName')} name='lastName'/>
            </div>
            <div div className='div-input'>
                {/* <label>email</label> */}
                <input type='mail' placeholder='Mail' {...register('mail')} name='mail'/>
            </div>
            <div div className='div-input'>
                {/* <label>numéro</label> */}
                <input type='number' placeholder='Entrez votre numéro' {...register('phone')} name='phone'/>
            </div>

            <div div className='div-input'>
                {/* <label>message</label> */}
                <textarea {...register('message')} placeholder='Message' name='message'></textarea>
            </div>
            <button className='btn'>Envoyer</button>
        </div>
    </form>
  )
}
