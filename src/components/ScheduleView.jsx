import React from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ScheduleView = () => {
  const { schedule } = useScheduleContext();

  if (schedule.length === 0) return <p className="text-center">No schedule generated yet.</p>;

  return (
    <div className="overflow-auto max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Class Schedule</h2>
      <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">Class</th>
            <th className="p-2">Instructor</th>
            <th className="p-2">Room</th>
            <th className="p-2">Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-2 text-center">{item.className}</td>
              <td className="p-2 text-center">{item.instructor}</td>
              <td className="p-2 text-center">{item.room}</td>
              <td className="p-2 text-center">{item.timeSlot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleView;
