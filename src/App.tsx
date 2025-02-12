import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import LlamaButton from "./components/LlamaButton/LlamaButton";
import SubHeader from "./components/SubHeader/SubHeader";

function App() {
	const welcomeTitle = "Welcome";

	const animals = ["llama", "lion", "cow", "horse"];
	return (
		<>
			<Header title={welcomeTitle} />
			{/* <Header title="About Niklas" />
			<Header title="Contact" /> */}
			<SubHeader>- a sub header of some kind</SubHeader>
			<SubHeader>
				<p>Another list:</p>
				<List items={animals} />
			</SubHeader>
			<h1>🦙 llama-components 🦙</h1>
			<p>a repo to demo basics in React</p>
			<List items={animals} />
			<LlamaButton title="Click me!" hasIcon={true} />
			<LlamaButton title="OR Click me!" hasIcon={false} />
		</>
	);
}

export default App;
