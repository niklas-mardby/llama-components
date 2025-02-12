import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
	const welcomeTitle = "Welcome";

	return (
		<>
			<Header title={welcomeTitle} />
			<Header title="About Niklas" />
			<Header title="Contact" />
			<h1>🦙 llama-components 🦙</h1>
			<p>a repo to demo props in React</p>
			<List />
			<List />
		</>
	);
}

export default App;
