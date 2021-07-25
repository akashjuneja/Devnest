import {useState} from 'react'

const reducer=(state="",action)=>{
    const [name, setName] = useState("");
        if(action.type==="ADD_NAME"){
             setName(state.target.value)
             return name;
        }else if(action.type==="ADD_EMAIL"){
             setName(state.target.value)
             return name;
        }else{
            return state;
        }
    
}

export default reducer