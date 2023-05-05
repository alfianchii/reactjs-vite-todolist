import { Props as Todo } from "../Todo";
import Button from "./Button";

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

					<Button outline={true}>{states.editedTodo.value.id ? "Save" : "Add"}</Button>

					{states.editedTodo.value.id && (
						<Button outline={true} color="danger" otherClass="me-2" onClick={acts.exit}>
							Cancel
						</Button>
					)}
				</div>
			</form>
		</>
	);
};

export default Form;
