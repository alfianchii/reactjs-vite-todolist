import { Props as Todo } from "../Todo";

interface Props {
	onSubmitHandler: (event: React.FormEvent) => void;
	states: {
		activity: {
			value: string;
			setter: React.Dispatch<React.SetStateAction<string>>;
		};
		editedTodo: {
			value: Todo;
			setter: React.Dispatch<React.SetStateAction<Todo>>;
		};
		todos: {
			value: Todo[];
			setter: React.Dispatch<React.SetStateAction<Todo[]>>;
		};
	};
	acts: {
		exit: () => void;
	};
}

const Form = ({ onSubmitHandler, states, acts }: Props) => {
	return (
		<>
			<form className="mb-3" onSubmit={onSubmitHandler}>
				<div className="input-group mb-3">
					<input autoFocus type="text" className="form-control" id="activity-name" placeholder="Activity name ..." value={states.activity.value} onChange={(event) => states.activity.setter(event.target.value)} />

					<button className="btn btn-outline-primary" type="submit">
						{states.editedTodo.value.id ? "Save" : "Add"}
					</button>

					{states.editedTodo.value.id && (
						<button className="btn btn-outline-danger me-2" onClick={acts.exit}>
							Cancel
						</button>
					)}
				</div>
			</form>
		</>
	);
};

export default Form;
