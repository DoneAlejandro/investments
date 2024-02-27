import { useState } from 'react';
import './App.css';
import { HomePage } from './page/homePage/HomePage';

function App() {
	const [count, setCount] = useState(0);
	const plus = () => {
		setCount(count + 1);
	};
	const minus = () => {
		setCount(count - 1);
	};

	return (
		<>
			<HomePage />
		</>
	);
}

export default App;
