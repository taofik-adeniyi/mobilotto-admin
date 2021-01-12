import React from "react";
import { Link } from "react-router-dom";

export default function ClickHere({aka}) {
  const path = aka === 'winning' ? 'winning' : aka === 'games-played' ? 'games-played' : aka === 'Registration' ? 'registration' : 'deposit'   
  return (
    <Link to={path}>
      <div
        style={{ marginLeft: 35, marginBottom: 20, marginTop: 15, fontSize: 14, fontWeight: 'bold', color: 'blue' }}
        className="font-normal leading-normal mt-0 mb-10"
      >
        Click here for more details
      </div>
    </Link>
  );
}
