import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { AddTask } from './components/add-task';
import { CAHCE_DATA } from './default-data';
import { DroppableList } from './droppable-list';
export function PlanList() {
    const [planData, setPlanData] = useState(CAHCE_DATA)

    const onDragEnd = (result: any) => {
        const { source, destination } = result;
        // 目标放置不存在或者源和目标的所属组id和所属组index相同则不用处理
        if (!destination || (destination.droppableId === source.droppableId && source.index === destination.index)) {
            return;
        }
        const clonePanelData = JSON.parse((JSON.stringify(planData)))
        // 相同分组内不同拖拽组件交换位置
        if (destination.droppableId === source.droppableId && source.index !== destination.index) {
            let draggableGroup = clonePanelData.find((item: any) => { return item.type === destination.droppableId })
            let tempData = draggableGroup.planList[source.index]
            draggableGroup.planList[source.index] = draggableGroup.planList[destination.index]
            draggableGroup.planList[destination.index] = tempData
            setPlanData(clonePanelData)
            return 
        }

        // 不同拖拽分组级别的组件交换
        const draggableSourceGroup = clonePanelData.find((item: any) => { return item.type === source.droppableId })
        const draggableDestinationGroup = clonePanelData.find((item: any) => { return item.type === destination.droppableId })
        const targetDraggableItem = draggableSourceGroup.planList.splice(source.index, 1)
        draggableDestinationGroup.planList.splice(destination.index, 0, targetDraggableItem[0])
        setPlanData(clonePanelData)
    }
    // 处理新增
    const addNewPlan = (params:any) => {
        console.log('params111111111', params)
        const clonePanelData = JSON.parse((JSON.stringify(planData)))
        const waitPlan = clonePanelData.find((v:any) => v.type === 'waitPlan');
        const randomId = parseInt((Math.random() * 1000000).toString()).toString()
        waitPlan.planList.unshift({
            id: randomId,
            content: params.taskContent
            // '新计划' + randomId
        })
        setPlanData(clonePanelData)
    } 
    return (
    <div className='plan-container-wrap'>
        <div  className="plan-header">
            <span className='title'>任务图</span>
            <AddTask addNewPlan={addNewPlan}></AddTask>
            {/* <Button type='primary' size='small' onClick={() => { addNewPlan() }} >新增</Button> */}
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='plan-body'>
                <DroppableList planData={planData}></DroppableList>
            </div>
        </DragDropContext>
    </div>
    )
}