import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Objectives from "./components/Objetives";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Foda from "./components/Foda";
import Blog from "./components/Blog";
import Recomendaciones from "./components/Recomendaciones";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Objectives />
			<Skills />
			<Foda />
			<Work />
			<Blog />
			<Recomendaciones />
		</div>
	);
}

export default App;
