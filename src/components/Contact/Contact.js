
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { PopUp } from  'my-modal-component-4-op';

export default function Contact() {

    const [message] =  useState("Méssage envoyé !");
    const [fontColor] =  useState('#333');
    const [bgColorCross]=  useState('#333');
    const [bgColorContainerModal]=  useState('#fff');  
    const [opcityMainBg]=  useState(0.5); 
    const [mainBgColor]=  useState('black'); 
    const [popupShow, setPopupShow] =  useState(false);

  const form = useRef();

    const {
        register,
        formState: {errors},
        handleSubmit, reset
      } = useForm();

      console.log(errors)
    const onSubmit = (data,e) => {
        e.preventDefault();

    emailjs.sendForm('service_1tuqdcj', 'template_6pi4y9d', form.current, 'NK0MVO9hhX91I8pMo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       
      setPopupShow(true);
    reset();
    }




    return (
    
    <>
    <PopUp  mainBgColor={mainBgColor}  opcityMainBg={opcityMainBg}  bgColorCross={bgColorCross}  bgColorContainerModal={bgColorContainerModal}  fontColor={fontColor}  message={message}  trigger={popupShow}  setTrigger={setPopupShow}/>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className='h2-contact'>Contact</h2>
            <div className='form-box'>
                <div className='div-input'>
                    {/* on récupère les données grâce à register, required nous aide à indiquer que l'utilisateur doit obligatoirement remplir ce champs   */}
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
                    <input  name='email'
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
                    name='number'
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
