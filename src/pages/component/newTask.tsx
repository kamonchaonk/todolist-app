"use client";

import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 } from "uuid";
import { Idatas } from "@/data/dataType";
import FormModel from "./formModel";
import { addNewTask } from "../api/callAPI";
import { useRouter } from "next/navigation";
type Props = {};

export default function NewTask({}: Props) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [todo, setTodo] = useState<Idatas>();
	const [newTodo, setNewTodo] = useState("");

	// const createTodo = (key: string) => {
	// 	console.log("key=========>", key);
	// 	console.log("newTodo", newTodo);
	// 	if (key === "Enter" && newTodo) {
	// 		const newItem: Idatas = {
	// 			id: `${v4()}`,
	// 			text: newTodo,
	// 		};

	// 		setTodo(newItem);
	// 		setNewTodo("");
	// 	}
	// };

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem: Idatas = {
			id: `${v4()}`,
			text: newTodo,
		};

		// setTodo(newItem);

		await addNewTask(newItem).then(() => {
			setNewTodo("");
			setIsOpen(false);
			router.refresh();
		});
	};

	return (
		<div className="px-24">
			{/* <input
				className="col-span-2  border-0 rounded-full bg-orange-200 text-black"
				type="text"
				placeholder="enter new task!"
				id="newTodo"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/> */}

			<button
				onClick={() => setIsOpen(true)}
				className="btn btn-active btn-accent w-full"
				type="button"
			>
				New Task
				<AiOutlinePlusCircle size={20} />
			</button>

			<FormModel modalOpen={isOpen} setModalOpen={setIsOpen}>
				<form onSubmit={(e) => handleSubmit(e)}>
					<h3 className="font-bold text-lg">Add new task</h3>
					<div className="modal-action">
						<input
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							type="text"
							placeholder="enter new task!"
							className="
							input input-bordered 
							w-full bg-orange-200
							text-black"
						/>
						<button
							type="submit"
							className="btn bg-yellow-200 border-0"
						>
							Add Task
						</button>
					</div>
				</form>
			</FormModel>
		</div>
	);
}
