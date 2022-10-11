// 拖拽容器组件header 
export function DroppableHeader(props:any) {
    return (
        <div className='draggable-group-header'>
            <span>
                {props.planInfo.typeName}
            </span>
        </div>
    )
}
