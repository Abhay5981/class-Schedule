import React from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ScheduleGenerator = () => {
  const { generateSchedule, schedule } = useScheduleContext();

  return (
    <div className="p-4 text-center">
      <button
        onClick={generateSchedule}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
      >
        Generate Schedule
      </button>
   
    </div>
  );
};

export default ScheduleGenerator;
