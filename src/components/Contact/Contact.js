import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';

export default function Contact() {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data)=>{
console.log(data)
reset();
    }

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
        <h2 className='h2-contact'>Contact</h2>
        <div className='form-box'>
            <div className='div-input'>
               
                <input type='text' placeholder='Prénom' {...register('firstName')} name='firstName'/>
            </div>
            <div className='div-input'>
              
                <input type='text' placeholder='Nom' {...register('lastName')} name='lastName'/>
            </div>
            <div className='div-input'>
              
                <input type='mail' placeholder='Mail' {...register('mail')} name='mail'/>
            </div>
            <div className='div-input'>
              
                <input type='number' placeholder='Entrez votre numéro' {...register('phone')} name='phone'/>
            </div>

            <div className='div-input'>
             
                <textarea {...register('message')} placeholder='Message' name='message'></textarea>
            </div>
            <button className='btn'>Envoyer</button>
        </div>
    </form>
  )
}
