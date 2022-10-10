export const DEFAULT_DATA = [
    {
        type: 'waitPlan',
        typeName: '待处理',
        planList: [
            {
                id: '111',
                content: '1111111'
            },
            {
                id: '222',
                content: '2222222'
            }
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

const localStorageData = localStorage.getItem('cachePlanData') || ''
export const CAHCE_DATA = localStorageData ? JSON.parse(localStorageData) : DEFAULT_DATA