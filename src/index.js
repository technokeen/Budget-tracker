import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from './components/Context/Context';
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
  
    <SpeechProvider appId="c98e5dcf-df5f-4b60-abc7-efd99906a8ac" language="en-US">
      <Provider>
          <App />
      </Provider>
    </SpeechProvider>,
    

  document.getElementById('root')
);


reportWebVitals();
