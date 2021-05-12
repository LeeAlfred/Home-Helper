import React from 'react';
import AddButton from './AddButton';

function Card(props) {
  return (
    <div className="card">
      <form>
        <label htmlFor="new-todo-input" className="label_lg">
          What Needs to be done
        </label>
        <input
          type="text"
          id="new-todo-input"
          className="input input_lg"
          name="text"
          autoComplete="off"
        />
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  );
}

export default Card;
