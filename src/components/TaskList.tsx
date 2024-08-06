import React, { useState } from "react";
import { Input, Button, List, Skeleton, message } from "antd";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useTaskStore, Task } from "../store/taskStore";

const TaskList: React.FC = () => {
    const { tasks, addTask, deleteTask, searchTasks } = useTaskStore();
    const [loading, setLoading] = useState(true);
    const [newTaskVisible, setNewTaskVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleAddTask = (name: string) => {
        const newTask: Task = { id: Date.now(), name };
        addTask(newTask);
        setNewTaskVisible(false);
        message.success("Task added successfully!");
    };

    const handleDeleteTask = (id: number) => {
        deleteTask(id);
        message.success("Task deleted successfully!");
    };

    const filteredTasks = searchQuery ? searchTasks(searchQuery) : tasks;

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <>
            <div
                style={{
                    marginTop: 8,
                    marginBottom: 16,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Input.Search
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: 200 }}
                />
                <Button
                    onClick={() => setNewTaskVisible(true)}
                    style={{ marginLeft: 8 }}
                >
                    Add
                </Button>
            </div>
            {loading ? (
                <Skeleton active />
            ) : (
                <List
                    bordered
                    dataSource={filteredTasks}
                    renderItem={(task) => (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            onDelete={handleDeleteTask}
                        />
                    )}
                    locale={{ emptyText: "No tasks found" }}
                />
            )}
            <TaskForm
                visible={newTaskVisible}
                onCreate={handleAddTask}
                onCancel={() => setNewTaskVisible(false)}
            />
        </>
    );
};

export default TaskList;
