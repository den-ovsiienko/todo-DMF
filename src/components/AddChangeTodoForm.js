import { Form, Input, Row, FormGroup, Label } from 'reactstrap';

const AddChangeTodoForm = ({title, description, state, dueDate, setTitle, setDescription, setDueDate}) => {

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
            valid={title !== ''}
            invalid={title === ''}
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
          <Label for='state'>State</Label>
          <Input
            disabled
            id='state'
            name='state'
            type='text'
            className={state ? `bg-${state.color} text-light` : ''}
            value={state ? state.state : ''}
          />
        </FormGroup>
      </Row>
      <Row form>
        <FormGroup>
          <Label for='date'>Due Date</Label>
          <Input
            id='date'
            name='date'
            type='date'
            value={dueDate}
            alid={dueDate !== ''}
            invalid={dueDate === ''}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </FormGroup>
      </Row>
    </Form>
  )
}

export default AddChangeTodoForm
