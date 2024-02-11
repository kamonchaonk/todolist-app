import { Inter } from "next/font/google";
import React from "react";

import { getAllTasks } from "./api/callAPI";
import { Idatas } from "../data/dataType";

import NewTask from "./component/newTask";
import TodoList from "./component/todoList";

const inter = Inter({ subsets: ["latin"] });
type Props = {
	posts: Idatas[];
};

export default function index({ posts }: Props) {
	return (
		<main
			className={`       
      			${inter.className}
					fixed items-center 
					left-0 top-0 
					h-full   
					w-full
					bg-green-400/40
					bg-gradient-to-b
					from-orange-200
					p-12
					 
				`}
		>
			<div
				className={`  
					min-h-[100%]
					bg-yellow-100
					  border-gray-200
					p-6
					rounded-2xl
					overflow-x-auto h-96
			
				`}
			>
				<div className="text-center flex flex-col gap-2">
					<h1 className="mt-4 mb-4 text-2xl  font-bold">
						<span className="mr-2">Todo</span>
						<span
							className="
							before:block 
							before:absolute 
							before:-inset-1 
							before:-skew-y-3
							before:bg-orange-500
							relative inline-block"
						>
							<span className="relative text-white">Lists</span>
						</span>
						<span className="ml-2">App</span>
					</h1>

					<NewTask />

					<TodoList tasks={posts} />
				</div>
			</div>
		</main>
	);
}

export async function getStaticProps() {
	const posts = await getAllTasks();
	return {
		props: {
			posts,
		},
	};
}
