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
      {schedule.length > 0 && (
        <div className="bg-gray-50 shadow-lg p-4 rounded-lg">
          <h3 className="font-bold mb-2">Generated Schedule</h3>
          <ul className="list-disc list-inside">
            {schedule.map((item, index) => (
              <li key={index} className="py-2">
                <span className="font-semibold">{item.className}</span> - {item.instructor} - {item.room} - {item.timeSlot}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScheduleGenerator;
