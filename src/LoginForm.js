import React, { useState } from 'react';

export default function LoginForm(bShow) {
    let [bshowLogin, setShowLogin] = useState(bShow);

    function clickButton(){
        setShowLogin(!bshowLogin);
        console.log(bshowLogin);
    }
    return (
        
        <div>
            <button onClick={()=>{
                clickButton();
            }}>Click me</button>
        </div>
    )
}
