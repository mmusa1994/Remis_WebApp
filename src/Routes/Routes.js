import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../containers/Home/Home";
import MailForm from "../containers/MailForm/MailForm";
import AboutUs from "../containers/AboutUs/AboutUs";
import VehicleTechnicalInspection from "../containers/Services/VehicleTehnicalInspection/VehicleTechnicalInspection";
import Tachographs from "../containers/Services/Tachographs/Tachographs";
import Registration from "../containers/Services/Registration/Registration";
import Ownership from "../containers/Services/Ownership/Ownership";
import Homologation from "../containers/Services/Homologation/Homologation";
import EngineNumber from "../containers/Services/EngineNumber/EngineNumber";
import Certification from "../containers/Services/Certification/Certification";
import Branches from "../containers/Branches/Branches";
import News from "../containers/News/News";
import Contacts from "../containers/Contacts/Contacts";

import CarVisual from "../containers/CarVisual/CarVisual";
import InspectionData from "../containers/InspectionData/InspectionData";
import Logout from "../containers/Auth/Logout/Logout";

const Routes = (props) => {
  const Auth = React.lazy(() => {
    return import("../containers/Auth/Auth");
  });

  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/auth" render={(props) => <Auth {...props} />} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/news" component={News} />
        <Route exact path="/data" component={InspectionData} />
        <Route exact path="/cardata" component={CarVisual} />
        <Route exact path="/logout" component={Logout} />
        <Route
          exact
          path="/vehtechinsp"
          component={VehicleTechnicalInspection}
        />
        <Route exact path="/tachographs" component={Tachographs} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/ownership" component={Ownership} />
        <Route exact path="/homologation" component={Homologation} />
        <Route exact path="/eniginenumber" component={EngineNumber} />
        <Route exact path="/certification" component={Certification} />
        <Route exact path="/branches" component={Branches} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/mail" component={MailForm} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Routes);
