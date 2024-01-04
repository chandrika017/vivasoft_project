import React, { useState } from 'react';

const AddDesignation = ({ onSubmit }) => {
  const [designation, setDesignation] = useState('');
  const [status, setStatus] = useState('Active'); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ designation, status });
    
    //setDesignation('');
    // setStatus('Active');
  };

  return (
    <div
    className="fixed top-[274px] left-[429px] w-[642px] h-[367px] bg-white border border-solid border-gray-300 rounded-lg p-8"
    >
      <div className="bg-white">
    <div className="max-w-md mx-auto rounded-lg bg-slate-400">
      <form className="shadow-md px-8 pt-6 pb-8 mb-4 rounded-lg bg-white" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700 text-sm font-bold mb-2">
            Add Purpose
            <br></br>
            <br></br>
            Title
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2 pt-5">
            Status
          </label>
          <select
            name="status"
            id="selectStatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg bg-gray-100"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Waiting">Waiting</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
  <button 
    className="bg-gray-200 text-black font-semibold py-2 px-4 border rounded-lg hover:scale-105 ml-auto"
  >
    Close
  </button>

  <button
    type="submit"
    className="bg-purple-200 text-black font-semibold py-2 px-4 border rounded-lg hover:scale-105"
  >
    Save
  </button>
</div>

      </form>
    </div>
    </div>
    </div>
  );
};

export default AddDesignation;



