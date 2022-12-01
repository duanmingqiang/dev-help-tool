import { Droppable } from 'react-beautiful-dnd';
import { DraggableList } from './draggable-list';
import { DroppableHeader } from "./droppable-header";
// 拖拽组件容器列表
export function DroppableList(props: any) {
    const planData = props.planData || [];
    return (planData.map((planInfo: any) => {
        return (
            <div key={planInfo.type} className="group-container">
                <DroppableHeader planInfo={planInfo} />
                <Droppable droppableId={planInfo.type} >
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={ "group-body " + (snapshot.isDraggingOver? 'is-dragging-over': '')}
                        >
                            <DraggableList planList={planInfo.planList} planInfo={planInfo}></DraggableList>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    })
    )
}