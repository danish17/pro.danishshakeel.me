import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

ReactDOM.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
	document.getElementById('root')
);
