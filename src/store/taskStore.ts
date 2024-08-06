import { useState } from "react";

export interface Task {
    id: number;
    name: string;
}

const initialTasks: Task[] = [
    { id: 1, name: "task 1" },
    { id: 2, name: "task 2" },
    { id: 3, name: "task 3" }
];

export const useTaskStore = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const addTask = (task: Task) => setTasks([...tasks, task]);
    const deleteTask = (id: number) => setTasks(tasks.filter((task) => task.id !== id));
    const searchTasks = (query: string) => tasks.filter((task) => task.name.includes(query));

    return { tasks, addTask, deleteTask, searchTasks };
};