CREATE DATABASE todo_db;

Create table todo(
    todo_id SERIAL PRIMARY KEY,
    description varchar(250)
);