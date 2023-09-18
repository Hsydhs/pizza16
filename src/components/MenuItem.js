import React, { useState } from "react";
import "../styles/Sale.css";
import Peyme from "../assets/peyme.png";
import Click from "../assets/click.png";
import Naxt from "../assets/nalichka.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function MenuItem({ image, name, price }) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const [modal2, setModal2] = useState(false);

  const toggle2 = () => setModal2(!modal2);


  return (
    <>
      <div className="menuItem" onClick={toggle}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}><strong>Xarid qilish</strong></ModalHeader>
        <ModalBody>

          <div className="sale">
            <a href="https://my.click.uz/auth" target="_blank">
              <img className="click" src={Click} />
            </a>

            <a href="https://payme.uz/cabinet/transfer/external" target="_blank">
              <img className="payme" src={Peyme} />
            </a>

            <a>
              <img className="nalichka" onClick={toggle2} src={Naxt} />
            </a>


          </div>
          

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Xaridni bekor qilish</Button>
        </ModalFooter>
      </Modal>



      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalBody>

          <div className="modal2">
            <h3 className="thanks">Xaridingiz uchun rahmat</h3>
          </div>
          

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle2}>Tushunarli</Button>
        </ModalFooter>
      </Modal>

    </>
  );
}

export default MenuItem;