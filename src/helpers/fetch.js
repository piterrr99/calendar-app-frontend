
const baseURL = import.meta.env.VITE_REACT_APP_API_URL;


const fetchConToken = ( endpoint, data, method = 'GET' )=>{

    const token = localStorage.getItem( 'token' ) || '';
    const url = `${baseURL}/${endpoint}`;

    if ( method === 'GET' ){
        
        return fetch( url, {
            headers: {
                'x-token': token
            }
        });
    
    } else {

        return fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    };
};


const fetchSinToken = ( endpoint, data, method = 'GET' )=>{

    const url = `${baseURL}/${endpoint}`;

    if ( method === 'GET' ){
        
        return fetch( url )
    
    } else {

        return fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    };
};

export {
    fetchConToken,
    fetchSinToken
}