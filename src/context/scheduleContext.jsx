import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

// Create ScheduleContext for managing state
const ScheduleContext = createContext();

// Initial state with classes and schedule
const initialState = {
  classes: JSON.parse(localStorage.getItem('classes')) || [],
  schedule: JSON.parse(localStorage.getItem('schedule')) || [],
  bookedSlots: JSON.parse(localStorage.getItem('bookedSlots')) || {},  // Track booked slots by professor and date
};

// Reducer function to handle different actions
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
        schedule: action.payload,  // Store generated schedule
        bookedSlots: action.bookedSlots,  // Store professor's booked slots
      };
    case 'RESET_SCHEDULE':
      return {
        classes: [], // Clear classes
        schedule: [], // Clear schedule
        bookedSlots: {}, // Clear booked slots
      };
    default:
      return state;
  }
};

// Provider component to manage scheduling context
export const ScheduleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages

  // Save classes and schedule to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('classes', JSON.stringify(state.classes));
    localStorage.setItem('schedule', JSON.stringify(state.schedule));
    localStorage.setItem('bookedSlots', JSON.stringify(state.bookedSlots));
  }, [state.classes, state.schedule, state.bookedSlots]);

  // Add new class to the state
  const addClass = (newClass) => {
    dispatch({ type: 'ADD_CLASS', payload: newClass });
  };

  // Function to generate schedule and prevent double-booking
  const generateSchedule = () => {
    const preferredTimes = [
      "9:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 PM - 1:00 PM",
      "1:00 PM - 2:00 PM",
      "2:00 PM - 3:00 PM",
      "3:00 PM - 4:00 PM",
    ];

    // Track booked time slots and dates for professors
    const bookedSlots = { ...state.bookedSlots };
    const generatedSchedule = [];

    // Reset error message on each schedule generation attempt
    setErrorMessage('');

    for (let c of state.classes) {
      const { professor, preferredTime, date } = c;
      let timeSlot = preferredTime || preferredTimes[0]; // Use preferred time or first available slot

      // Check if the professor's time slot is already booked on the same date
      if (bookedSlots[professor]?.[date]?.includes(timeSlot)) {
        // If professor's slot is booked, set the error message and stop the process
        setErrorMessage(`Professor ${professor} is already booked for ${timeSlot} on ${date}.`);
        return; // Stop further scheduling if any conflict is found
      }

      // Mark the professor's time slot as booked on the specific date
      if (!bookedSlots[professor]) {
        bookedSlots[professor] = {};
      }
      if (!bookedSlots[professor][date]) {
        bookedSlots[professor][date] = [];
      }
      bookedSlots[professor][date].push(timeSlot); // Block the time slot

      // Add the class with the assigned time slot to the generated schedule
      generatedSchedule.push({
        ...c,
        timeSlot, // Assign the available or preferred time slot to the class
      });
    }

    // Dispatch the generated schedule and updated booked slots
    dispatch({ type: 'GENERATE_SCHEDULE', payload: generatedSchedule, bookedSlots });
  };

  // Reset schedule and clear localStorage
  const resetSchedule = () => {
    dispatch({ type: 'RESET_SCHEDULE' });
    localStorage.removeItem('classes');
    localStorage.removeItem('schedule');
    localStorage.removeItem('bookedSlots');
    setErrorMessage(''); // Reset error message as well
  };

  return (
    <ScheduleContext.Provider value={{ ...state, addClass, generateSchedule, resetSchedule, errorMessage }}>
      {children}
    </ScheduleContext.Provider>
  );
};

// Hook to use the ScheduleContext in other components
export const useScheduleContext = () => {
  return useContext(ScheduleContext);
};
