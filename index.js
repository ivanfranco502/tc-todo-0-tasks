import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


// Crear el Componente App el cual contenga 
// * h1 el cual renderiza la prop title
// * input text donde se ingresará una tarea
// * un botón "Add" el cual mostrará un mensaje al hacer click

const App = ({ title, onAdd }) => (
  <div>
    <h1>{ title }</h1>
    <input type="text" />
    <button onClick={onAdd}>Add</button>
  </div>
);

// No modificar -------------------------------

App.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func
};

App.defaultProps = {
  title: '',
  onAdd: () => {}
};

render(
  <App
    title="Mis Tareas"
    onAdd={() => console.log('Add clicked!')}
    />, 
  document.getElementById('root'));
