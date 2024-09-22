import React from 'react';
import ClassForm from './components/ClassForm';
import ScheduleGenerator from './components/ScheduleGenerator';
import ScheduleView from './components/ScheduleView';
import { ScheduleProvider } from './context/ScheduleContext';

const App = () => {
  return (
    <ScheduleProvider>
      <div className="App bg-blue-300 min-h-screen p-8">
        <img src="images/timetable.png" className='w-12'/>
        <h1 className="text-center text-4xl font-bold mb-8">Automated Class Schedule Generator</h1>
        <ClassForm />
        <ScheduleGenerator />
        <ScheduleView />
      </div>
    </ScheduleProvider>
  );
};

export default App;
