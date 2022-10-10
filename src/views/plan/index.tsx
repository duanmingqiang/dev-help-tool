import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CAHCE_DATA } from './default-data';
// 设置样式
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 8px 0`,
    // 拖拽的时候背景变化
    background: isDragging ? "lightgreen" : "#ffffff",
    // styles we need to apply on draggables
    ...draggableStyle
});
// 拖拽组件列表
export function DraggableList(props:any) {
    const item = props.item
    const index = props.index
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    style={ getItemStyle( snapshot.isDragging, provided.draggableProps.style )}
                >
                    {item.content}
                </div>
            )}
        </Draggable>
    )
}
// 拖拽组件容器列表
function DroppableList(props:any) {
    const planData = props.planData;
    return  planData.map((planInfo: any) => {
                return (
                    <Droppable droppableId={planInfo.type} key={planInfo.type}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey', width: '25%', display: 'inline-block', height: '100vh', borderRight: '1px solid red' }}
                                {...provided.droppableProps}
                            >
                                {(planInfo.planList || []).map((item: any, index: number) => (
                                    <DraggableList item={item} index={index} key={item.id}></DraggableList>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                )
            })
}
export function PlanList() {
    const onDragEnd = (e: any) => {
        console.log('DragDropContext 拖拽开始', e)
    }
    
    const [planData, setPlanData] = useState(CAHCE_DATA)
    // {/* <DroppableHeader planInfo={planInfo} /> */}
    return (
    <div style={{ display: 'flex' }}>
        <DragDropContext onDragEnd={onDragEnd}>
            <DroppableList planData={planData}></DroppableList>
        </DragDropContext>
    </div>
    )
}