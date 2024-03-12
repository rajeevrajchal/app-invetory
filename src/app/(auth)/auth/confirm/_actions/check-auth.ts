import axios from "axios";

export const checkAuth = (token: string) =>
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/who-i-am`, {
    headers: {
      Authorization: token !== null ? `Bearer ${token}` : "",
    },
  });
