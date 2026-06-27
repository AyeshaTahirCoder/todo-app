import { useState } from "react"
import Header from "./components/Header"
import Filters from "./components/Filters"
import TaskList from "./components/TaskList"
import AddTaskForm from "./components/AddTaskForm"
import EditTaskForm from "./components/EditTaskForm"

function App() {
	const [showAddTaskForm, setShowAddTaskForm] = useState(false)
	const [showEditTaskForm, setShowEditTaskForm] = useState(false)
	const [filter, setFilter] = useState("All")
	const [id, setId] = useState("")

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-6">
			{/* Name Banner */}
			<div className="relative text-center py-4 px-6 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
				<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
				<p className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-200 mb-1">
					Developer
				</p>
				<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
					AyeshaTahir
					<span className="ml-2 text-yellow-300 font-black">-f17</span>
				</h1>
				<div className="mt-2 flex justify-center gap-1">
					{[...Array(5)].map((_, i) => (
						<span key={i} className="w-1.5 h-1.5 rounded-full bg-white opacity-60 inline-block" />
					))}
				</div>
			</div>
			<Header setShowAddTaskForm={setShowAddTaskForm} />
			<Filters
				filter={filter}
				setFilter={setFilter}
			/>
			<TaskList
				setShowEditTaskForm={setShowEditTaskForm}
				filter={filter}
				setId={setId}
			/>
			{showAddTaskForm && (
				<AddTaskForm setShowAddTaskForm={setShowAddTaskForm} />
			)}
			{showEditTaskForm && (
				<EditTaskForm
					setShowEditTaskForm={setShowEditTaskForm}
					id={id}
				/>
			)}
		</div>
	)
}

export default App
