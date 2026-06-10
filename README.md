# AI Notes App

AI Notes App is a full-stack note management application built with Laravel 12 and React. It allows users to create, update, delete, search, and manage notes through a RESTful API and modern frontend interface.

## Features

* Create Notes
* View Notes
* Update Notes
* Delete Notes
* Search Notes
* Pagination
* Route Model Binding
* Form Validation
* Swagger API Documentation
* AI Summary Feature
* React Frontend

## Tech Stack

### Backend

* PHP 8.2
* Laravel 12
* MySQL
* REST API
* Swagger (L5-Swagger)

### Frontend

* React
* Vite
* Axios
* React Router DOM

## Project Structure

ai-notes-app/

* app/
* routes/
* database/
* tests/
* config/
* resources/
* public/

ai-notes-frontend/

* src/pages
* src/services
* src/App.jsx
* src/main.jsx

## API Endpoints

### Notes

GET /api/notes

GET /api/notes/{id}

POST /api/notes

PUT /api/notes/{id}

DELETE /api/notes/{id}

### Search

GET /api/notes-search?query=keyword

### Summary

POST /api/notes/{id}/summary

## Installation

### Backend

```bash
git clone <repository-url>

cd ai-notes-app

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

### Frontend

```bash
cd ai-notes-frontend

npm install

npm run dev
```

## Swagger Documentation

Generate documentation:

```bash
php artisan l5-swagger:generate
```

Open:

http://127.0.0.1:8000/api/documentation

## Future Improvements

* OpenAI Embeddings
* Semantic Search
* Authentication
* User Management
* Note Categories

## Author

Mohan

Full Stack Developer (PHP | Laravel | React)
