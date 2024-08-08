import React from 'react';
import ReactDOM from 'react-dom/client';

function Football(){
    const shoot = (a) =>{
        alert(a);
    }
    return(<button onClick={()=>shoot("aaa")}>Take the shot!</button>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>);