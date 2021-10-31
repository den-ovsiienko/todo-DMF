import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Row, Col, FormGroup, Label } from 'reactstrap';

const AddTodoForm = ({onAdd}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('');
  const [isAllDay, setIsAllDay] = useState(false);

  const onTodoAdd = (title, description, dueDate) => {
    onAdd(title, description, dueDate);
    setTitle('');
    setDescription('');
    setDueDate('');
    setIsAllDay(false);
  }

  return (
    <Form>
      <Row form>
        <FormGroup>
          <Label for='title'>Title</Label>
          <Input
            id='title'
            name='title'
            placeholder={`My TODO's title`}
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
      </Row>
      <Row form>
        <FormGroup>
          <Label for='description'>Description (Optional)</Label>
          <Input
            id='description'
            name='description'
            placeholder={`My TODO's description (Optional)`}
            type='textarea'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
      </Row>
      <Row form>
        <FormGroup>
          <Label for='date'>Due Date</Label>
          <Input
            id='date'
            name='date'
            type={isAllDay ? 'date' : 'datetime-local'}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </FormGroup>
      </Row>
      <Row form>
        <FormGroup>
          <Label for='date'>All Day</Label>
          <Input
            id='date'
            name='date'
            type="checkbox"
            value={isAllDay}
            className='ms-2'
            onChange={(e) => setIsAllDay(e.target.checked)}
          />
        </FormGroup>
      </Row>
      <Row form>
        <Button block color='success' onClick={() => onAdd(title, description, dueDate)}>Add</Button>
      </Row>
    </Form>
  )
}

export default AddTodoForm
