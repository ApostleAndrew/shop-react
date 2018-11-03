import React from 'react'


import Header from './Header/Header'


import '../common/style/base.css'
import '../common/style/reset.css'

const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>

	)
}



const Main = () => {
	return(
		<main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					
				</div>
				<div className="col-lg-9">
					
				</div>
			</div>
		</div>
	</main>
	)
}

const Footer = () => {
	return(
		<footer className="footer">
		
		</footer>
	)
}

export default App



