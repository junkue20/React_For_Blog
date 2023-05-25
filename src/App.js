import logo from './logo.svg';
import './App.css';

/* 리액트가 그냥 HTML 코딩보다 편리한 이유 */
// 데이터바인딩이 쉽다. (Angular,Vue도 가능)
// 데이터바인딩이란? - var 변수명 = "내용"; 와 같은 데이터를 HTML에 넣는것.

function App() {
  // document.getElementById().innerHTML = "";  와 같이 전통적인 JS 바인딩이 필요없다!

  let posts = "React 공부중!";

  let styleCode = {color : 'red', fontSize : '20px'};

  function 함수() {
    return 1000;
  }

  return (

    <div className="App">
      <div className="black-nav">
        <div>jungyu's 개발 블로그</div>
      </div>
      {/* 이미지 import해오는 법*/}
      <img src={ logo } /> 
      {/* src="./logo.svg" 와 같이 쓰기도 가능. */}

      {/*  jsx 문법  */}
      <h4>{ posts }</h4>
      <div className={ posts } style={ {color : 'blue', fontSize : '30px'} }>style은 중괄호 안에도 중괄호!</div>
      <div className={ posts } style={ styleCode }>변수로도 집어 넣을 수 있습니다.</div>
      <h4>{ 함수() }</h4>
    </div>
  );
}

export default App;
