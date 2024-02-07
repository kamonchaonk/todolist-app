import React from "react";

import { Idatas } from "@/data/dataType";
// import { getAllTasks } from "../api/callAPI";
interface Props {
	tasks: Idatas[];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
	// const tasks = getAllTasks();
	// console.log("taskssss", tasks);

	return (
		<div className="box-content  h-500 w-auto px-12 mx-12  ">
			<table className="table">
				<thead>
					<tr>
						<th>TasK</th>
						<th>Actoion</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task) => (
						<tr key={task.id} className="border-none">
							{/* <th>
								<label>
									<input
										type="checkbox"
										className="checkbox"
									/>
								</label>
							</th> */}
							<td>{task.text}</td>
							<td> action</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;
