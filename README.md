# Automated Class Schedule Generator [live](https://schedulegene.netlify.app/)
  A React-based application that allows users to automatically generate and manage class schedules. The app provides tools for users to input scheduling parameters, generate conflict-free schedules, and manually      customize them if necessary. It also supports persistent schedule storage using local storage, ensuring that data remains available even after page reloads.

## Features
  1. 🔄 Automated Schedule Generation
      * Users can input classes with details like subject, required semester hours, professor name, and preferred time slots.
      * The app ensures that there are no scheduling conflicts by checking professor availability and optimizing time slots for each class.
      * Users can generate schedules either for individual classes or in bulk for multiple classes.
  2. ✏️ Schedule Customization and Manual Overrides
      * Users can manually override the auto-generated schedule to make changes.
      * The system highlights potential conflicts such as professor double-booking or unavailable rooms.
      * Any modifications are validated against the original parameters to ensure compliance with scheduling rules.
  3. ⚠️ Conflict Resolution
      * Automatically detects scheduling conflicts (e.g., a professor booked for two classes at the same time).
      * Provides users with options to manually resolve conflicts or let the system suggest alternative schedules.
4. Student View (Optional)
      * A simple, read-only view for students to access finalized class schedules.
        
## Technologies Used

  * React: For the user interface and state management.
  * Tailwind CSS: For responsive styling.
  * Context API + useReducer: To manage state across components, allowing classes and schedules to be shared across the app.
  * LocalStorage: To persist the schedule data across page reloads.

## Getting Started

  ## Prerequisites
  * Node.js (version 14.x or higher)
  * npm or yarn

## Installation
 1. Clone this repository:
    
        git clone https://github.com/your-username/automated-schedule-generator.git
        cd automated-schedule-generator
    
  2. Install dependencies:

          npm install
          # or
          yarn install
3. Start the development server:

        npm start
        # or
        yarn start
   
4. Open your browser and navigate to http://localhost:3000 to see the application.


## Usage
  1. Add Classes: Fill out the form to add details for each class, including the subject name, required semester hours, professor name, and preferred time.
  2. Generate Schedule: Once you've added classes, click the "Generate Schedule" button to create an optimized class schedule.
  3. View & Edit Schedule: After generating the schedule, you can view the schedule and make manual adjustments if needed. The system will check for conflicts and offer suggestions.
  4. Persistent Data: The app automatically saves the generated schedule to local storage, allowing the data to persist across page reloads.
## UI Image
![Screenshot (23)](https://github.com/user-attachments/assets/fd8e8373-243c-4fa2-a040-47f1ffbf11b7)
