import React from 'react'

// Components
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function CardTableBody({color, showFullBody, aka}) {
    return (
        <>
            {!showFullBody ? 
            <tbody>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Daily Million
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                </div> */}0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div> */}
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Daily Million
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                </div> */}0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div> */}
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Daily Million
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                </div> */}0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div> */}
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Daily Million
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                </div> */}0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div> */}
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Daily Million
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png")}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                  ></img>
                </div> */}0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {/* <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div> */}
                0.00
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
          </tbody>
          :
          <tbody>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Today's {aka == 'Registration' ? 'Registration' : 'Deposit' } in the Past 7 days
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Today's {aka == 'Registration' ? 'Registration' : 'Deposit' } in the Past 7 days
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Today's {aka == 'Registration' ? 'Registration' : 'Deposit' } in the Past 7 days
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Today's {aka == 'Registration' ? 'Registration' : 'Deposit' } in the Past 7 days
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                {/* <img
                  src={require("assets/img/bootstrap.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "} */}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-gray-700" : "text-white")
                  }
                >
                  Today's {aka == 'Registration' ? 'Registration' : 'Deposit' } in the Past 7 days
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                {/* <TableDropdown /> */}
                0.00
              </td>
            </tr>
            </tbody>
          }  
        </>
    )
}
