import {useState, useEffect} from 'react'

const useClock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      let id = setInterval(() => {
        setClock(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(id);
    }, []);
  
    return clock;
  }
  

  export default useClock