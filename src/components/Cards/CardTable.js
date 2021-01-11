import React from "react";
import PropTypes from "prop-types";

// components
import CardTableHead from "./CardTableHead";
import CardTableBody from "./CardTableBody";
import ClickHere from "components/ClickHere/ClickHere";

export default function CardTable({ color, title, showTh, showFullBody, aka }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                {(title === "" ? "" : title)}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="border-collapse border border-green-800 items-center w-full bg-transparent border-collapse">
            <CardTableHead color='light' showTh={showTh} />
            <CardTableBody showFullBody={showFullBody} aka={aka} />
          </table>
        </div>
        <ClickHere />
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
