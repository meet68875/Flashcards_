import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateFlashCard from "./pages/CreateFlashCard";
import ShowFlashCard from "./pages/ShowFlashCard";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShowAllCards from "./components/ShowAllCards";
import ShowCompleteSingleCard from "./components/ShowCompleteSingleCard";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <CreateFlashCard />,
				errorElement: <Error />,
			},
			{
				path: "/show",
				element: <ShowFlashCard />,
				errorElement: <Error />,
				children: [
					{
						path: "/show",
						element: <ShowAllCards />,
						errorElement: <Error />,
					},
					{
						path: "/show/:id",
						element: <ShowCompleteSingleCard />,
						errorElement: <Error />,
					},
				],
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<App></App>
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);
reportWebVitals();
