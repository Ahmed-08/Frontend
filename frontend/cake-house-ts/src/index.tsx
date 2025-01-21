import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './app/ui/App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/stories/store.ts';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store} children={undefined}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
