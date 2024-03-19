//Element Menu
const listRouting = [
    {
        route: '/home',
        icon: 'icon-home'
    },
    {
        route: '/calendar',
        icon: 'icon-calendar'
    },
    {
        route: '/addTask',
        icon: 'icon-plus'
    },
    {
        route: '/task',
        icon: 'icon-list'
    },
    {
        route: '/parameter',
        icon: 'icon-parameter'
    }
];

//without plus
const listRouting2 = [
    {
        route: '/home',
        icon: 'icon-home'
    },
    {
        route: '/calendar',
        icon: 'icon-calendar'
    },
    {
        route: '/task',
        icon: 'icon-list'
    },
    {
        route: '/parameter',
        icon: 'icon-parameter'
    }
];

const routeAdd = true
const indicePosition = 2

const dataMenu = {
    listRouting,
    routeAdd,
    indicePosition
}

const dataMenuWithoutAdd = {
    listRouting: listRouting2,
    routeAdd : false,
    indicePosition
}

//dataCatogory
const listCategory = [
    {
        label: 'Work',
        icon: 'icon-work',
        color: '#2196F3'
    },
    {
        label: 'Personal',
        icon: 'icon-user',
        color: '#FF5722'
    },
    {
        label: 'Shopping',
        icon: 'icon-shopping-cart',
        color: '#FFC107'
    },
    {
        label: 'Health',
        icon: 'icon-heart',
        color: '#FFA3A3'
    }
]

//List tasks
const listTasks = [
    {
        id: 1,
        task: 'Finish Report',
        date: '19/03/2024',
        time: '10:00',
        notes: 'Finish Report',
        state: false
    },
    {
        id: 2,
        task: 'Gym Workout',
        date: '19/03/2024',
        time: '11:00',
        notes: 'Gym',
        state: false
    },
    {
        id: 3,
        task: 'Project Meeting',
        date: '19/03/2024',
        time: '12:00',
        notes: 'Project',
        state: false
    },
    {
        id: 4,
        task: 'Read Chapter 3',
        date: '19/03/2024',
        time: '13:00',
        notes: 'Read',
        state: false
    },
]

export { dataMenu, dataMenuWithoutAdd, listCategory, listTasks }