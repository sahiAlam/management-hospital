export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const AUTH_BASE_URL = "https://betacdn.coachingquest.be/api";
export const DOCTORS_API_BASE_URL =
  "https://api.jsonbin.io/v3/b/66658046acd3cb34a854eb3c";

// Auth Apis Endpoints
export const AUTH_ENDPOINTS = {
  login: "/auth/local",
  register: "/auth/local/register",
};

// User Apis Endpoints
export const USERS_ENDPOINT = {
  USERS: `${BASE_URL}/users`,
  USER_BY_ID: (userId: number) => `${BASE_URL}/users/${userId}`,
};
