import { TodoFunction, TodoProps } from "../hooks/useTodoList";
import Button from "./Button";

interface Props {
	tasks: TodoProps[];
	acts: TodoFunction;
}

const TodoList = ({ tasks, acts }: Props) => {
	return (
		<>
			{tasks.map((todo: TodoProps, index: number) => (
				<tr key={todo.id}>
					<td className="align-middle">{index + 1}</td>
					<td className="align-middle">
						<div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
							<input type="radio" className="btn-check" id={"not-yet-" + todo.id} autoComplete="off" checked={todo.done ? false : true} onChange={acts.done.bind(this, todo)} />
							<label className="btn btn-outline-info" htmlFor={"not-yet-" + todo.id}>
								Ongoing~
							</label>
							<input type="radio" className="btn-check" id={"done-" + todo.id} autoComplete="off" checked={todo.done ? true : false} onChange={acts.done.bind(this, todo)} />
							<label className="btn btn-outline-info" htmlFor={"done-" + todo.id}>
								Done!
							</label>
						</div>
					</td>
					<td className="align-middle text-center text-md-start">
						<label className="form-check-label">{todo.activity}</label>
					</td>
					<td className="align-middle">{todo.done ? <span className="badge text-bg-success">Finished</span> : <span className="badge text-bg-danger">Progress</span>}</td>
					<td className="align-middle">
						<Button className="me-2 mb-2" onClick={acts.edit.bind(this, todo)}>
							Edit
						</Button>
						<Button color="danger" className="me-2 mb-2" onClick={acts.remove.bind(this, todo.id)}>
							Delete
						</Button>
					</td>
				</tr>
			))}
		</>
	);
};

export default TodoList;
