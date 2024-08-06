import React, { useState } from "react";
import { Modal, Input, Form } from "antd";

interface TaskFormProps {
    visible: boolean;
    onCreate: (name: string) => void;
    onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ visible, onCreate, onCancel }) => {
    const [name, setName] = useState("");
    const [form] = Form.useForm();

    const handleCreate = () => {
        form
            .validateFields()
            .then(() => {
                onCreate(name);
                setName("");
                form.resetFields();
            })
            .catch((e) => {
                console.log("Validate Failed:", e);
            });
    };

    return (
        <Modal
            visible={visible}
            title="Create a new task"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={handleCreate}
            okButtonProps={{ disabled: !name }}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Task Name" rules={[{ required: true }]}>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TaskForm;
