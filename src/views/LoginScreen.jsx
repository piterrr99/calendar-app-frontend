import React from 'react';
import '../css/login.css'
import { useForm } from '@/hooks/useForm';
import { useDispatch } from 'react-redux';
import { stratLogin } from '@/store/auth/thunks';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        loginEmail: 'pedro@gmail.com',
        loginPassword: 123456
    })

    const { loginEmail, loginPassword } = formLoginValues

    const handleLogin = (e)=>{

        e.preventDefault();

        dispatch( stratLogin(loginEmail, loginPassword) )

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
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
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
