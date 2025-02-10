import { useEffect, useState } from "react";
import { fetchHomeMessage } from "../api/services/testService";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const loadMessage = async () => {
      const data = await fetchHomeMessage();
      setMessage(data);
    };

    loadMessage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p>{message}</p>
    </div>
  );
};

export default Home;
