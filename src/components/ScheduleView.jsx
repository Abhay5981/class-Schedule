import React from 'react';
import { useScheduleContext } from '../context/ScheduleContext';

const ScheduleView = () => {
  const { schedule } = useScheduleContext();

  if (schedule.length === 0) return <p className="text-center">No schedule generated yet.</p>;

  return (
    <div className="overflow-auto max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Class Schedule</h2>
      <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">Subject</th>
            <th className="p-2">Required semester hours</th>
            <th className="p-2">Professor name</th>
            <th className="p-2">Preferred times</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-100 ${
                index === schedule.length - 1 ? 'rounded-b-lg' : ''
              }`}
            >
              <td className="p-2 text-center">{item.subject}</td>
              <td className="p-2 text-center">{item.requiredSemesterHours}</td>
              <td className="p-2 text-center">{item.professorName}</td>
              <td className="p-2 text-center">{item.preferredTimes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleView;

