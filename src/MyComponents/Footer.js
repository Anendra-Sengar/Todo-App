import React from "react";

export const Footer = () =>
{
    let FooterStyle = {
        position:"relative",
        top:"10vh",
        width:"100%",
        borderTop:"5px solid red"
    }
return(
    <footer className="bg-dark text-light p-1" style={FooterStyle}>
        <p className="text-center">   all copyright &copy;  reserve by Anendra Sengar</p> 
    </footer>);
}
