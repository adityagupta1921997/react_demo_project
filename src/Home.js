import React from 'react';

function Home() {

    function redirectAboutPage(){
        console.log("Inside redirectAboutPage");
        window.location.href="http://localhost:3000/about";
    }
    return(
        <div>
            <heading>Inside Home Page</heading>
            <button onClick = {redirectAboutPage}>About</button>
        </div>
    );
}

export default Home;