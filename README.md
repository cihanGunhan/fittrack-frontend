# FitTrack Frontend

Angular frontend for the FitTrack personal fitness tracking application.

Built with Angular 19, Bootstrap 5, and Bootswatch Lux theme.

## Requirements

- Node.js 18+
- Angular CLI
- FitTrack API running on port 8081

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Application runs on `http://localhost:4200`

## Pages

- **Login / Register** — JWT authentication
- **Dashboard** — manage workout plans
- **Workout Log** — log exercise sessions with sets, reps and weight
- **Personal Records** — track personal bests per exercise

## Backend

This frontend requires the FitTrack API. See [fittrack-api](https://github.com/cihanGunhan/fittrack-api) for setup instructions.

## Tech Stack

- Angular 19
- Bootstrap 5
- Bootswatch Lux
- JWT authentication via HttpInterceptor
- AuthGuard for protected routes
