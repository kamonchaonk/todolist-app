import React from "react";
import { Imodal } from "@/data/dataType";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
	model: Imodal;
};

export default function FormModel({
	children,
	modalOpen,
	setModalOpen,
}: Imodal) {
	return (
		<div className={`modal ${modalOpen ? "modal-open" : ""} `}>
			<div className="modal-box relative bg-white">
				<button
					onClick={() => setModalOpen(false)}
					className="btn btn-sm btn-circle absolute right-2 top-2 "
				>
					<AiOutlineClose />
				</button>
				{children}
			</div>
		</div>
	);
}

{
	/* <input
className="col-span-2  border-0 rounded-full bg-orange-200 text-black"
type="text"
placeholder="enter new task!"
id="newTodo"
value={newTodo}
onChange={(e) => setNewTodo(e.target.value)}
/> */
}
