import React, { useState } from "react";
import {
  Col,
  Media,
  Row,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";

const ModalComponent = () => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (null)  
  
};

export default ModalComponent;
