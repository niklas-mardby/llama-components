import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
	return (
		<>
			<Header />
			<h1>🦙 llama-components 🦙</h1>
			<p>a repo to demo props in React</p>
			<List />
		</>
	);
}

export default App;
