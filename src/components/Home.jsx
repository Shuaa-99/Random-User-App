import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://randomuser.me/api/";

  const getRandomUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomUser(); 
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Random User</h2>
      {loading ? (
        <p>⏳ Loading...</p>
      ) : user ? (
        <User user={user} />
      ) : (
        <p>NO user </p>
      )}
      <button
        onClick={getRandomUser}
        style={{ padding: "10px 20px", marginTop: "20px" }}
        disabled={loading}
      >
        {loading ? "Loading..." : "random user"}
      </button>
    </div>
  );
};

export default Home;
