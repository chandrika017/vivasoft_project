import React from 'react';

const Action = ({ onEdit, onDelete }) => {
  return (
    <div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Action;
