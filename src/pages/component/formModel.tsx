import React from "react";
import { Imodal } from "@/data/dataType";
import { AiOutlineClose } from "react-icons/ai";

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
					className="
						btn btn-sm btn-circle 
						absolute right-2 top-2
						text-black 
						border-none
						btn-active btn-accent  hover:bg-emerald-600"
				>
					<AiOutlineClose />
				</button>
				{children}
			</div>
		</div>
	);
}
