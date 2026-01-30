import React from 'react'

const Whatsapp = () => {

    const phoneNumber = "+254701713490";
    const message = encodeURIComponent("Hello! I'm interested in learning more about Ink Lab Consulting services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-10 h-10 rounded-t-full rounded-br-full fixed bottom-8 right-8 z-50 transition-all duration-300 hover:scale-110 animate-pulse-gold" />
            </a>
        </div>
    )
}

export default Whatsapp
