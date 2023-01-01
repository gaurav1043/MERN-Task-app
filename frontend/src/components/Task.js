import { AiOutlineEdit } from "react-icons/ai";
import { BsCheck2Circle, BsTrash } from "react-icons/bs";

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className="task-icons">
        <BsCheck2Circle onClick={() => setToComplete(task)} />
        <AiOutlineEdit onClick={() => getSingleTask(task)} />
        <BsTrash onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
