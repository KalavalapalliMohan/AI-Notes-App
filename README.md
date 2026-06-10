# AI Notes App

## Project Overview

AI Notes App is a full-stack note management application built using Laravel 12 and React. The application allows users to create, update, delete, search, and manage notes through RESTful APIs. It also includes AI-powered note summarization and API documentation using Swagger/OpenAPI.

---

## Features

### Backend Features

* RESTful CRUD APIs
* Route Model Binding
* Request Validation
* Pagination
* Search Functionality
* AI Summary Generation
* Swagger/OpenAPI Documentation
* MySQL Database Integration

### Frontend Features

* Notes Listing
* Create Note
* Edit Note
* View Note
* Delete Note
* Search Notes
* Pagination
* AI Summary Display

---

## Tech Stack

### Backend

* PHP 8.2
* Laravel 12
* MySQL
* L5 Swagger

### Frontend

* React
* Vite
* Axios
* React Router DOM

### AI Tools

* ChatGPT
* GitHub Copilot
* Cursor AI

---

## Project Structure

Backend

```text
ai-notes-app/
├── app/
├── config/
├── database/
├── routes/
├── tests/
├── public/
├── composer.json
├── README.md
```

Frontend

```text
ai-notes-frontend/
├── src/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
```

---

## Database Schema

### Notes Table

| Column     | Type            |
| ---------- | --------------- |
| id         | bigint          |
| title      | string          |
| content    | text            |
| summary    | text (nullable) |
| created_at | timestamp       |
| updated_at | timestamp       |

---

## API Endpoints

### Notes

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/notes      |
| GET    | /api/notes/{id} |
| POST   | /api/notes      |
| PUT    | /api/notes/{id} |
| DELETE | /api/notes/{id} |

### Search

| Method | Endpoint                        |
| ------ | ------------------------------- |
| GET    | /api/notes-search?query=keyword |

### AI Summary

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | /api/notes/{id}/summary |

---

## Installation

### Backend Setup

```bash
git clone <repository-url>

cd ai-notes-app

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd ai-notes-frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Swagger Documentation

Generate Documentation

```bash
php artisan l5-swagger:generate
```

Open Swagger UI

```text
http://127.0.0.1:8000/api/documentation
```

---

## AI Tools Used

### ChatGPT

Used for:

* Laravel CRUD API generation
* React component generation
* Swagger/OpenAPI annotations
* API documentation

### GitHub Copilot

Used for:

* Code completion
* Refactoring
* Boilerplate generation

### Cursor AI

Used for:

* Code suggestions
* Debugging assistance
* Project scaffolding

---

## Prompts Used

### Laravel

* Generate Laravel CRUD APIs
* Generate Laravel Request Validation
* Generate Laravel Swagger Annotations

### React

* Generate React Notes UI
* Generate Pagination Component
* Generate Search Component

### API Documentation

* Generate OpenAPI Documentation
* Generate Swagger Annotations

---

## Future Enhancements

* OpenAI Embeddings
* Semantic Search
* Authentication
* User Profiles
* Categories & Tags
* File Attachments

---

## Author

Mohan

Full Stack Developer

PHP | Laravel | React | MySQL



Setup Instructions

Backend

git clone https://github.com/KalavalapalliMohan/AI-Notes-App.git

cd AI-Notes-App

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve


Frontend

cd ai-notes-frontend

npm install

npm run dev


screenshots/
├── Postman
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── 5.png
    ├── 6.png
    ├── 7.png
├── Swagger
    ├── swagger-1.png
├── Demo-video
    ├── api-notes-demo.mp4
