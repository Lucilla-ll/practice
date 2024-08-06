import './App.css';
import { Layout } from 'antd';
import TaskList from "./components/TaskList";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "120vh" }}>
      <Header style={{ color: "white", fontSize: "24px" }}>To Do List</Header>
      <Content style={{ padding: "12px" }}>
        <TaskList />
      </Content>
    </Layout>
  );
}

export default App;
