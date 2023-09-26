import React from "react";
export default function Coaches({ coachesData }: { coachesData: any }) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://www.mancity.com/dist/images/half_body.png";
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8" id="Coaches_team">
        <div className="mx-auto max-w-2xl mb-4 lg:mx-0 cursor-default">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Coaches
          </h2>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-1">
          {coachesData.map((coach: any) => (
            <div
              className="card w-96 bg-base-100 shadow-xl mx-auto"
              key={coach.coach_name}
            >
              <div className="avatar mx-auto flex max-w-xs">
                <div className="w-24 rounded">
                  <img
                    src="https://www.mancity.com/meta/media/1jdgzaax/pep-guardiola.png?width=600"
                    onError={handleImageError}
                    alt="Player"
                  />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <button className="btn">
                  <h2 className="card-title">{coach.coach_name}</h2>

                  <img
                    src="https://tmssl.akamaized.net/images/flagge/tiny/157.png?lm=1520611569"
                    onError={handleImageError}
                    alt="Player"
                  />
                </button>

                <div className="stats shadow cursor-default">
                  <div className="stat">
                    <div className="stat-title">Josep Guardiola Sala</div>
                    <div className="stat-value"></div>
                    <div className="stat-desc">
                      Best Football Managers in the World
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <img
                  src="https://www.mancity.com/meta/media/2ucnom5q/icons-trophies-premierleague.svg"
                  onError={handleImageError}
                  alt="Player"
                />
              </div>
              <div className="stat-title">Premier League</div>
              <div className="stat-value text-[#6caddf]">5</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <img
                  src="https://www.mancity.com/meta/media/xdblbsee/icons-trophies-facup.svg"
                  onError={handleImageError}
                  alt="Player"
                />
              </div>
              <div className="stat-title">FA cup</div>
              <div className="stat-value text-[#6caddf]">2</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <img
                  src="https://www.mancity.com/meta/media/t1cos2wr/icons-trophies-leaguecup-1.svg"
                  onError={handleImageError}
                  alt="Player"
                />
              </div>
              <div className="stat-title">League Cup</div>
              <div className="stat-value text-[#6caddf]">4</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <img
                  src="https://www.mancity.com/meta/media/biopha0g/icons-trophies-communityshield.svg"
                  onError={handleImageError}
                  alt="Player"
                  className="h-[44px]"
                />
              </div>
              <div className="stat-title">Community Shield</div>
              <div className="stat-value text-[#6caddf]">2</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <img
                  src="https://www.mancity.com/meta/media/ihzdfuuq/icons-trophies-championsleague.svg"
                  onError={handleImageError}
                  alt="Player"
                  className="h-[44px]"
                />
              </div>
              <div className="stat-title">Champions League</div>
              <div className="stat-value text-[#6caddf]">1</div>
            </div>
          </div>
        </dl>
      </div>
    </>
  );
}
