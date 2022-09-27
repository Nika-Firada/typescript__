import { useEffect } from 'react';
import { useState } from 'react';


export function useDebounce(value:string, delay:number = 300){
    const [debaunced,setDebaunced] = useState(value)

    useEffect(() =>{
       const handler = setTimeout(() => setDebaunced(value), delay)
       return () => clearTimeout(handler)
    },[value,delay])

    return debaunced
}