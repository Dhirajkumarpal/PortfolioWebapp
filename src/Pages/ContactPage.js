import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import data from '../data'
function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div  className="ContactPage">
                <div  className="map-sect">
                    <iframe title={ "address"}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482632.8035652184!2d72.60097379213462!3d19.082688100346832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1619111235908!5m2!1sen!2sin" width="600" height="450" style={{ border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                       </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={data.phoneno} text2={'+919821005212'} title={'Phone'} />
                    <ContactItem icon={email} text1={data.emailid[0]} text2={data.emailid[1]} title={'Email'} />
                    <ContactItem icon={location} text1={data.Address +" , "+ data.Country}  title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
