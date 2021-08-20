import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { Redirect, Route, Switch } from "react-router-dom";
import { default as ContentStyles } from "./Content.module.scss";
import { StoreContext } from "../../store/StoreProvider";
import Courses from "../Courses/Courses";
// import UserCourses from "../UserCourses/UserCourses";
// import AdminPanel from "../AdminPanel/AdminPanel";

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accesLevel === ADMIN_TYPE;

  return (
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={() => <Courses />} />
        {isUserLogged && <Route exact path="/my-courses" render={() => <p>moje kursy</p>} />}
        {isAdmin && <Route exact path="/my-courses" render={() => <p>zarzadzanie kursami</p>} />}
        <Redirect to="/" />

      </Switch>
    </main>
  );
};

export default Content;