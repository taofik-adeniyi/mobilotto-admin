import React from "react";
import CardTable from 'components/Cards/CardTable'

export default function GamesPlayed() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full mb-12 px-4">
        <CardTable
          title="Game Play Amount Summary (₦ Naira)"
          aka="games-played"
          showClickHere={true}
        />
      </div>
    </div>
  );
}
