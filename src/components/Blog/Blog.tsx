import React, { useState, useEffect } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import AddDesignation from './AddDesignation';


const Blog = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('blogData');
    return storedData
      ? JSON.parse(storedData)
      : [
          { designation: 'Meeting', status: 'Active' },
          { designation: 'Visit', status: 'Inactive' },
        ];
  });

  const [addClick, setAddClick] = useState(false);
  const [editClick, setEditClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState<number | null>(null);

  const handleAddSubmit = (newDesignation) => {
    setData((prevData) => [...prevData, newDesignation]);
    setAddClick(false);
  };

  const handleEdit = () => {
    // Implement your logic for edit action
    console.log('Edit clicked');
    closeAction();
  };

  const handleDelete = () => {
    // Implement your logic for delete action
    console.log('Delete clicked');
    if (clickedRowIndex !== null) {
      const newData = [...data];
      newData.splice(clickedRowIndex, 1);
      setData(newData);
    }
    closeAction();
  };

  const closeAction = () => {
    setClickedRowIndex(null);
    setEditClick(false);
    setDeleteClick(false);
  };

  const handleClickOutside = (event) => {
    const isEditDeleteButton = (element) => {
      return (
        element.classList.contains('edit-button') || element.classList.contains('delete-button')
      );
    };

    if (
      (editClick || deleteClick) &&
      !isEditDeleteButton(event.target) &&
      !event.target.closest('.action-buttons-container')
    ) {
      closeAction();
    }
  };

  useEffect(() => {
    if (editClick || deleteClick) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [editClick, deleteClick]);

  useEffect(() => {
    localStorage.setItem('blogData', JSON.stringify(data));
  }, [data]);

  return (

    <div className="flex flex-col px-10 w-1/2">
      
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        
        <div className="inline-block min-w-full py-7 sm:px-2 lg:px-8">
          
          <div className="overflow-hidden">
          <p className="text-xl font-medium mb-5">Purpose List</p>
            <table className="py-10 min-w-full text-left text-sm font-light table-auto rounded-lg overflow-hidden">
              
              <thead className="border-b font-medium dark:border-neutral-500 bg-purple-100 rounded-tl-lg">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Purpose
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr className="border-b dark:border-neutral-500" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.designation}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div
                        className={`w-auto h-auto inline-block rounded-2xl px-2 font-semibold ${
                          item.status === 'Active' ? 'bg-green-200' : 'bg-red-200'
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 relative">
                      <HiDotsVertical
                        className="cursor-pointer hover:scale-110"
                        onClick={() => {
                          setClickedRowIndex(index);
                          setEditClick(true);
                          setDeleteClick(true);
                        }}
                      />
                      {(editClick || deleteClick) && clickedRowIndex === index && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg action-buttons-container">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600 edit-button"
                            onClick={handleEdit}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 delete-button"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-purple-200 text-black font-semibold py-2 px-4 border my-5 mx-1 rounded-lg hover:scale-105"
              onClick={() => setAddClick(!addClick)}
            >
              Add New
            </button>
            {addClick && <AddDesignation onSubmit={handleAddSubmit} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;






