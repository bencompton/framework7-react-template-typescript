// Import React and ReactDOM
import * as  React from 'react';
import { render } from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import main App component
import App from './components/App';

// Framework7 styles
import 'framework7/css/framework7.min.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
render(
  React.createElement(App),
  document.getElementById('app'),
);
