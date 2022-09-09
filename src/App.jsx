import { useState } from "react";
import Navbar from "./components/Navbar";
import FormSearch from "./components/FormSearch";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.App}>
      <Navbar>
        <FormSearch setSearchValue={setSearchValue} />
      </Navbar>
      <hr />
      <Hero />
      <hr />
    </div>
  );
}

export default App;
