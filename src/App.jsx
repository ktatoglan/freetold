import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Style/root.css';
import { AppProvider } from './Contexts/AppContext';
import WriteReview1 from './Components/WriteReview/WriteReview1';
import WriteReview2 from './Components/WriteReview/WriteReview2';

function App() {
	return (
		<AppProvider>
			<div className='main-content'>
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
						<Route
							path='/write-a-review-1'
							exact
							element={<WriteReview1 />}
						/>
						<Route
							path='/write-a-review-2'
							exact
							element={<WriteReview2 />}
						/>


						
					</Routes>
				</Router>
        <Footer />
			</div>
		</AppProvider>
	);
}

export default App;
