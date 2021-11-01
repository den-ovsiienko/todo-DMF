import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Container, Button, Badge, UncontrolledCollapse } from 'reactstrap';
import Moment from 'react-moment';

const dateNow = new Date()
dateNow.setHours(0, 0, 0, 0)
dateNow.setDate(dateNow.getDate() - 1);

const Todo = ({todo, index, tableIndex, table, onEdit, onDelete}) => {
  return (
    <Draggable
      key={todo.id}
      draggableId={`${todo.id}`}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container
            fluid 
            className={`bg-light p-3 rounded shadow mt-3`}
            >
            <div className='d-flex justify-content-between'>
              <p className='fs-5'>
                {`${todo.id}. ${todo.title}`}
                <Badge
                  pill 
                  color={table.color} 
                  className='ms-1 ms-sm-2'
                >
                  {table.state}
                </Badge>
              </p>
              <div>
                <Button size='sm' color='warning' className='rounded-circle me-2' onClick={() => onEdit(tableIndex, table, index)}>
                  <i className="bi bi-pencil-fill"></i>
                </Button>
                <Button size='sm' color='danger' className='rounded-circle' onClick={() => onDelete(todo, tableIndex, index)}>
                  <i className="bi bi-trash-fill"></i>
                </Button>
                <Button size='sm' disabled color='none' className='rounded-circle ms-1 position-relative top-50'>
                  <i className="bi bi-grip-vertical"></i>
                </Button>
              </div>
            </div>
            <Button id={`toggler${todo.id}`} size='sm' color='none' className='rounded-circle'>
              <i className={`bi bi-caret-down-fill`}></i>
            </Button>
            <Moment format='MMM D, YYYY' className='ms-2'>
              {todo.dueDate}
            </Moment>
            {dateNow > Date.parse(todo.dueDate) && table.state !== 'Done' &&
              <Badge color='danger' className='ms-2'>Overdue</Badge>
            }
            <UncontrolledCollapse toggler={`toggler${todo.id}`}>
              <p className={`border-top border-${table.color} mt-2 pt-2 ms-0 me-3 mb-0 text-break fst-italic`}>{todo.description}</p>
            </UncontrolledCollapse>
          </Container>
        </div>
      )}
    </Draggable>
  )
}

export default Todo
