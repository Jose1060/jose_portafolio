import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Objectives from "./components/Objetives";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Foda from "./components/Foda";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Objectives/>
			<Skills />
			<Foda/>
			<Work />
			
		</div>
	);
}

export default App;
