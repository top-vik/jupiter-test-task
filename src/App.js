import { BrowserRouter } from 'react-router-dom';
import { AppRouter, Header } from './components';
import './App.scss';

function App() {
	return (
    	<BrowserRouter>
			<Header />
			<AppRouter />
    	</BrowserRouter>
  	);
}

export default App;
