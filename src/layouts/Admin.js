import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Registration from "views/admin/Registration";
import Winning from "views/admin/Winning";
import GamesPlayed from "views/admin/GamesPlayed";
import Deposit from "views/admin/Deposit";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Analytics from "views/admin/Analytics";
import Finance from "views/admin/Finance";
import PlayerWinner from "views/admin/PlayerWinner";
import PlayerLog from "views/admin/PlayerLog";
import Syndicate from "views/admin/Syndicate";
import PlayersRegister from "views/admin/PlayersRegister";
import PayMaster from "views/admin/PayMaster";
import Lottery from "views/admin/Lottery";
import ScratchCards from "views/admin/ScratchCards";
import Income from "views/admin/Income";
import PlayerCashout from "views/admin/PlayerCashout";
import PlayerStatistic from "views/admin/PlayerStatistic";
import Epayment from "views/admin/Epayment";
import Transaction from "views/admin/Transaction";
import Gender from "views/admin/Gender";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/registration" exact component={Registration} />
            <Route path="/admin/deposit" exact component={Deposit} />
            <Route path="/admin/analytics" exact component={Analytics} />
            <Route path="/admin/finance" exact component={Finance} />
            <Route path="/admin/play-winners" exact component={PlayerWinner} />
            <Route path="/admin/player-logs" exact component={PlayerLog} />
            <Route path="/admin/syndicate" exact component={Syndicate} />
            <Route path="/admin/player-register" exact component={PlayersRegister} />
            <Route path="/admin/winning" exact component={Winning} />
            <Route path="/admin/paymaster" exact component={PayMaster} />
            <Route path="/admin/lottery" exact component={Lottery} />
            <Route path="/admin/scratch-cards" exact component={ScratchCards} />
            <Route path="/admin/gender" exact component={Gender} />
            <Route path="/admin/games-played" exact component={GamesPlayed} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/income" exact component={Income} />
            <Route path="/admin/player-cashout" exact component={PlayerCashout} />
            <Route path="/admin/player-statistics" exact component={PlayerStatistic} />
            <Route path="/admin/e-payments" exact component={Epayment} />
            <Route path="/admin/transactions" exact component={Transaction} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
