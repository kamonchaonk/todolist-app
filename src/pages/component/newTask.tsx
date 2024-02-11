"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 } from "uuid";
import { Idatas } from "@/data/dataType";
import FormModel from "./formModel";
import { addNewTask } from "../api/callAPI";

type Props = {};

export default function NewTask({}: Props) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [newTodo, setNewTodo] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem: Idatas = {
			id: `${v4()}`,
			text: newTodo,
			isComplete: false,
		};

		await addNewTask(newItem).finally(() => {
			setNewTodo("");
			setIsOpen(false);
			router.refresh();
		});
	};

	return (
		<div className="px-24">
			<button
				onClick={() => setIsOpen(true)}
				className="
					btn btn-active
					btn-accent w-full 	
					hover:bg-emerald-600
					text-lg
					text-white
				"
				type="button"
			>
				New Task
				<AiOutlinePlusCircle size={25} />
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
							className="
								btn btn-active
								btn-accent 
								hover:bg-emerald-600
							"
						>
							Add Task
						</button>
					</div>
				</form>
			</FormModel>
		</div>
	);
}
