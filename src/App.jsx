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
import WriteReview3 from './Components/WriteReview/WriteReview3';
import WriteReview4 from './Components/WriteReview/WriteReview4';
import WriteReview5 from './Components/WriteReview/WriteReview5';

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
						<Route
							path='/write-a-review-3'
							exact
							element={<WriteReview3 />}
						/>
						<Route
							path='/write-a-review-4'
							exact
							element={<WriteReview4 />}
						/>
						<Route
							path='/write-a-review-5'
							exact
							element={<WriteReview5 />}
						/>


						
					</Routes>
				</Router>
        <Footer />
			</div>
		</AppProvider>
	);
}

export default App;
