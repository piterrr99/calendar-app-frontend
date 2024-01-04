import { useState } from "react"

export const useForm = (initialValue={}) => {

    const [values, setValues] = useState(initialValue)

    const reset = ()=>{
        setValues(initialValue);
    };

    const handleInputChange = ({target})=>{
        
          setValues({
            ...values,
            [target.name]: target.value
        });  
    };

    return [values, handleInputChange, reset];

}
