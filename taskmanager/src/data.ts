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

export { dataMenu, dataMenuWithoutAdd, listCategory }