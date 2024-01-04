
import React, { useState } from 'react';
import AddDesignation from './AddDesignation';

const ParentComponent = () => {
const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsAddFormOpen(false);
  };

  const handleCloseForm = () => {
    setIsAddFormOpen(false);
     setDesignation('');
     setStatus('');
  };

  const handleSaveForm = (formData) => {
    Handle saving data (formData)
    Optionally, you can close the form after saving
    handleCloseForm();
  };

  return (
    <div>
      <button onClick={handleOpenForm}>Open Add Purpose Form</button>

      {isAddFormOpen && (
        <AddDesignation onSubmit={handleSaveForm} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default ParentComponent;
