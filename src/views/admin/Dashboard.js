import React from "react";

// components
import CardTable from "components/Cards/CardTable.js";
// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Registration Summary' showTh='no' showFullBody={true} aka='Registration' showClickHere={true} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Game Play Amount Summary (₦ Naira)' aka='games-played' showClickHere={true}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title={'Deposit Summary'} showTh='no' showFullBody={true} aka='Deposit' showClickHere={true}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Winning Amount Summary (₦ Naira)' aka='winning' showClickHere={true}/>
        </div>
      </div>
    </>
  );
}
