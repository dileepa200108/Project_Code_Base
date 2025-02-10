import api from "../axiosInstance";

export const fetchHomeMessage = async () => {
  try {
    const response = await api.get("/test");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching home message:", error);
    return "Error fetching data";
  }
};
