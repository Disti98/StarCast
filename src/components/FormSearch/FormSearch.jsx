import { useState, useRef, useEffect } from "react";
import { GET } from "../../utils/api.js";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Modal from "../Modal/Modal.jsx";
import styles from "./index.module.scss";

export default function FormSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [resultsList, setResultsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isInputActive) {
      setSearchValue(resultsList[0].id);
      setIsModalVisible(true);
      setInputValue("");
      setIsInputActive(false);
    } else setIsInputActive(true);
  };

  const handelOnClick = () => isInputActive && setInputValue("");

  const handleClose = () => {
    setInputValue("");
    setIsInputActive(false);
  };

  const handleTitleOnClick = (id) => {
    setSearchValue(id);
    setIsModalVisible(true);
    setInputValue("");
    setIsInputActive(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [isInputActive, inputValue]);

  useEffect(() => {
    inputValue &&
      GET("search", "movie", `&language=en-US&query=${inputValue}&page=1`).then(
        (data) => {
          console.log(data);
          setResultsList(data.results);
        }
      );
  }, [inputValue]);

  const handleOnChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <form className={styles.Main} onSubmit={(e) => handleOnSubmit(e)}>
        <input
          ref={inputRef}
          className={`${styles.input} ${isInputActive && styles.active}`}
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
        />
        <button className={styles.button} onClick={handelOnClick}>
          {isInputActive ? <AiOutlineCloseCircle /> : <AiOutlineSearch />}
        </button>
        {isInputActive && (
          <span className={styles.close_input} onClick={handleClose}>
            <AiOutlineClose />
          </span>
        )}
      </form>
      {inputValue && (
        <ul className={styles.list}>
          {resultsList &&
            resultsList.map((el, i) => (
              <li
                className={styles.result}
                onClick={() => handleTitleOnClick(el.id)}
                key={i}
              >
                {el.title} (
                {el.release_date
                  ? el.release_date.split("-").reverse().join("/")
                  : ""}
                )
              </li>
            ))}
        </ul>
      )}
      {isModalVisible && (
        <Modal
          id={searchValue}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
}
