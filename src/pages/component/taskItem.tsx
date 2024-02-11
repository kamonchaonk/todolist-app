"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Idatas } from "@/data/dataType";
import FormModel from "./formModel";
import { editTask, deleteTaskById } from "../api/callAPI";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

type Props = {
	task: Idatas;
};

const TaskItem: React.FC<Props> = ({ task }: Props) => {
	const router = useRouter();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [openDeleted, setOpenDeleted] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(task.text);
	const [isTaskComplete, setIsTaskComplete] = useState<boolean>(
		task.isComplete
	);

	const handleDelete = async (id: string) => {
		await deleteTaskById(id).then(() => {
			setOpenDeleted(false);
			router.refresh();
		});
	};

	const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await editTask({
			id: `${task.id}`,
			text: editTodo,
			isComplete: false,
		});

		setOpenEdit(false);
		router.refresh();
	};

	const handleCheckboox = async (e: boolean) => {
		await editTask({
			id: `${task.id}`,
			text: editTodo,
			isComplete: e,
		});
		setIsTaskComplete(e);
	};

	return (
		<>
			<tr key={task.id} className="border-none odd:bg-orange-200  ">
				<td>
					<input
						className="
							border-none 
							checkbox checkbox-warning
							checkbox-md	
							mr-4
							rounded-lg
						"
						type="checkbox"
						key={task.id}
						checked={isTaskComplete}
						onChange={(e) => handleCheckboox(e.target.checked)}
					/>
				</td>
				<td className="w-full ">{task.text}</td>
				<td className="">
					<button
						className="text-green-800/80 disabled:text-green-500/25"
						disabled={isTaskComplete}
					>
						<AiFillEdit
							onClick={() => setOpenEdit(true)}
							cursor="hover"
							size={25}
						/>
					</button>

					<FormModel
						key={task.id}
						modalOpen={openEdit}
						setModalOpen={setOpenEdit}
					>
						<form onSubmit={(e) => handleEdit(e)}>
							<h3 className="font-bold text-lg">Edit Task</h3>
							<div className="modal-action">
								<input
									key={task.id}
									value={editTodo}
									onChange={(e) => {
										setEditTodo(e.target.value);
									}}
									type="text"
									placeholder="enter edit task!"
									className="
										input input-bordered 
										w-full bg-orange-200
										text-black"
								/>
								<button
									type="submit"
									className="
									btn text-black 
									border-none
									bg-orange-300
									hover:bg-orange-400"
								>
									Edit Now
								</button>
							</div>
						</form>
					</FormModel>
				</td>

				<td className="">
					<AiFillDelete
						onClick={() => setOpenDeleted(true)}
						cursor="pointer"
						className="text-orange-600"
						size={25}
					/>

					<FormModel
						key={task.id}
						modalOpen={openDeleted}
						setModalOpen={setOpenDeleted}
					>
						<h3 className="font-bold text-lg">Delete this task</h3>
						<br />
						<h5 className="text-lg">
							Are you sure, you want to delete this task?
						</h5>
						<div className="modal-action">
							<button
								onClick={() => handleDelete(task.id)}
								className="
								btn text-black 
								border-none
								bg-orange-300
							    hover:bg-orange-400"
							>
								Yes
							</button>
						</div>
					</FormModel>
				</td>
			</tr>
		</>
	);
};

export default TaskItem;
