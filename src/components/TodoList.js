import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Badge, UncontrolledCollapse } from 'reactstrap';
import Moment from 'react-moment';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const TodoList = ({ todoList, state, onStateChange, onDelete }) => {
  const color = state === 'TODO' 
    ? 'danger' : state === 'In Progress' 
      ? 'warning' : 'success'
  return (
    <>
      <h4 className={`text-${color} bg-light mb-0 p-3 rounded border border-3 border-start-0 border-end-0 border-top-0 border-${color} `}>{state}</h4>
      <Droppable droppableId={state}>
        {(provided, snapshot) => (
          <div 
          className={`bg-${color} bg-opacity-25 p-2`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {
            todoList.map((todo, index) => {
              if(todo.state !== state) return
              return(
                <Row>
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
                              {todo.title}
                              <Badge
                              role='button' 
                              onDoubleClick={() => onStateChange(todo)} 
                              pill 
                              color={color} 
                              className='ms-1 ms-sm-2'
                              >
                                {todo.state}
                              </Badge>
                            </p>
                            <div>
                              <Button size='sm' color='warning' className='rounded-circle me-2'><i className="bi bi-pencil-fill"></i></Button>
                              <Button size='sm' color='danger' className='rounded-circle' onClick={() => onDelete(todo)}><i className="bi bi-trash-fill"></i></Button>
                              <Button size='sm' disabled color='none' className='rounded-circle ms-1 position-relative top-50'><i className="bi bi-grip-vertical"></i></Button>
                            </div>
                          </div>
                          <Button id={`toggler${todo.id}`} size='sm' color='none' className='rounded-circle'><i class="bi bi-caret-down-fill"></i></Button>
                          <Moment format='MMM D, YYYY' className='ms-2'>
                            {todo.dueDate}
                          </Moment>
                          <UncontrolledCollapse toggler={`toggler${todo.id}`}>
                            <p className={`border-top border-${color} mt-2 pt-2 ms-0 me-3 mb-0 text-break fst-italic`}>{todo.description}</p>
                          </UncontrolledCollapse>
                        </Container>
                      </div>
                    )}
                  </Draggable>
                </Row>
              )}
            )
          }
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    </>
  )
}

TodoList.propTypes = {
  todoList:  PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList
