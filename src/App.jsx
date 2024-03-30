import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/root.css';
import { AppProvider } from './Contexts/AppContext';

function App() {
	return (
		<AppProvider>
			<div>
        <Header />
				<Router>
					<Routes>
						<Route
							path='/'
							exact
							element={<HomePage />}
						/>
						<Route
							path='/home'
							exact
							element={<HomePage />}
						/>
						<Route
							path='/login'
							exact
							element={<LoginPage />}
						/>
						<Route
							path='/register'
							exact
							element={<RegisterPage />}
						/>
						
					</Routes>
				</Router>
        <Footer />
			</div>
		</AppProvider>
	);
}

export default App;
