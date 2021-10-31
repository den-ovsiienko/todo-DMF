import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Row, Col, FormGroup, Label } from 'reactstrap';
import AddTodoForm from './AddTodoForm';

const AddModal = ({props}) => {

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.onClose}
      keyboard={false}
      backdrop='static'
    >
      <ModalHeader toggle={props.onClose}>
        Add TODO
      </ModalHeader>
      <ModalBody>
        <AddTodoForm onAdd={props.onAdd} />
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={props.onClose}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddModal
