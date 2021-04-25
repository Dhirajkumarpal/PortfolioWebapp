import React from 'react';
import coder from '../img/coder.jpg';
import userdata from '../data'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div style={{ display: "block", maxWidth: "70%vw", maxHeight:"70%vh" }} className="img">
                <img  src={coder} alt="" />
            </div>
            <div style={{ display: "" }} className="about-info">

                <div className="about-details">
                    <div style={{ maxwidth: "100%"}} className="left-section">
                        <p>Full Name:{userdata.name}</p>
                        <p>Age: {userdata.age}</p>
                        <p>Nationality: {userdata.nationality}</p>
                        <p>Languages: {userdata.languages}</p>
                        <p>Address: {userdata.Address}</p>
                       
                    </div>
                 
                </div>

                <a href={'https://drive.google.com/file/d/12LwkHPs_WrFkNEkPn8O2wEAtDvVU3l5a/view?usp=sharing'} download="Resume" rel="noreferrer" target='_blank'>
                    <button className="btn">See CV</button>
                </a>
                
            </div>
        </div>
    )
}

export default ImageSection;
