import React from "react";
import InputSample from "./InputSample";
import logo from "./img/logo-removebg.png";
import styles from "./login.module.css";

function loginForm() {
  return (
    <figure className={styles.figure}>
      <article className={styles.txt}>
        <img src={logo} alt="logo" />

        <h2>Login</h2>

        <InputSample />
      </article>
    </figure>
  );
}

export default loginForm;
