import { Toolbar } from "@mui/material";

//files import
import AboutPage from "./about";
import Footer from "./footer";
import HomePage from "./home";
import SpeakersPage from "./speakers";
import SponsorsPage from "./sponsors";
import TicketsPage from "./tickets";
import WorkShoppage from "./workshop";


function Index({ data }) {
  return (
    <>
      <div id="home">
        <Toolbar></Toolbar>
        <HomePage data={data} />
      </div>

      <div id='about'>
        <AboutPage data={data} />
      </div>

      <div id='tickets'>
        <TicketsPage data={data} />
      </div>

      <div id='speakers'>
        <SpeakersPage data={data} />
      </div>

      <div id='workshop'>
        <WorkShoppage data={data} />
      </div>

      <div id='sponsors'>
        <SponsorsPage data={data} />
      </div>

      <Footer data={data} />
    </>
  );

}

export default Index;