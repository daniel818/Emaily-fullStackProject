/**
 * Created by Daniel on 03/12/2017.
 */
/**
 * Created by Daniel on 27/11/2017.
 */
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
