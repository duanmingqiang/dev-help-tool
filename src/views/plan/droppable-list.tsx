import { Droppable } from 'react-beautiful-dnd';
import { DraggableList } from './draggable-list';
import { DroppableHeader } from "./droppable-header";
// 拖拽组件容器列表
export function DroppableList(props: any) {
    const planData = props.planData || [];
    return (planData.map((planInfo: any) => {
        return (
            <Droppable droppableId={planInfo.type} key={planInfo.type}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey', borderRight: '1px solid red' }}
                        {...provided.droppableProps}
                        className="draggable-container-group"
                    >
                        <DroppableHeader planInfo={planInfo} />
                        <DraggableList planList={planInfo.planList} planInfo={planInfo}></DraggableList>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    })
    )
}