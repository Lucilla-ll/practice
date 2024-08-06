import React from "react";
import { Button, List } from "antd";

interface TaskItemProps {
    id: number;
    name: string;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, name, onDelete }) => (
    <List.Item
        actions={[
            <Button type="dashed" danger onClick={() => onDelete(id)}>
                Delete
            </Button>,
        ]}
    >
        {name}
    </List.Item>
);

export default TaskItem;
