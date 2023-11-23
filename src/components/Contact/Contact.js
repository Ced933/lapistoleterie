
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';

export default function Contact() {
  
    const {
        register,
        formState: {errors},
        handleSubmit, reset
      } = useForm();

      console.log(errors)
    const onSubmit = (data) => {
        console.log(data)
    reset();
    }




    return (
    
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='h2-contact'>Contact</h2>
            <div className='form-box'>
                <div className='div-input'>
                    <input  {...register('firstName', {required:true})} type='text' placeholder='Prénom' name='firstName' />
                    <p className='p-error'>
                    {errors.firstName?.type === "required" && "Le prénom est obligatoire"}
                    </p>
                </div>

                <div className='div-input'>
                    <input  {...register('lastName', {required:true})} type='text' placeholder='Nom' name='lastName' />
                    <p className='p-error'>
                    {errors.lastName?.type === "required" && "Le nom est obligatoire"}
                    </p>
                </div>

                <div className='div-input'>
                    <input  
                    placeholder="Email" type='mail'
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })}
                    />
                    <p className='p-error'>
                    {errors.email?.type === "required" && "L'email est obligatoire"}
                    {errors.email?.type === "pattern" &&
                        "L'email rentré n'est pas dans le bon format"}
                    </p>
                </div>

                <div className='div-input'>
                    <input
                    type="number"
                    placeholder='Téléphone'
                    {...register("number", {
                        required:true,
                        minLength: 10,
                        maxLength: 10,
                    })}
                    />
                    <p className='p-error'>
                    {errors.number?.type === "minLength" &&
                        "Votre numéro de téléphone fait moins de 10 chiffres"}
                    {errors.number?.type === "maxLength" &&
                        "Votre numéro de téléphone fait plus de 10 chiffres"}
                    </p>
                </div>
                <div className='div-input'>
                    <textarea
                    placeholder='Votre message'
                    {...register("message", {
                        required:true,
                        minLength: 10,
                    })}
                    ></textarea>
                    <p className='p-error'>
                    {errors.message?.type === "minLength" &&
                        "Votre message doit contenir au moins 10 caractères"}
                    </p>
                </div>
                <button className='btn'>Envoyer</button>
            </div>
        </form>
    </>
  )
}
