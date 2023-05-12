import * as React from "react";
import Header from "../../components/Header/Header";
import SectionPerson from "../../components/SectionPerson";
import SectionPlanets from "../../components/SectionPlanets";
import SectionShips from "../../components/SectionShips";



const Home = (): JSX.Element => {
  

  return (
    <React.Fragment>
      <Header/>
      <SectionPerson/>
      <SectionPlanets/>
      <SectionShips/>
    </React.Fragment>
  );
}
export default Home;
