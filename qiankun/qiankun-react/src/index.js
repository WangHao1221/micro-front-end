import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function render(params) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// 如果是独立运行，则直接渲染(默认)
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  console.log('消息通信：', props)
  render()
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
