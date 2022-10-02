import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../Navbar/Nav";
import requests from "../Requests/Requests";
import Row from "../Row/Row";
import "./homeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests?.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests?.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests?.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests?.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests?.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests?.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={requests?.fetchFantasyMovies} />
    </div>
  );
}

export default HomeScreen;
