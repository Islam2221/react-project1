import './style/App.css'
import Header from './components/header/Header'
import Postlist from './components/postlist/Postlist'


const App = () => {
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<Postlist />
			</div>

		</div>
	)

}

export default App