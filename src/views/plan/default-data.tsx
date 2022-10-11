export const DEFAULT_DATA = [
    {
        type: 'waitPlan',
        typeName: '待处理',
        planList: [
            {
                id: '111aaa',
                content: '1111111'
            },
            {
                id: '222aaa',
                content: '2222222'
            },
            {
                id: '333aaa',
                content: '333333'
            },
            {
                id: '44444',
                content: '44444'
            },
            {
                id: '55555',
                content: '55555'
            },
            {
                id: '66666',
                content: '66666'
            },
            {
                id: '77777',
                content: '7777777'
            },
        ]
    },
    {
        type: 'processPlan',
        typeName: '处理中',
        planList: []
    },
    {
        type: 'compeletePlan',
        typeName: '处理完成',
        planList: []
    },
    {
        type: 'abondanPlan',
        typeName: '废弃',
        planList: []
    }
]

const localStorageData = getStroagPlanData() || ''
export const CAHCE_DATA = localStorageData ? JSON.parse(localStorageData) : DEFAULT_DATA

export function setStroagPlanData(cacheData:any) {
    const tempData = JSON.stringify(cacheData)
    localStorage.setItem('cachePlanData', tempData)
}

export function getStroagPlanData() {
    return localStorage.getItem('cachePlanData')
}