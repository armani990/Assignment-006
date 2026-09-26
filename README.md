# FITLOG

FITLOG is a simple workout library web app where users can browse different exercises, check workout details, add exercises to their daily plan, and save workouts for later.

## Live Site

Add your deployed website link here.

## Features

* Browse workout exercises from the workout library
* View detailed information about each workout
* See workout duration, calories, rating, equipment, sets and reps
* Add workouts to Today's Plan
* Save workouts for later
* Remove workouts from the plan or saved list
* Mark workouts as Done
* Plan and Saved counters update automatically
* Workout sorting by Duration, Calories, Rating and Name
* Data is saved in localStorage, so the plan stays after refreshing the page
* Responsive design for desktop, tablet and mobile devices
* Toast messages for different actions

## Pages

### Home

Shows the workout library with all available exercises.

### Workout Details

Shows complete information about a selected workout, including instructions and workout stats.

### My Plan

Shows Today's Plan and Saved workouts. Users can sort workouts, mark them as done and remove them when needed.

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* REST API
* localStorage

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   └── my-plan/
│       └── page.tsx
│
├── components/
│   ├── homepage/
│   │   ├── Banner.tsx
│   │   └── Exercise.tsx
│   │
│   ├── shared/
│   │   ├── ExerciseCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── ExerciseDetails/
│       ├── ExerciseDetails.tsx
│       ├── AddButton.tsx
│       └── SaveButton.tsx
│
├── context/
│   └── CardContext.tsx
│
└── types/
    └── exercise.type.ts
```

## How It Works

The workout data comes from an API and is displayed in the workout library. When a user adds a workout to the plan or saves it, the data is managed through React Context.

The plan, saved workouts and completed workouts are also stored in localStorage. Because of this, the data does not disappear when the page is refreshed.

The project uses dynamic routes for workout details, so each workout can be opened from its own URL.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open the project in the browser at:

```text
http://localhost:3000
```

## Build

To create a production build:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

## Author

Developed as part of a Programming Hero assignment.
