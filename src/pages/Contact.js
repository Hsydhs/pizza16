import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

function Contact() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="contact">


      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Biz bilan bog'laning</h1>

        <form id="contact-form" method="GET">
          <label htmlFor="name">To'liq ismingiz</label>
          <input name="name" placeholder="To'liq ismingizni kiriting..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Emailingizni kiriting..." type="email" />
          <label htmlFor="message">Xabar</label>
          <textarea
            rows="6"
            placeholder="Xabarni kiriting..."
            name="message"
            required
          ></textarea>

            <button onClick={toggle}>Xabar jo'natish</button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
              <h1 className="server"><strong>Server bilan aloqa yo'q</strong></h1>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>OK</Button>
            </ModalFooter>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default Contact;