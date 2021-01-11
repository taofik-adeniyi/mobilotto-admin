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
      {/* <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Registration Summary' showTh='no' showFullBody={true} aka='Registration' />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Game Play Amount Summary (₦ Naira)' />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title={'Deposit Summary'} showTh='no' showFullBody={true} aka='Deposit' />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Winning Amount Summary (₦ Naira)' />
        </div>
      </div>
    </>
  );
}
