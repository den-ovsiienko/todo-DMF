import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({props}) => {
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.onClose}
      keyboard={false}
      backdrop='static'
    >
      <ModalHeader toggle={props.onClose}>
        Delete TODO
      </ModalHeader>
      <ModalBody>
        <p>Do you want to delete <span className='text-primary'>{props.todo ? props.todo.title : ''}</span>?</p>
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={props.onClose}>Close</Button>
        <Button color='danger' onClick={() => props.onDelete(props.stateIndex, props.index)}>Delete</Button>
      </ModalFooter>
    </Modal>
  )
}

export default DeleteModal
