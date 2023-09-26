import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { interfaceTeam } from "./Contants/dataTest";
import Header from "./Component/Header/Header";
import Mancity from "./Component/Main/Mancity";
import Players from "./Component/Main/Players";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Contexts/ScrollToTop";
function App() {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const response = await axios.get(
          "https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=2f4380e6f3fcaafc24321cd9fb0cd82efcc01ff92dec37e4af4855521cab3096"
        );

        const playerData = response.data;
        const filteredTeam = playerData.filter(
          (team: interfaceTeam) => team.team_key === "80"
        );

        if (filteredTeam.length > 0) {
          const team = filteredTeam[0];
          setTeamData(team);
        } else {
          console.error("Team not found");
        }
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    fetchTeamData();
  }, []);

  return (
    <>
      <Header />
      <Mancity />
      <Players teamData={teamData} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
