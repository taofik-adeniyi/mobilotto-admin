import CardTable from "components/Cards/CardTable";
import React from "react";
export default function Registration({ color }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable
            title="Registration Summary"
            showTh="no"
            showFullBody={true}
            aka="Registration"
            showClickHere={false}
          />
        </div>
      </div>
    </>
  );
}
