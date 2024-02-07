// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Idatas } from "@/data/dataType";

// type Data = {
// 	name: string;
// };

// export default function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<Data>
// ) {
// 	res.status(200).json({ name: "John Doe" });
// }

const baseUrl = "http://localhost:3001";

export const getAllTasks = async (): Promise<Idatas[]> => {
	const res = await fetch(`${baseUrl}/datas`, { cache: "no-store" });
	const tasks = await res.json();

	return tasks;
};

export const editTask = async (): Promise<Idatas[]> => {
	const datas = await fetch(`${baseUrl}/datas`);
	const tasks = await datas.json();

	return tasks;
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
	// const newTodo = await res.json();
	// return newTodo;
};

export const deleteTaskById = async (id: string): Promise<void> => {
	await fetch(`${baseUrl}/datas/${id}`, {
		method: "DELETE",
	});
};

// export class TodoService {
// 	async getAllTasks(): Promise<Idatas[]> {
// 		let todo: Idatas[];

// 		try {
// 			const datas = await fetch(`${baseUrl}/datas`);
// 			todo = await datas.json();
// 			console.log("==>", todo);
// 		} catch (error) {
// 			console.log("error", error);
// 		} finally {
// 			return todo;
// 		}
// 	}
// }

// const todoService = new TodoService();
// export default todoService;
