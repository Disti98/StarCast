import Navbar from "./components/Navbar";
import FormSearch from "./components/FormSearch";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.App}>
      <Navbar>
        <FormSearch setSearchValue={setSearchValue} />
      </Navbar>
      <hr />
    </div>
  );
}

export default App;
