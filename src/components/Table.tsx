import { Props as Todo } from "../Todo";

interface Props {
	todos: Todo[];
	acts: {
		done: (todo: Todo) => void;
		edit: (todo: Todo) => void;
		remove: (todoId: number) => void;
	};
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
					{todos.map((todo, index) => (
						<tr key={todo.id}>
							<td className="align-middle">{index + 1}</td>
							<td className="align-middle">
								<div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
									<input type="radio" className="btn-check" id={"not-yet-" + todo.id} autoComplete="off" checked={todo.done ? false : true} onChange={acts.done.bind(this, todo)} />
									<label className="btn btn-outline-primary" htmlFor={"not-yet-" + todo.id}>
										Progress~
									</label>
									<input type="radio" className="btn-check" id={"done-" + todo.id} autoComplete="off" checked={todo.done ? true : false} onChange={acts.done.bind(this, todo)} />
									<label className="btn btn-outline-primary" htmlFor={"done-" + todo.id}>
										Done!
									</label>
								</div>
							</td>
							<td className="align-middle text-center text-md-start">
								<label className="form-check-label">{todo.activity}</label>
							</td>
							<td className="align-middle">{todo.done ? <span className="badge text-bg-success">Finished</span> : <span className="badge text-bg-danger">Progress</span>}</td>
							<td className="align-middle">
								<button className="btn btn-primary me-2 mb-2" type="submit" onClick={acts.edit.bind(this, todo)}>
									Edit
								</button>
								<button className="btn btn-danger me-2 mb-2" type="submit" onClick={acts.remove.bind(this, todo.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{todos.length === 0 && <p className="text-center mt-4">There was no activity.</p>}
		</>
	);
};

export default Table;