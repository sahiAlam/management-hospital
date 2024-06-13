

# Doctor Appointment Scheduling Application (CareConsult)
### Check it out: https://careconsult.netlify.app/

## Overview

This doctor appointment scheduling application, built with the MERN stack (MongoDB, Express.js, React.js/Next.js, and Node.js), allows patients to conveniently book 30-minute appointments with doctors of their choice. Leveraging Material-UI (MUI), a comprehensive React component library, the application offers a polished and intuitive user experience (UX) with the following key features :


- **User Authentication:** Secure login and signup functionalities for both patients and doctors.
- **Doctor Selection:** Patients can browse and choose doctors based on their preferences.
- **Appointment Scheduling:** A user-friendly interface allows patients to select a 30-minute time slot within a doctor's available schedule.
- **Confirmation Email:** Patients receive email confirmations upon successful appointment booking through the Calendar tool used.
- **Admin Dashboard:** An admin dashboard can be implemented to manage doctors, appointments, and login and logout (consider for future development).
- **Mock API:** Leveraging  JSONBin.io, a mock API for simulated doctor data for development and demo purposes.

## Technologies Used 

- **Frontend:** Next.js (for a dynamic and responsive user interface and managing states Redux Toolkit and Redux Saga for asynchronous operation handling).
- **Backend:**
    - Express.js (for robust API development)
    - MongoDB (for flexible data storage and retrieval)
    - Node.js (for server-side execution)
- **Authentication:** (Our chosen authentication strategy, e.g., JWT as well as Formik for performing Client-side Validation)


## Demo/ Walkthrough

1. Access the application in your browser at `http://localhost:3000` (or your chosen port).
2. Sign up for a new patient account or log in if you already have one.
3. Explore the list of available doctors.
4. Select a doctor and view the Doctor Details.
5.Then you can choose a convenient 30-minute time slot from their availability in the Calendar View.
6. Finally Schedule your appointment booking.
7. Check your inbox for a confirmation email containing appointment details like event date/time etc.



## Future Enhancements

**Admin Dashboard for Doctors:** Integrate a separate admin dashboard where doctors can log in and manage their profiles, including:

* Adding their own data (name, specialization, availability, etc.)
* Updating their information
* Managing their appointments (to be implemented)

**Customizing the Calendly Dashboard (Optional):** Provide booking management for a particular end user by allowing them to view and customize their own events as well as cancel them within the application.

**Searching and Filtering**: Implement advanced search and filtering capabilities for doctors based on:

* Location
* Specialization

**Doctor Recommendations:** Provide a recommendation system that suggests similar doctors to users after they view a particular doctor's details. This could be based on factors like:

* Specialization
* Location
* User ratings (to be implemented)




