import React, { createContext, useReducer, useContext } from "react";

// Create ScheduleContext for managing state
const ScheduleContext = createContext();

// Initial state with classes and schedule
const initialState = {
  classes: [],
  schedule: [],
};

// Reducer function to handle different actions
const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLASS":
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case "GENERATE_SCHEDULE":
      return {
        ...state,
        schedule: action.payload, // Store generated schedule
      };
    default:
      return state;
  }
};

// Provider component to manage scheduling context
export const ScheduleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);

  // Add new class to the state
  const addClass = (newClass) => {
    dispatch({ type: "ADD_CLASS", payload: newClass });
  };

  // Function to generate schedule
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

    // Track booked time slots for professors to avoid conflicts
    const bookedSlots = {};

    const generatedSchedule = state.classes.map((c) => {
      const professor = c.professor;
      let timeSlot = c.preferredTime || preferredTimes[0]; // Use preferred time or first available slot

      // Check if the preferred time slot is already booked
      if (bookedSlots[professor]?.includes(timeSlot)) {
        // If booked, get the next available time slot
        timeSlot = getNextAvailableSlot(professor, bookedSlots, preferredTimes);
      }

      // Mark the time slot as booked for the professor
      if (!bookedSlots[professor]) {
        bookedSlots[professor] = [];
      }
      bookedSlots[professor].push(timeSlot);

      return {
        ...c,
        timeSlot,
      };
    });

    dispatch({ type: "GENERATE_SCHEDULE", payload: generatedSchedule });
  };

  // Helper function to get the next available time slot
  const getNextAvailableSlot = (professor, bookedSlots, preferredTimes) => {
    for (let time of preferredTimes) {
      if (!bookedSlots[professor]?.includes(time)) {
        return time; // Return the next available time slot
      }
    }
    return "No available slots"; // Return message if no slots are available
  };

  return (
    <ScheduleContext.Provider value={{ ...state, addClass, generateSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

// Hook to use the ScheduleContext in other components
export const useScheduleContext = () => {
  return useContext(ScheduleContext);
};
