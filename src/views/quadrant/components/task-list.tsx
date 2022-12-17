export function TaskList(props:any) {
    const handleDeleteTask = (task:any) => {
        props.handleDeleteTask(task)
    }
    return (
        <div className="task-list">
            {props.taskName}
            <span className="delete-task" onClick={ () => {
                handleDeleteTask(props)
            } }>X</span>
        </div>
    )
}