import { useRef } from "react";
import Navbar from "./components/Navbar";
import FormSearch from "./components/FormSearch";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/MainSection";
import DiscoverList from "./components/DiscoverList";
import PopularList from "./components/PopularList";
import UpcomingList from "./components/UpcomingList";
import styles from "./App.module.scss";

export default function App() {
  const discoverRef = useRef(null);
  const popularRef = useRef(null);
  const upcomingRef = useRef(null);

  return (
    <div className={styles.Main}>
      <Navbar
        discoverRef={discoverRef}
        popularRef={popularRef}
        upcomingRef={upcomingRef}
      >
        <FormSearch />
      </Navbar>
      <Hero />
      <hr />
      <MainSection>
        <DiscoverList discoverRef={discoverRef} />
        <PopularList popularRef={popularRef} />
        <UpcomingList upcomingRef={upcomingRef} />
      </MainSection>
    </div>
  );
}
