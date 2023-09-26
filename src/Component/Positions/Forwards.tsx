import React from "react";

export default function Forwards({
  forwardsPlayers,
}: {
  forwardsPlayers: any;
}) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://www.mancity.com/dist/images/half_body.png";
  };

  const filteredForwards = forwardsPlayers.filter(
    (forwards: any) => forwards.player_type.toLowerCase() === "forwards"
  );
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8" id="Forwards_player">
        <div className="mx-auto max-w-2xl mb-4 lg:mx-0 cursor-default">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Forwards
          </h2>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {filteredForwards?.map((forward: any) => (
            <div
              className="card w-96 bg-base-100 shadow-xl mx-auto"
              key={forward.player_image}
            >
              <div className="avatar mx-auto flex max-w-xs">
                <div className="w-24 rounded">
                  <img
                    src={forward.player_image}
                    onError={handleImageError}
                    alt="Player"
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <button className="btn">
                  <h2 className="card-title">{forward.player_name}</h2>
                  <div className="badge bg-[#6caddf]">
                    {forward.player_number}
                  </div>
                </button>

                <div className="stats shadow cursor-default">
                  <div className="stat">
                    <div className="stat-title">Player Rating</div>
                    <div className="stat-value">
                      {" "}
                      {forward.player_rating ? forward.player_rating : "-"}
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
