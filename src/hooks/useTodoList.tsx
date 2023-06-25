import React, { useEffect, useRef, useState } from "react";
import { setItemWithExp as setLocal, getItemWithExp as getLocal } from "../helpers/localStorage";
import { generateId } from "../helpers/generateId";

export interface TodoProps {
	id: number;
	activity: string;
	done: boolean;
}

export interface TodoCores {
	todos: TodoProps[];
	activity: string;
	editedTodo: TodoProps;
	message: string;
	inputRef: React.RefObject<HTMLInputElement>;
}

export interface TodoFunctions {
	setActivity: React.Dispatch<React.SetStateAction<string>>;
	save: (event: React.FormEvent) => void;
	remove: (todoId: number) => void;
	edit: (todo: TodoProps) => void;
	done: (todo: TodoProps) => void;
	exit: () => void;
}

function useTodoList(): [TodoCores, TodoFunctions] {
	const inputRef = useRef<HTMLInputElement>(null);
	const [activity, setActivity] = useState<string>("");
	const [editedTodo, setEditedTodo] = useState<TodoProps>({} as TodoProps);
	const todos = getLocal("todos");
	const setTodos = useState<TodoProps[]>([])[1];
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function saveTodoHandler(event: React.FormEvent) {
		event.preventDefault();

		if (!activity) return setMessage("Activity name should not be empty!");

		setMessage("");

		if (editedTodo.id) {
			const updatedTodos: TodoProps[] = todos.map((todo: TodoProps) => (todo.id === editedTodo.id ? { ...editedTodo, activity } : todo));
			setTodos(updatedTodos);
			setLocal("todos", updatedTodos);
			return exitTodoHandler();
		}

		const newTodo: TodoProps = {
			id: generateId(),
			activity,
			done: false,
		};
		const newTodos: TodoProps[] = [...todos, newTodo];
		setTodos(newTodos);
		setLocal("todos", newTodos);
		setActivity("");
	}

	function removeTodoHandler(todoId: number) {
		const updatedTodos: TodoProps[] = todos.filter((todo: TodoProps) => todo.id !== todoId);
		setTodos(updatedTodos);
		setLocal("todos", updatedTodos);
		if (editedTodo.id) exitTodoHandler();
	}

	function editTodoHandler(todo: TodoProps) {
		inputRef.current?.focus();
		setEditedTodo(todo);
		setActivity(todo.activity);
	}

	function exitTodoHandler() {
		setEditedTodo({} as TodoProps);
		setActivity("");
	}

	function doneTodoHandler(todo: TodoProps) {
		const updatedTodo: TodoProps = {
			...todo,
			done: !todo.done,
		};

		const updatedTodoIndex: number = todos.findIndex((currentTodo: TodoProps) => currentTodo.id === todo.id);

		const updatedTodos: TodoProps[] = [...todos];
		updatedTodos[updatedTodoIndex] = updatedTodo;
		setTodos(updatedTodos);
		setLocal("todos", updatedTodos);
	}

	const acts: TodoFunctions = {
		setActivity,
		save: saveTodoHandler,
		remove: removeTodoHandler,
		edit: editTodoHandler,
		exit: exitTodoHandler,
		done: doneTodoHandler,
	};

	const cores: TodoCores = {
		todos,
		activity,
		editedTodo,
		message,
		inputRef,
	};

	return [cores, acts];
}

export default useTodoList;
