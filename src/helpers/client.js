import axios from "axios";
// const baseURL =
//   "http://pmo-backend-env.eba-vcvkcsgg.us-east-2.elasticbeanstalk.com/api";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2NWJmODU0LWNiYmUtNDM1OC05ZDcwLTYyNzIwNDIyYWQ4MCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzkxODQ5MTQsImV4cCI6MTgxNjk0NDkxNH0.rPKh_phKKO5OvgZ9oKzxiG_8J43VQJPzWtufUXFYI_M";

export const PMOClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});
