# Travel Log - Frontend

Travel Log is a web application that allows users to document their travels by creating trips, log entries, and associating photos and comments with their trips.

## Deployment Link
<a href='https://your-frontend-deployment-link.com/'>https://your-frontend-deployment-link.com/</a>

## Screenshots
<img src="https://your-screenshot-link-1.png">
<img src="https://your-screenshot-link-2.png">

## Technologies
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Features

- User authentication (sign up, sign in, sign out)
- View, add, edit, and delete trips
- View, add, edit, and delete log entries
- Future implementation: View, add, edit, and delete photos and comments


## Folder Structure

```plaintext
frontend-travel-log/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CommentList/
│   │   ├── Dashboard/
│   │   ├── Landing/
│   │   ├── LogEntriesList/
│   │   └── LogEntryDetails/
│   │   └── LogEntryForm/
│   │   └── NavBar/
│   │   └── SigninForm/
│   │   └── SignupForm/
│   │   └── TripDetails/
│   │   └── TripForm/
│   │   └── TripsList/
│   ├── services/
│   │   ├── authService.js
│   │   ├── tripService.js
│   │   ├── logEntryService.js
│   │   └── photoService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
└── vite.config.js
