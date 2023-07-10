import React ,{ useState } from 'react';




function Counter() {
    const [count, setCount] = useState(0)
 
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
 
    const reset = () => {
        setCount(0)
    }
 
    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



function Mode (){

    const [darkMode, setDarkMode] = useState(false);
   
    const toggleMode = () => {
        setDarkMode(!darkMode);
      };
    
    
    const setLayoutLightMode = () => {
        document.body.classList.remove('dark');
    }

    const setLayoutDarkMode = () => {
        document.body.classList.add('dark');
    }

    const showMode = (darkMode) => {
        if (darkMode) {
            setLayoutDarkMode()
        }else{
            setLayoutLightMode()
        }        
    }

    return( <>
                <button onClick={toggleMode}>
                    {darkMode ? "LightMode" : "DarkMode"}
                </button>
                {showMode(darkMode)}
            </>

        
    )
}

const Test = () => {
  return ( 

    (
        Counter(),
        Mode()
    )
    
    
  );
};

export default Test;