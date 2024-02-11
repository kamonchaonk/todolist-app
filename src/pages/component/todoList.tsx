"use client";

import React from "react";

import { Idatas } from "@/data/dataType";
import TaskItem from "./taskItem";

interface Props {
	tasks: Idatas[];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
	return (
		<div className="box-content  px-14 mx-14">
			<table className="table ">
				<thead className="text text-black text-base ">
					<tr>
						<th></th>
						<th>TasK</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((item) => {
						return <TaskItem task={item} key={item.id} />;
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;
