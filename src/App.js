import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, toggleState, changeState, reorder } from './redux/todo'
import DeleteModal from './components/DeleteModal';
import TodoNavbar from './components/Navbar'
import { Container, Row, Col, Button} from 'reactstrap';
import TodoList from './components/TodoList';
import AddModal from './components/AddModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import AddTodoForm from './components/AddTodoForm';

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
// });

const App = () => {
  const { todoList } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleDeleteModalClose = () => setDeleteProps({...deleteProps, isOpen: false});
  const handleAddModalClose = () => setAddProps({...addProps, isOpen: false});

  const deleteTodo = (todo) => {
    dispatch(remove(todo.id));
    handleDeleteModalClose();
  }

  const addTodo = (title, description, dueDate) => {
    dispatch(add({
      title: title,
      description: description,
      dueDate: dueDate,
      state: 'TODO'
    }));
    handleAddModalClose();
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const [addProps, setAddProps] = useState({
    isOpen: false,
    onClose: handleAddModalClose,
    onAdd: addTodo,
  });

  const [deleteProps, setDeleteProps] = useState({
    isOpen: false,
    onClose: handleDeleteModalClose,
    onDelete: deleteTodo,
  });

  const onStateChange = (todo) => dispatch(toggleState(todo.id));
  const onDelete = (todo) => setDeleteProps({...deleteProps, isOpen: true, todo: todo});
  const onAdd = () => setAddProps({...addProps, isOpen: true});

  const onDragEnd = result => {
    console.log(result)
    const { source, destination } = result;

    if(!destination) return;

    if(source.droppableId !== destination.droppableId) {
      dispatch(changeState({index: source.index, state: destination.droppableId}));
    }

    dispatch(reorder({startIndex: source.index, endIndex: destination.index}))

  }

  return (
    <>
      <DeleteModal props={deleteProps} />
      <AddModal props={addProps}/>
      <TodoNavbar menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)}/>

      <Container fluid>
        <DragDropContext onDragEnd={onDragEnd}>
          <Row>
            <Col xs={12} md={6} xl={menuOpen ? 3 : 4}>
              <TodoList
                todoList={todoList}
                state={'TODO'}
                onStateChange={onStateChange}
                onDelete={onDelete}
              />
            </Col>
            <Col xs={12} md={6} xl={menuOpen ? 3 : 4}>
              <TodoList
                todoList={todoList}
                state={'In Progress'}
                onStateChange={onStateChange}
                onDelete={onDelete}
              />
            </Col>
            <Col xs={12} md={6} xl={menuOpen ? 3 : 4}>
              <TodoList
                todoList={todoList}
                state={'Done'}
                onStateChange={onStateChange}
                onDelete={onDelete}
              />
            </Col>
            <Col xs={12} md={6} xl={3} className={`d-${menuOpen ? 'block' : 'none'} `}>
              <Container fluid className=' border border-3 border-top-0 border-bottom-0 border-end-0 border-success pt-2 pb-3'>
                <AddTodoForm onAdd={addTodo} />
              </Container>
            </Col>
          </Row>
          </DragDropContext>
        <button onClick={() => dispatch(add({
          title: 'Create TODO App',
          description: 'Create a SPA for DiscoverMyFranchise.',
          state: 'TODO',
          dueDate: 'Oct 31, 2021'
        }))} type='button' className='btn btn-info mt-3'>
          Add Test TODO
        </button>

        <div className='fixed-bottom d-flex flex-row justify-content-around m-2'>
          <Button size='lg' color='success rounded-circle' onClick={onAdd}><i class="bi bi-plus-lg"></i></Button>
        </div>

      </Container>
    </>
  );
}

export default App;