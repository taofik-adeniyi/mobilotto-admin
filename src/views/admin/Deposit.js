import CardTable from "components/Cards/CardTable";
import React from "react";
export default function Deposit({ color }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable
            title="Deposit Summary"
            showTh="no"
            showFullBody={true}
            aka="Deposit"
            showClickHere={false}
          />
        </div>
      </div>
    </>
  );
}
