import React, { useState } from "react";
import styles from "./login.module.css";

function InputSample() {
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");

  const onClick = (e) => {
    console.log({ email });
    console.log({ pw });
  };

  return (
    <div>
      <div className={styles.inputLogin}>
        <input
          type="email"
          placeholder="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          placeholder="pw"
          value={pw || ""}
          onChange={(e) => setPw(e.target.value)}
        ></input>
      </div>

      <div>
        <div className={styles.checkId}>
          <input type="checkbox" name="saveEmail" id="saveEmail" />
          <span>아이디 저장</span>
        </div>
        <div className={styles.helpUser}>
          <p>회원가입</p>
          <p>아이디/비밀번호 찾기</p>
        </div>
        <div>
          <button className="btnLogin" onClick={onClick}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputSample;
