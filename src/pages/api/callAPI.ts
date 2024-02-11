import { Idatas } from "@/data/dataType";

const baseUrl = "http://localhost:3001";

export const getAllTasks = async (): Promise<Idatas[]> => {
	const res = await fetch(`${baseUrl}/datas`, { cache: "no-store" });
	const tasks = await res.json();

	return tasks;
};

export const editTask = async (todo: Idatas): Promise<Idatas> => {
	const res = await fetch(`${baseUrl}/datas/${todo.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});
	const updateTodo = await res.json();

	return updateTodo;
};

export const addNewTask = async (todo: Idatas): Promise<void> => {
	console.log("todo", todo);

	const res = await fetch(`${baseUrl}/datas`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});
};

export const deleteTaskById = async (id: string): Promise<void> => {
	await fetch(`${baseUrl}/datas/${id}`, {
		method: "DELETE",
	});
};
