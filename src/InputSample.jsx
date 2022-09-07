import React from "react";
import styles from "./login.module.css";

function InputSample() {
  return (
    <div>
      <div className={styles.inputLogin}>
        <input type="email" placeholder="email"></input>
        <br />
        <input type="password" placeholder="pw"></input>
      </div>

      <div>
        <div>
          <input type="checkbox" name="saveEmail" id="saveEmail" />
          <span>아이디 저장</span>
        </div>
        <div>
          <p>회원가입</p>
          <p>아이디/비밀번호 찾기</p>
        </div>
        <p>
          <button className="btn-login">로그인</button>
        </p>
      </div>
    </div>
  );
}

export default InputSample;
