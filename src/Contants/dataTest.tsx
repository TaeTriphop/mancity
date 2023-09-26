import axios from "axios";

export interface interfacePlayer {
  player_key: number;
  player_id: string;
  player_image: string;
  player_name: string;
  player_number: string;
  player_country: string;
  player_type: string;
  player_age: string;
  player_match_played: string;
  player_goals: string;
  player_yellow_cards: string;
  player_red_cards: string;
  player_injured: string;
  player_substitute_out: string;
  player_substitutes_on_bench: string;
  player_assists: string;
  player_birthdate: string;
  player_is_captain: string;
  player_shots_total: string;
  player_goals_conceded: string;
  player_fouls_committed: string;
  player_tackles: string;
  player_blocks: string;
  player_crosses_total: string;
  player_interceptions: string;
  player_clearances: string;
  player_dispossesed: string;
  player_saves: string;
  player_inside_box_saves: string;
  player_duels_total: string;
  player_duels_won: string;
  player_dribble_attempts: string;
  player_dribble_succ: string;
  player_pen_comm: string;
  player_pen_won: string;
  player_pen_scored: string;
  player_pen_missed: string;
  player_passes: string;
  player_passes_accuracy: string;
  player_key_passes: string;
  player_woordworks: string;
  player_rating: string;
}

export interface interfaceCoach {
  coach_name: string;
  coach_country: string;
  coach_age: string;
}

export interface interfaceTeam {
  team_key: string;
  team_name: string;
  team_badge: string;
  players: interfacePlayer[];
  coaches: interfaceCoach[]; // เพิ่ม coaches ตรงนี้
}

// const player: interfaceTeam[] = [];



// function getPlayersByType(player_type: string): interfacePlayer[] {
//   const getPlayers: interfacePlayer[] = [];
//   // player.forEach((team) => {
//   //   getPlayers.push(
//   //     ...team.players.filter(
//   //       (player_filter) =>
//   //       player_filter.player_type.toLowerCase() === player_type.toLowerCase()
//   //     )
//   //   );
//   // });

//   return getPlayers;
// }


// function getCoaches(): interfaceCoach[] {
//   const coaches: interfaceCoach[] = [];
//   player.forEach((team) => {
//     team.coaches.forEach((coach) => {
//       coaches.push({
//         coach_name: coach.coach_name,
//         coach_country: coach.coach_country,
//         coach_age: coach.coach_age,
//       });
//     });
//   });

//   return coaches;
// }

// export {getPlayersByType, getCoaches };

// export const fetchTeamData = async () => {
//   try {
//     const response = await axios.get(
//       "https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=2f4380e6f3fcaafc24321cd9fb0cd82efcc01ff92dec37e4af4855521cab3096"
//     );

//     const teamData = response.data;
//     return teamData;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };
