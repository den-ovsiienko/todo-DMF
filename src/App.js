import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, toggleState, changeState, reorderTodo, reorderTable, edit, sort } from './redux/todo'
import DeleteModal from './components/DeleteModal';
import TodoNavbar from './components/Navbar'
import { Container } from 'reactstrap';
import TodoList from './components/TodoList';
import AddChangeTodoModal from './components/AddChangeTodoModal';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const App = () => {
  const { todoList } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    state: '',
    title: '',
    id: '',
    dueDate: '',
    description: ''
  });

  const handleDeleteModalClose = () => setDeleteProps({...deleteProps, isOpen: false});
  const handleAddModalClose = () => setAddProps({...addProps, isOpen: false});

  const deleteTodo = (stateIndex, index) => {
    dispatch(remove({
      stateIndex: stateIndex,
      index: index
    }));
    handleDeleteModalClose();
  }

  const onFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type] : value
    })
  }

  const editTodo = (stateIndex, index, title, description, dueDate, id) => {
    dispatch(edit({
      stateIndex: stateIndex,
      index: index,
      todo: {
        title: title,
        description: description,
        dueDate: dueDate,
        id: id
      }
    }));
  }

  const addTodo = (stateIndex, title, description, dueDate) => {
    dispatch(add({
      stateIndex: stateIndex,
      todo: {
        title: title,
        description: description,
        dueDate: dueDate,
      }
    }));
    handleAddModalClose();
  }

  const [addProps, setAddProps] = useState({
    isOpen: false,
    onClose: handleAddModalClose,
    onAdd: addTodo,
    onEdit: editTodo
  });

  const [deleteProps, setDeleteProps] = useState({
    isOpen: false,
    onClose: handleDeleteModalClose,
    onDelete: deleteTodo,
  });

  const onStateChange = (todo) => dispatch(toggleState(todo.id));

  const onAdd = (stateIndex, state) => setAddProps({
    ...addProps, 
    isOpen: true, 
    stateIndex: stateIndex, 
    state: state,
  });

  const onEdit = (stateIndex, state, index) => {
    const todo = todoList.at(stateIndex).todos.at(index)
    setAddProps({
      ...addProps, 
      isOpen: true, 
      stateIndex: stateIndex, 
      state: state,
      index: index,
      data: todo
    });
  }

  const onDelete = (todo, stateIndex, index) => 
    setDeleteProps({
      ...deleteProps, 
      isOpen: true, 
      todo: todo,
      stateIndex: stateIndex,
      index: index
    });

  const onDragEnd = result => {
    console.log(result)
    const { source, destination } = result;

    if(!destination) return;

    if(destination.droppableId === source.droppableId 
      && destination.index === source.index) return;

    if(result.type === 'TABLE') {
      dispatch(reorderTable({
        sourceIndex: source.index,
        destIndex: destination.index
      }))
      return
    }

    if(source.droppableId !== destination.droppableId) {
      dispatch(changeState({
        sourceStateIndex: source.droppableId,
        sourceIndex: source.index,
        destStateIndex: destination.droppableId,
        destIndex: destination.index, 
      }));
    } else {
      dispatch(reorderTodo({
        sourceIndex: source.index,
        destIndex: destination.index,
        stateIndex: source.droppableId
      }))
    }
  }

  const onSort = ({index, func, sortLabel}) => dispatch(sort({
    index: index,
    func: func,
    sortLabel: sortLabel
  }));

  return (
    <>
      {deleteProps.isOpen && <DeleteModal props={deleteProps} />}
      {addProps.isOpen && <AddChangeTodoModal props={addProps} />}
      <TodoNavbar filters={filters} onChange={onFilterChange}/>

      <Container fluid>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable direction='horizontal' droppableId='tables' type='TABLE'>
            {(provided, snapshot) => (
              <div
                className='row'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
              {
                todoList.map((table, index) => {
                  if (!table.state.toLowerCase().includes(filters.state.toLowerCase())) return null;
                  return <Draggable
                    key={`table-${index}`}
                    draggableId={`table-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                      className='col-12 col-md-6 col-xl-4' 
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      >
                        <TodoList
                          table={table}
                          tableIndex={index}
                          onStateChange={onStateChange}
                          onDelete={onDelete}
                          onAdd={onAdd}
                          onEdit={onEdit}
                          onSort={onSort}
                          filters={filters}
                        />
                      </div>
                    )}
                  </Draggable>
                })
              }
              {provided.placeholder}
            </div>
            )}
          </Droppable>
        </DragDropContext>

      </Container>
    </>
  );
}

export default App;