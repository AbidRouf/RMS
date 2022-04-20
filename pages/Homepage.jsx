import React from "react";
import Description from "../components/Description.jsx";
import Landing from "../components/Landing.jsx"
import Modal from "../components/Modal.jsx";
import emailjs from "emailjs-com"

let isModalOpen = false

const Home = () => {
    return (
        <>
        <Landing
            toggleModal={toggleModal} 
        />
        <Modal 
            toggleModal={toggleModal}
            sendEmail = {sendEmail}
        />
        <Description />
        </>   
    )

    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false
            return document.body.classList.remove("modal--open")
        }
        isModalOpen = true
        document.body.classList += " modal--open"
      }


      function sendEmail(e) {
        event.preventDefault();
        const loading = document.querySelector(".modal__overlay--loading");
        const success = document.querySelector(".modal__overlay--success");
        loading.classList += " modal__overlay--visible";
        emailjs
            .sendForm(
                "service_bcsjnng",
                "template_lu89zwg",
                event.target,
                "user_QCIJXvGo6Ge2E4x5ycRaw"
            )
            .then(() => {
                loading.classList.remove("modal__overlay--visible");
                success.classList += " modal__overlay--visible";
            })
            .catch(() => {
                loading.classList.remove("modal__overlay--visible");
                alert(
                    "The email service is temporarily unavailable. Please contact me directly on arouf1471@email.com"
                );
            });
    }

};




export default Home;
