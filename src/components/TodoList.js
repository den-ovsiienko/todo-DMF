import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Badge, UncontrolledCollapse } from 'reactstrap';
import Moment from 'react-moment';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import SortDropDown from './SortDropDown';
import Todo from './Todo';
import moment from 'moment';


const TodoList = ({ table, tableIndex, onStateChange, onDelete, onAdd, onEdit, onSort, filters }) => {
  return (
    <>
      <div className={`bg-light d-flex justify-content-between mt-3 p-3 border border-3 border-start-0 border-end-0 border-top-0 border-${table.color}`}>
        <p className={`text-${table.color} m-0 fs-4`}>{table.state}</p>
        <div>
          {table.sortLabel && 
            <p className='d-inline-block text-primary m-0 me-2 p-0'>{table.sortLabel}</p>
          }
          <SortDropDown onSort={onSort} index={tableIndex}/>
          <Button
            size='sm' 
            color={table.color} 
            className='rounded-circle mt-1'
            onClick={() => onAdd(tableIndex, table)}
          >
              <i class="bi bi-plus-lg"></i>
          </Button>
          <Button size='sm' disabled color='none' className='rounded-circle mt-1 ms-1'>
            <i className="bi bi-grip-vertical"></i>
          </Button>
        </div>
      </div>
      <Droppable key={tableIndex} droppableId={`${tableIndex}`} type='TODO'>
        {(provided, snapshot) => (
          <div 
          className={`bg-${table.color} ${snapshot.isDraggingOver ? 'bg-opacity-50' : 'bg-opacity-25'} p-2`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {
            table.todos.map((todo, index) => {
              for(var key in todo) {
                if(key === 'dueDate' 
                  && !moment(todo[key]).format('MMM D, YYYY').toLowerCase().includes(filters[key].toLowerCase())) {
                    return
                } 
                if(!todo[key].toLowerCase().includes(filters[key].toLowerCase())) return
              }
              return(
                <Row>
                  <Todo 
                    todo={todo} 
                    index={index} 
                    tableIndex={tableIndex}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onStateChange={onStateChange} 
                    table={table}
                  />
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
