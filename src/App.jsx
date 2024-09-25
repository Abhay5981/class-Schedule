import React from "react";
import ClassForm from "./components/ClassForm";
import ScheduleGenerator from "./components/ScheduleGenerator";
import ScheduleView from "./components/ScheduleView";
import { ScheduleProvider } from "./context/ScheduleContext";

const App = () => {
  return (
    <ScheduleProvider>
      <div className="App bg-app-bg bg-cover bg-center min-h-screen p-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-center text-4xl font-bold mb-8 text-white">
            Automated Class Schedule Generator
          </h1>
        </div>
        <ClassForm />
        <ScheduleGenerator />
        <ScheduleView />
      </div>
    </ScheduleProvider>
  );
};

export default App;
