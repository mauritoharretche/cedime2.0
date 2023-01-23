import React from 'react'
import { useState } from 'react';
import "../Contacto/Contacto.css"


const Contacto = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='Contacto' id='contacto'>
            <div className='contenedor_titulo'>
                <div className='blob7'></div>
                <h2 className="titulo_contacto">Contacto</h2>
            </div>
            <form className="form" onSubmit={() => { }}>
                <input
                    className="input"
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className="input"
                    type="text"
                    placeholder="Ingrese su email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    className="textarea"
                    placeholder="Escriba su mensaje..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className="button" type="submit" value="Enviar" />
            </form>
        </div>


    );
};

export default Contacto