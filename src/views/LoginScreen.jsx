import React from 'react';
import '../css/login.css'
import { useForm } from '@/hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegister, startLogin } from '@/store/auth/thunks';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        loginEmail: 'pedro@gmail.com',
        loginPassword: '123456'
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        registerEmail: 'jose@gmail.com',
        registerName: 'Jose',
        registerPassword1: '123456',
        registerPassword2: '123456',
    });

    const { loginEmail, loginPassword } = formLoginValues;
    const { registerEmail, registerName,  registerPassword1, registerPassword2 } = formRegisterValues;

    const handleLogin = (e)=>{

        e.preventDefault();

        dispatch( startLogin(loginEmail, loginPassword) );

    };

    const handleRegister = (e)=>{
        
        e.preventDefault();

        if ( registerPassword1!==registerPassword2 ) {
            return Swal.fire( 'Error', 'Las contraseñas deben ser iguales', 'error' )
        } else if ( registerPassword1.length<6 ){
            return Swal.fire( 'Error', 'La contraseña debe tener un mínimo de 6 caracteres', 'error' )
        }

        dispatch( startRegister( registerEmail, registerName, registerPassword1 ) );
    }


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={registerName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword1'
                                value={registerPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
