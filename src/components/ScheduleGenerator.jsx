import React from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ScheduleGenerator = () => {
  const { generateSchedule, resetSchedule, errorMessage } = useScheduleContext();

  return (
    <div className="schedule-generator text-center mt-4">
      <button 
        onClick={generateSchedule} 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Generate Schedule
      </button>

      <button 
        onClick={resetSchedule} 
        className="bg-red-500 text-white py-2 px-4 rounded ml-4">
        Reset Schedule
      </button>

      {/* Display error message if professor is booked */}
      {errorMessage && (
        <p className="text-red-500 mt-4">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ScheduleGenerator;
