import { Draggable } from 'react-beautiful-dnd';
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
export function DraggableList(props: any) {
    const planList = props.planInfo.planList || []
    return (
        <div className='dragable-container'>
            {
                planList.map((item: any, index: number) => {
                    return (
                        <Draggable draggableId={item.id} index={index} key={item.id}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    className="dragable-item"
                                >
                                    <div className='task-content'>
                                        {item.content}
                                    </div>
                                </div>
                            )}
                        </Draggable>
                    )
                })
            }
        </div>
    )
}