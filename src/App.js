import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {

	return (
		<div className="w-screen h-screen bg-blue-10 flex flex-col justify-between">
			<Toaster />
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
