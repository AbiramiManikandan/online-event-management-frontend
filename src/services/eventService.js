import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const fetchEventDetails = async (id) => {
  const response = await axios.get(`${API_URL}/events/${id}`);
  return response.data;
};
