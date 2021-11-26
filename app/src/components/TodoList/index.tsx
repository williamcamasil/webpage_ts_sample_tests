import { SetStateAction, useState } from "react";

const TodoList = () => {
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState<string[]>([]);

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => updateTask(event.target.value);

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(task.trim()){
            updateTasks([...tasks, task]);
            updateTask('');
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} value={task} />
                <button onClick={handleFormSubmit}>Add nova tarefa</button>
            </form>
            
            <table>
                <thead>
                    <tr>
                        <th>Tarefas</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index}>
                            <td>{t}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;