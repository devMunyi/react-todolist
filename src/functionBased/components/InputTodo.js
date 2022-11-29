/* eslint-disable */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
    // setTitle(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    const 
    // if (inputText.title.trim()) {
    //   addTodoProps(inputText.title);
    //   setInputText({
    //     title: '',
    //   });
    // } else {
    //   alert('Please write item');
    // }
  };


  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={handleChange}
      />
      <button onClick={addBook} type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
