import React, { useState } from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ClassForm = () => {
  const { addClass } = useScheduleContext();
  const [newClass, setNewClass] = useState({
    subject: '',
    requiredSemesterHours: '',
    professorName: '',
    preferredTimes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(newClass);
    setNewClass({ subject: '', requiredSemesterHours: '', professorName: '', preferredTimes:''});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-slate-700 shadow-lg rounded-lg max-w-md mx-auto">
      <input
        name="subject"
        value={newClass.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="border p-2 rounded w-full"
      />
      <input
        name="requiredSemesterHours"
        value={newClass.requiredSemesterHours}
        onChange={handleChange}
        placeholder="Required Semester Hours"
        className="border p-2 rounded w-full"
      />
      <input
        name="professorName"
        value={newClass.professorName}
        onChange={handleChange}
        placeholder="Professor Name"
        className="border p-2 rounded w-full"
      />
      
      <input
        name="preferredTimes"
        value={newClass.preferredTimes}
        onChange={handleChange}
        placeholder="Preferred times"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Class
      </button>
    </form>
  );
};

export default ClassForm;
