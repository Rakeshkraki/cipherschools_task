import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import FollowerList from "./components/FollowerList/FollowerList";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profilePic: "https://via.placeholder.com/200",
    followers: [
      { name: "Jane Doe", profilePic: "https://via.placeholder.com/50" },
      { name: "Bob Smith", profilePic: "https://via.placeholder.com/50" },
      { name: "Alice Johnson", profilePic: "https://via.placeholder.com/50" },
    ],
  });

  const handleProfileUpdate = (newData) => {
    setUserData(newData);
  };

  return (
    <Router>
      {/* <Routes /> */}
      <div className="app">
        <Header />
        <main>
          <ProfileInfo
            userData={userData}
            handleProfileUpdate={handleProfileUpdate}
          />
          <FollowerList followers={userData.followers} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
