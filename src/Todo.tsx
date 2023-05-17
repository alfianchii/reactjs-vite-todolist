import React, { useState } from "react";
import { generateId } from "./helpers/generateId";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Message from "./components/Message";
import Table from "./components/Table";

export interface Props {
	id: number;
	activity: string;
	done: boolean;
}

function Todo() {
	/*
  'activity' will have the type string
  */
	const [activity, setActivity] = useState<string>("");

	/* 
  'editedProps' will have the type Props
  <Props>

  which means that an empty object literal ({}) is being explicitly cast to the Props type
  ({} as Props)
  */
	const [editedTodo, setEditedTodo] = useState<Props>({} as Props);

	/* 
  'Propss' is an array of Props objects
  <Props[]>
  */
	const [todos, setTodos] = useState<Props[]>([]);
	// Same as 'activity'
	const [message, setMessage] = useState<string>("");

	const states = {
		activity: {
			value: activity,
			setter: setActivity,
		},
		editedTodo: {
			value: editedTodo,
			setter: setEditedTodo,
		},
		todos: {
			value: todos,
			setter: setTodos,
		},
	};

	function saveTodoHandler(event: React.FormEvent) {
		event.preventDefault();

		if (!activity) return setMessage("Activity name should not be empty!");

		setMessage("");

		if (editedTodo.id) {
			const updatedTodo = {
				...editedTodo,
				activity,
			};

			const updatedTodoIndex = todos.findIndex((todo) => todo.id === editedTodo.id);

			const updatedTodos = [...todos];
			updatedTodos[updatedTodoIndex] = updatedTodo;
			setTodos(updatedTodos);
			return exitTodoHandler();
		}

		const newTodo: Props = {
			id: generateId(),
			activity,
			done: false,
		};
		setTodos([...todos, newTodo]);
		setActivity("");
	}

	function removeTodoHandler(todoId: number) {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);

		setTodos(updatedTodos);

		if (editedTodo.id) exitTodoHandler();
	}

	function editTodoHandler(todo: Props) {
		const input = document.getElementById("activity-name") as HTMLInputElement;
		input.focus();

		setEditedTodo(todo);
		setActivity(todo.activity);
	}

	function exitTodoHandler() {
		setEditedTodo({} as Props);
		setActivity("");
	}

	function doneTodoHandler(todo: Props) {
		const updatedTodo = {
			...todo,
			done: !todo.done,
		};

		const updatedTodoIndex = todos.findIndex((currentTodo) => currentTodo.id === todo.id);

		const updatedTodos = [...todos];
		updatedTodos[updatedTodoIndex] = updatedTodo;
		setTodos(updatedTodos);
	}

	const acts = {
		done: doneTodoHandler,
		edit: editTodoHandler,
		remove: removeTodoHandler,
		save: saveTodoHandler,
		exit: exitTodoHandler,
	};

	return (
		<>
			<div className="row">
				<div className="col-12">
					<Heading madeBy="Alfian" socmed="https://github.com/alfianchii">
						Simple Todo-list Application
					</Heading>

					<Message>{message}</Message>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<Form onSubmitHandler={acts.save} states={states} acts={{ exit: acts.exit }} />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<Table
						todos={todos}
						acts={{
							done: acts.done,
							edit: acts.edit,
							remove: acts.remove,
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default Todo;
