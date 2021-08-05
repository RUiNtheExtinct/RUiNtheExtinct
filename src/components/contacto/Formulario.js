import React,{ useState} from 'react'

const Formulario = () => {

    const initialState = {
        nombre: '',
        email: '',
        mensaje: ''
    }
    const [msg, setMsg] = useState(initialState);

    const {nombre, email, mensaje} = msg;

    const onInputChange = (e) =>{
        setMsg({
            ...msg,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(nombre.trim()==='' || email.trim()==='' || mensaje.trim===''){
            alert('LLENA TODOS LOS CAMPOS');
            return;
        }
        alert('Tu Mensaje se envio, Gracias por contactarme')
    }
    return ( 
        <form onSubmit={onSubmit} name="contacto" className="fromulario" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contacto" />
                <div className="input-item">
                    <label>
                        Nombre:
                    </label>
                    <input value={nombre} type="text" name="nombre" placeholder=" Tu nombre" onChange={onInputChange} />
                </div>
                <div className="input-item">
                    <label>
                        Asunto:
                    </label>
                    <input value={email} type="email" name="email" placeholder="Email" onChange={onInputChange} />
                </div>
                <div className="input-item">
                    <label>Mensaje: </label>
                    <textarea value={mensaje} rows="3" placeholder="Tu Mensaje" name="mensaje" onChange={onInputChange} ></textarea>
                </div>
                <button className="btn btn-primario" type="submit">Enviar Mensaje</button>
            </form>
     );
}
 
export default Formulario;