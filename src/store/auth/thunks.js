import { fetchSinToken } from "@/helpers/fetch"
import { authLogin } from "./authSlice";
import Swal from "sweetalert2";


export const stratLogin = ( email, password )=>{

    return async( dispatch )=>{
        
        const resp = await fetchSinToken( 'auth', {email, password}, 'POST' );
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

            Swal.fire( 'Error', body.msg, 'error' );

        }

    };
};