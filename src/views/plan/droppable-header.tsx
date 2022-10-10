// 拖拽容器组件header 
export function DroppableHeader(props:any) {
    return (
        <div className='plan-header'>
            <span>
                {props.planInfo.typeName}
            </span>
        </div>
    )
}
