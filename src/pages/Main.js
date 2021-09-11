import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Store from "../Store";
import fakeAuth from "fake-auth";

import Slideshow from "./Slideshow";
import AllActivities from "./AllActivities";
import NewActivities from "./NewActivities";
import YourActivities from "./YourActivities";
import ActivityView from "./ActivityView";
import EditBadge from "./EditBadge";
import CreateBadge from "./CreateBadge";
import ReviewActivity from "./ReviewActivity";
import Departments from "./Departments";
import EmployeeRanking from "./EmployeeRanking";
import LeaderBoardDepartment from "./LeaderBoardDepartment";
import LeaderBoardPractice from "./LeaderBoardPractice";
import Badges from "./Badges";
import TestPage from "./TestPage";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import EditCurrentCycle from "./EditCurrentCycle";
import AddNewCycle from "./AddNewCycle";
import ViewEmployee from "./ViewEmployee";

// Admin
import AddActivity from "./AddActivity";

const Main = () => {
  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <>
      <Store>
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/" component={Slideshow}></Route>
          <Route exact path="/AllActivities" component={AllActivities}></Route>
          <Route exact path="/NewActivities" component={NewActivities}></Route>
          <Route
            exact
            path="/YourActivities"
            component={YourActivities}
          ></Route>
          <Route
            exact
            path="/ActivityView/:activityId"
            component={ActivityView}
          ></Route>
          <Route exact path="/Departments" component={Departments}></Route>
          <Route
            exact
            path="/ReviewActivity"
            component={ReviewActivity}
          ></Route>
          <Route exact path="/AddActivity" component={AddActivity}></Route>
          <Route exact path="/EditBadge" component={EditBadge}></Route>
          <Route exact path="/CreateBadge" component={CreateBadge}></Route>
          <Route
            exact
            path="/LeaderBoardPractice"
            component={LeaderBoardPractice}
          ></Route>
          <Route
            exact
            path="/LeaderBoardDepartment"
            component={LeaderBoardDepartment}
          ></Route>
          <Route
            exact
            path="/EmployeeRanking"
            component={EmployeeRanking}
          ></Route>
          <Route exact path="/Badges" component={Badges}></Route>
          <Route exact path="/TestPage" component={TestPage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/EditCurrentCycle" component={EditCurrentCycle} />
          <Route exact path="/AddNewCycle" component={AddNewCycle} />
          <Route exact path="/ViewEmployee" component={ViewEmployee} />
          <PrivateRoute path="/AddActivity" component={AddActivity} />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Store>
    </>
  );
};

export default Main;
