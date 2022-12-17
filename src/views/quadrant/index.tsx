import { UpOutlined, RightOutlined } from '@ant-design/icons'
import { AddTask } from './components/add-task'
import { useState } from 'react'
import { TaskList } from './components/task-list'
export function Quodrant(props:any) {

    const [taskList, setTaskList] = useState([])

    const handleAddNewTask = (taskData:any) => {
        const tempData = JSON.parse(JSON.stringify([...taskList, taskData]))
        setTaskList(tempData)
    }
    
    const handleDeleteTask = (task:any) => {
        const tempData = JSON.parse(JSON.stringify([...taskList]))
        const deleteIndex = tempData.findIndex((item:any) => {
            return item.taskName === task.taskName && item.taskType === task.taskType
        })
        tempData.splice(deleteIndex, 1)
        setTaskList(tempData)
    }
    return (
        <div className='quadrant-container'>
            <div className='quadrant-header'>
                <AddTask addNewTask={ handleAddNewTask }></AddTask>
            </div>
            <div className='important-line'>
                <div>不重要</div>
                <div>重要</div>
            </div>
            <div className='urgent-line'>
                <div>紧急</div>
                <div>不紧急</div>
            </div>
            <div className="quadrant-event-wrap">

                <div className="not-important-and-urgent event-container">
                    <UpOutlined className='top-icon'/>
                    {
                        taskList.filter((item:any) => item.taskType === '01').map((v:any, index) => {
                            return <TaskList {...v} key={index} handleDeleteTask={handleDeleteTask}></TaskList>
                        })
                    }
                </div>
                <div className="important-and-urgent event-container">
                    <RightOutlined className='right-icon'/>
                    {
                        taskList.filter((item:any) => item.taskType === '02').map((v:any, index) => {
                            return <TaskList {...v} key={index} handleDeleteTask={handleDeleteTask}></TaskList>
                        })
                    }
                </div>
                <div className="not-important-and-not-urgent event-container">
                    {
                        taskList.filter((item:any) => item.taskType === '03').map((v:any, index) => {
                            return <TaskList {...v} key={index} handleDeleteTask={handleDeleteTask}></TaskList>
                        })
                    }

                </div>
                <div className="important-and-not-urgent event-container">
                    {
                        taskList.filter((item:any) => item.taskType === '04').map((v:any, index) => {
                            return <TaskList {...v} key={index} handleDeleteTask={handleDeleteTask}></TaskList>
                        })
                    }

                </div>
            </div>
        </div>
    )
}