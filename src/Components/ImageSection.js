import React from 'react';
import coder from '../img/coder.jpg';
import userdata from '../data'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div style={{ display: "block" }} className="img">
                <img  src={coder} alt="" />
            </div>
            <div style={{ display: "inline-block" }} className="about-info">
                
                <div style={{ width: "200px" }} className="about-details">
                    <div className="left-section">
                        <p>Full Name: {userdata.name}</p>
                        <p>Age: {userdata.age}</p>
                        <p>Nationality: {userdata.nationality}</p>
                        <p>Languages: {userdata.languages}</p>
                        <p>City: {userdata.Address}</p>
                        <p>Country:{userdata.Country}</p>
               
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
