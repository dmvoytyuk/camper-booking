import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b867eb3ce57325ac77165d.mockapi.io/api",
});

export const apiGetCampers = async () => {
  const response = await instance.get("/campers");
  return response.data;
};
