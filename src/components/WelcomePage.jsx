import React from 'react'
import './App.css';
import Logo from "../images/logo.png"

const WelcomePage = () => {
    return (
        <div className="bg-body">
            <img className="App-logo" src={Logo} alt="Logo" />
            <h3>Shanti Hostel web page is under construction!</h3>
            <div className="bg-maps">
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.265904291275!2d21.442205715444818!3d41.994568579213066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415bbe8e75ea7%3A0x309377b0c6a08aa7!2z0KXQvtGB0YLQtdC7IOKAntCo0LDQvdGC0LjigJw!5e0!3m2!1smk!2smk!4v1670257287296!5m2!1smk!2smk"></iframe>
            </div>
            <p className="location">
                &nbsp;str.Rade Jovcevski Korcagin 11 -Skopje
            </p>
            <p className="booking">
                For booking please contact us:
                &nbsp;
                <a className="contact-shanti" href="tel: +38978450371">
                +389 78 450 371
                </a>
            </p>

            {/* <div className="contact">
                <a href="viber://contact?number=%2B38978450371">
                
                    WhatsApp
                </a>
                <a href="tel: +38978450371">
                 
                   Phone
                </a>
                <a href="https://api.whatsapp.com/send?phone=38978450371">
                    Viber
                </a>
            </div> */}
            <p>
                Reach us directly via&nbsp;
                <a className="contact-shanti" href="mailto: hostelshanti@gmail.com">EMAIL</a>.
            </p>
        </div>
    );
}

export default WelcomePage