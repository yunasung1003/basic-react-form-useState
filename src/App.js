import "./styles.css";
import React, { useState } from "react";

export default function App() {
  //이벤트를 넣어주지 않으면 값이 입력안되기 때문에 이벤트 설정
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //콘솔 창에 username, password 가 로그인 버튼 누르고 클릭하면 사라짐. 이유는 form onSubmit
  //form 은 submit 하면 항상 페이지를 리프레쉬 됨
  //event.preventDefault 고유의 form 동작을 멈춤
  const onSubmit = (event) => {
    event.preventDefault();
    // alert("submit");
    // username, password 를 서버 DB로 보내고 확인 한 후 맞으면 로그인 응답 보냄. consoloe 켜고 확인
    console.log(username, password);
  };

  return (
    //로그인 버튼을 누르면 onSubmit={onSubmit} 이벤트 일어나면서  const onSubmit = () => 이벤트를 실행
    <form onSubmit={onSubmit}>
      <div className="App">
        {/* e.target.value 은 input을 가르킴. 이 값은 setUsername 을 통해 위의 username 을 업데이트 하면서 value 안에도 업데이트된 값이 들어감*/}
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
      </div>
    </form>
  );
}
