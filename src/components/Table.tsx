import { Props as Todo } from "../Todo";
import TodoList from "./TodoList";
import { TodoFunction } from "../hooks/useTodoList";

interface Props {
	todos: Todo[];
	acts: TodoFunction;
}

const Table = ({ todos, acts }: Props) => {
	return (
		<>
			<table className="table table-striped d-block d-md-table" style={{ overflowX: "scroll", width: "100%" }}>
				<thead>
					<tr>
						<th>#</th>
						<th>Check</th>
						<th>Activity</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<TodoList tasks={todos} acts={acts} />
				</tbody>
			</table>

			{todos.length === 0 && <p className="text-center mt-4">There was no activity.</p>}
		</>
	);
};

export default Table;
