import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counterclass from './Components/state'
import Hello from './Components/props';
import Clock from './Components/lifeCicle';
import Button from './Components/events';
import Counterfunction from './Components/hooks';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <Hello name="IME !" />
  </React.StrictMode>
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
  <React.StrictMode>
    <Counterfunction />
  </React.StrictMode>
);

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(
  <React.StrictMode>
    <Counterclass />
  </React.StrictMode>
);

reportWebVitals();
