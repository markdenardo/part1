import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name} you are {props.age} old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting App created by <a href='https://github.com/markdenardo'>markdenardo</a>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = "Peter"
  const age = 20

console.log('Hello from Component')
  return(
    <>
      <h1>Greetings</h1>
      <Hello name={"Maya"} age={30}/>
      <Hello name={name} age={age}/>
      <p>It is {now.toString()}</p>
      <Footer/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))