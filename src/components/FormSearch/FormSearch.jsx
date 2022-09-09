import { useState, useRef, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import styles from "./index.module.scss";

export default function FormSearch({ setSearchValue }) {
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    isInputActive
      ? setSearchValue(inputValue) &&
        setInputValue("") &&
        setIsInputActive(false)
      : setIsInputActive(true);
  };

  const handelOnClick = () => isInputActive && setInputValue("");

  const handleClose = () => {
    setIsInputActive(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [isInputActive]);

  const handleOnChange = (e) => setInputValue(e.target.value);

  return (
    <form className={styles.FormMain} onSubmit={(e) => handleOnSubmit(e)}>
      <input
        ref={inputRef}
        className={`${styles.input} ${isInputActive && styles.active}`}
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
      />
      <button className={styles.button} onClick={() => handelOnClick()}>
        {isInputActive ? <AiOutlineCloseCircle /> : <AiOutlineSearch />}
      </button>
      {isInputActive && (
        <span className={styles.close_input} onClick={() => handleClose()}>
          <AiOutlineClose />
        </span>
      )}
    </form>
  );
}
