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

export { dataMenu, dataMenuWithoutAdd }