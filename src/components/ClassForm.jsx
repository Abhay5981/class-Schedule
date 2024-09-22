import React, { useState } from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ClassForm = () => {
  const { addClass } = useScheduleContext();
  const [newClass, setNewClass] = useState({
    className: '',
    instructor: '',
    room: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(newClass);
    setNewClass({ className: '', instructor: '', room: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <input
        name="className"
        value={newClass.className}
        onChange={handleChange}
        placeholder="Class Name"
        className="border p-2 rounded w-full"
      />
      <input
        name="instructor"
        value={newClass.instructor}
        onChange={handleChange}
        placeholder="Instructor"
        className="border p-2 rounded w-full"
      />
      <input
        name="room"
        value={newClass.room}
        onChange={handleChange}
        placeholder="Room"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Class
      </button>
    </form>
  );
};

export default ClassForm;
