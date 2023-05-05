import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Todo />
	</React.StrictMode>,
);
