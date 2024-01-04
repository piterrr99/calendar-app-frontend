import { fetchConToken, fetchSinToken } from "@/helpers/fetch"
import { authDoneChecking, authLogin, authLogout } from "./authSlice";
import Swal from "sweetalert2";


export const startChecking = ()=>{

    return async( dispatch )=>{
        
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json()

        if( body.ok ){

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );            
            
            
            dispatch( authLogin({
                            name: body.name, 
                            uid: body.uid
                        } 
            ));

        } else {

            dispatch( authDoneChecking() )

        };
    };
};


export const startLogin = ( email, password )=>{

    return async( dispatch )=>{
        
        const resp = await fetchSinToken( 'auth', {email, password}, 'POST' );
        const body = await resp.json();

        if( body.ok ){

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );            
            
            
            dispatch( authLogin({
                            name: body.name, 
                            uid: body.uid
                        } 
            ));

        } else {

            Swal.fire( 'Error', body.msg, 'error' );

        };
    };
};


export const startLogout = ()=>{

    return (dispatch)=>{

        localStorage.clear();
        dispatch( authLogout() );

    };
};


export const startRegister = ( email, name, password )=>{
    
    return async( dispatch )=>{

        const resp = await fetchSinToken( 'auth/new', { email, name, password }, 'POST' );
        const body = await resp.json();

        console.log(body)

        if( body.ok ){

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            
            dispatch( 
                authLogin({
                    name: body.name,
                    uid: body.uid
                })
            );
                
        } else {

            return Swal.fire( 'Error', body.msg, 'error' );

        }; 
    };
};