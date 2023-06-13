import Input from "../components/Input";
import Button from "../components/Button";
import { TodoCore, TodoFunction } from "../hooks/useTodoList";

interface Props {
	cores: TodoCore;
	acts: TodoFunction;
}

const FormTodoList = ({ cores, acts }: Props) => (
	<form className="mb-3" onSubmit={acts.save}>
		<div className="input-group mb-3">
			<Input ref={cores.inputRef} placeholder="Activity name ..." value={cores.activity} onChange={(event) => cores.setActivity(event.target.value)} />

			<Button outline>{cores.editedTodo.id ? "Save" : "Add"}</Button>

			{cores.editedTodo.id && (
				<Button outline color="danger" className="me-2" onClick={acts.exit}>
					Cancel
				</Button>
			)}
		</div>
	</form>
);

export default FormTodoList;
