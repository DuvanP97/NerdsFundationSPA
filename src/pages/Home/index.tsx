import * as React from "react";
import Header from "../../components/Header/Header";
import SectionPerson from "../../components/SectionPerson";
import SectionPlanets from "../../components/SectionPlanets";
import BannerSearch from "../../components/BannerSearch";
import SectionShips from "../../components/SectionShips";



const Home = (): JSX.Element => {

  return (
    <React.Fragment>
      <Header/>
      <BannerSearch/>
      <SectionPerson/>
      <SectionPlanets/>
      <SectionShips/>
    </React.Fragment>
  );
}
export default Home;
