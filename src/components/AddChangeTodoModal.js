import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , UncontrolledAlert} from 'reactstrap';
import AddChangeTodoForm from './AddChangeTodoForm';

const AddChangeTodoModal = ({props}) => {

  const [title, setTitle] = useState(props.data ? props.data.title : '');
  const [description, setDescription] = useState(props.data ? props.data.description : '')
  const [dueDate, setDueDate] = useState(props.data ? props.data.dueDate : '');
  const [showAlert, setShowAlert] = useState(false)

  const onTodoAdd = () => {
    if(title === '' || dueDate === '') {
      setShowAlert(true);
      return;
    }
    if(props.data) {
      props.onEdit(props.stateIndex, props.index, title, description, dueDate);
      props.data = null
    } else {
      props.onAdd(props.stateIndex, title, description, dueDate);
    }
    setTitle('');
    setDescription('');
    setDueDate('');
    props.onClose();
  }
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.onClose}
      keyboard={false}
      backdrop='static'
    >
      <ModalHeader toggle={props.onClose}>
        {props.data ? 'Edit TODO' : 'Add TODO'}
      </ModalHeader>
      <ModalBody>
        {showAlert &&
          <UncontrolledAlert
            color="warning"
          >
            Some of the required fields are empty. ;(
          </UncontrolledAlert>
        }
        <AddChangeTodoForm
          title={title}
          description={description}
          dueDate={dueDate}
          setTitle={setTitle}
          setDescription={setDescription}
          setDueDate={setDueDate}
          state={props.state}
        />
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={props.onClose}>Close</Button>
        <Button color={props.data ? 'warning' : 'success'} onClick={onTodoAdd}>{props.data ? 'Edit' : 'Add'}</Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddChangeTodoModal
