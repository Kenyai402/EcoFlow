# EcoFlow
EcoFlow is an environmental sustainability web application aimed at optimizing waste management through route optimization, user engagement, and reward systems. The app helps waste management authorities track waste collection, optimize routes, and engage communities to promote responsible waste disposal.


## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

=======
>>>>>>> 52d5f43808c00de929bae70dcfb1912e7a6f2f11

## Overview
**EcoFlow** is a web application designed for waste management and environmental sustainability. It allows users to track waste collection schedules, view statistics, and engage with the community to promote responsible waste disposal. The app aims to optimize waste collection routes and enhance user interaction through gamification features, including token rewards and community challenges.



## Features
- **User-Friendly Interface**: An interactive and adaptive design with a greenish background that fades into lighter shades.
- **Token System**: Users can earn and manage tokens through responsible waste disposal actions.
- **Dashboard**: View waste tracking statistics, user profiles, and collection schedules.
- **Community Engagement**: Track waste disposal and receive tips for proper waste segregation.
- **Responsive Design**: The app is designed to be fully functional across various devices.
- **Animation Effects**: Smooth transitions and hover effects enhance user experience, utilizing libraries like Framer Motion.



## Project Structure
The project is organized into two main parts: a **React frontend** and a **Django backend**.

EcoFlow/ │ ├── waste_management/ # React frontend │ ├── src/ │ ├── public/ │ ├── package.json │ └── ... │ ├── backend/ # Django backend │ ├── manage.py │ ├── EcoFlowBackend/ # Main Django project folder │ ├── app/ # Django app for waste management logic │ └── ... │ ├── README.md # Overall project README └── ... other files




## Features

### Frontend (React)

- **User Interface:** A clean, responsive interface with interactive elements.
- **Waste Tracking:** Users can track the current status of waste bins and collection schedules.
- **Statistics:** Visual representations of waste collection data.
- **User Profiles:** Personal profiles where users can see their waste management contributions.
- **Animations:** Smooth transitions and animations using Framer Motion.
- **Community Engagement:** Users earn tokens for responsible waste disposal and can track their progress.


### Backend (Django)

- **Route Optimization:** Using Python libraries like OR-Tools for efficient waste collection routes.
- **API:** REST API to handle data requests and manage waste tracking, user profiles, and stats.
- **Database:** MySQL to store waste bin statuses, user data, and collection schedules.
- **Admin Panel:** Manage waste bin data, users, and other backend logic through Django's admin interface.


### Optional Features

- **IoT Integration:** Use sensors to monitor bin fill levels and trigger collection alerts.
- **Community Rewards:** A system where users earn tokens for correct waste segregation and disposal.


## Technologies Used

### Frontend

- **React.js** for building the user interface.
- **Framer Motion** for animations.
- **SCSS** for styling the components.
- **JavaScript** for interactive features.

### Backend

- **Django** for server-side logic and API management.
- **MySQL** for the database.
- **OR-Tools/Geopy** for route optimization.


## Setup and Installation

### Frontend (React)

1. Navigate to the `waste_management` directory:
    ```bash
    cd waste_management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

### Backend (Django)

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv env
    ```

3. Activate the virtual environment:

    On Windows:
    ```bash
    env\Scripts\activate
    ```

    On macOS/Linux:
    ```bash
    source env/bin/activate
    ```

4. Install Django and other dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Run migrations to set up the database:
    ```bash
    python manage.py migrate
    ```

6. Start the Django development server:
    ```bash
    python manage.py runserver
    ```


### Database (MySQL)

1. Install MySQL and create a database for the project.
2. Update your Django `settings.py` file with the MySQL database configuration.
3. Apply the migrations as mentioned above.


## Usage

- Users can visit the **frontend** web app to check waste collection schedules, track bin statuses, and manage their profiles.
- Waste management authorities can log into the **backend** (admin panel) to view and manage bin data and optimize collection routes.


## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.


## License

This project is licensed under the MIT License.
