import React, { useState, useEffect } from "react";
import Forwards from "../Positions/Forwards";
import Midfielders from "../Positions/Midfielders";
import Defenders from "../Positions/Defenders";
import Goalkeepers from "../Positions/Goalkeepers";
import Coaches from "../Positions/Coaches";
import { interfaceTeam } from "../../Contants/dataTest";

export default function Players({ teamData }: { teamData: interfaceTeam | null }) {
  if (!teamData) return null;

  return (
    <>
       <Forwards forwardsPlayers={teamData.players} />
      <Midfielders midfieldersPlayers={teamData.players} />
      <Defenders defendersPlayers={teamData.players} />
      <Goalkeepers goalkeepersPlayers={teamData.players} />
      <Coaches coachesData={teamData.coaches} />
    </>
  );
}
