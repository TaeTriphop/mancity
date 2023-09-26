import React from "react";

export default function Midfielders({ midfieldersPlayers }: { midfieldersPlayers: any}) {

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://www.mancity.com/dist/images/half_body.png";
  };

  const filteredMidfielders = midfieldersPlayers.filter(
    (midfielders: any) => midfielders.player_type.toLowerCase() === "midfielders"
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8" id="Midfielders_player">
        <div className="mx-auto max-w-2xl mb-4 lg:mx-0 cursor-default">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Midfielders
          </h2>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {filteredMidfielders.map((midfielder: any) => (
            <div
              className="card w-96 bg-base-100 shadow-xl mx-auto"
              key={midfielder.player_image}
            >
              <div className="avatar mx-auto flex max-w-xs">
                <div className="w-24 rounded">
                  <img
                    src={midfielder.player_image}
                    onError={handleImageError}
                    alt="Player"
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <button className="btn">
                  <h2 className="card-title">{midfielder.player_name}</h2>
                  <div className="badge badge bg-[#6caddf]">
                    {midfielder.player_number}
                  </div>
                </button>

                <div className="stats shadow cursor-default">
                  <div className="stat">
                    <div className="stat-title">Player Rating</div>
                    <div className="stat-value">
                      {" "}
                      {midfielder.player_rating
                        ? midfielder.player_rating
                        : "-"}
                    </div>
                    <div className="stat-desc">
                      Football player ratings are based on a number of factors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
