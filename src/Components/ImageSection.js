import React from 'react';
import coder from '../img/coder.jpg';
import userdata from '../data'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div style={{ display: "" }} className="img">
                <img  src={coder} alt="" />
            </div>
            <div style={{ display: "" }} className="about-info">

                <div className="about-details">
                    <div style={{ width: "400px", content: "center", fontSize:"50" }} className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                       
                    </div>
                    <div style={{ width: "400px", content: "center", fontSize:"50" }} className="right-section">
                      <p>: {userdata.name}</p>
                        <p>: {userdata.age}</p>
                        <p>: {userdata.nationality}</p>
                        <p>: {userdata.languages}</p>
                        <p>: {userdata.Address}</p>
                      
                    </div>
                </div>

                
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
