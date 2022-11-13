import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjkxMjAyYjFkYjM3ODI1NjMzNjNhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODM0NDE4MSwiZXhwIjoxNjY4NjAzMzgxfQ.C5lyplodJKfS-Vgp8QkWVqViB8jYBT5t1OpUnSVeySg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
