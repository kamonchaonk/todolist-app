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
					bg-gray-100
					border-2 border-gray-200
					p-6
					rounded-2xl
				`}
			>
				<div className="text-center flex flex-col gap-4">
					<h1 className="mt-2 mb-2 text-2xl  font-bold">
						Todo Lists App
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
