import React, { createContext, useReducer, useContext } from 'react';

const ScheduleContext = createContext();

const initialState = {
  classes: [],
  schedule: [],
};

const scheduleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CLASS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case 'GENERATE_SCHEDULE':
      return {
        ...state,
        schedule: action.payload, // Here you'd generate the schedule based on classes
      };
    default:
      return state;
  }
};

export const ScheduleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);

  const addClass = (newClass) => {
    dispatch({ type: 'ADD_CLASS', payload: newClass });
  };

  const generateSchedule = () => {
    // Example logic to generate a schedule from classes
    const generatedSchedule = state.classes.map((c, index) => ({
      ...c,
      timeSlot: `Slot ${index + 1}`,
    }));
    dispatch({ type: 'GENERATE_SCHEDULE', payload: generatedSchedule });
  };

  return (
    <ScheduleContext.Provider value={{ ...state, addClass, generateSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useScheduleContext = () => {
  return useContext(ScheduleContext);
};
