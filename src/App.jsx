import { useState } from "react";
import Navbar from "./components/Navbar";
import FormSearch from "./components/FormSearch";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.scss";
import MainSection from "./components/MainSection/MainSection";
import DiscoverList from "./components/DiscoverList/DiscorverList";
import PopularList from "./components/PopularList/PopularList";
import UpcomingList from "./components/UpcomingList/UpcomingList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.Main}>
      <Navbar>
        <FormSearch setSearchValue={setSearchValue} />
      </Navbar>
      <Hero />
      <hr />
      <MainSection>
        <DiscoverList />
        <PopularList />
        <UpcomingList />
      </MainSection>
    </div>
  );
}

export default App;
