import FormTodoList from "./components/FormTodoList";
import Heading from "./components/Heading";
import Message from "./components/Message";
import Table from "./components/Table";
import useTodoList from "./hooks/useTodoList";

function Todo() {
	const [cores, acts] = useTodoList();

	return (
		<>
			<div className="row">
				<div className="col-12">
					<Heading madeBy="Alfian" socmed="https://github.com/alfianchii">
						Simple Todo-list Application
					</Heading>

					<Message>{cores.message}</Message>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<FormTodoList acts={acts} cores={cores} />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<Table todos={cores.todos} acts={acts} />
				</div>
			</div>
		</>
	);
}

export default Todo;
