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
        icon: 'icon-settings'
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
        icon: 'icon-settings'
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


const listIconFeather = [
    "icon-activity",
    "icon-airplay",
    "icon-alert-circle",
    "icon-alert-octagon",
    "icon-alert-triangle",
    "icon-align-center",
    "icon-align-justify",
    "icon-align-left",
    "icon-align-right",
    "icon-anchor",
    "icon-aperture",
    "icon-archive",
    "icon-arrow-down",
    "icon-arrow-down-circle",
    "icon-arrow-down-left",
    "icon-arrow-down-right",
    "icon-arrow-left",
    "icon-arrow-left-circle",
    "icon-arrow-right",
    "icon-arrow-right-circle",
    "icon-arrow-up",
    "icon-arrow-up-circle",
    "icon-arrow-up-left",
    "icon-arrow-up-right",
    "icon-at-sign",
    "icon-award",
    "icon-bar-chart",
    "icon-bar-chart-2",
    "icon-battery",
    "icon-battery-charging",
    "icon-bell",
    "icon-bell-off",
    "icon-bluetooth",
    "icon-bold",
    "icon-book",
    "icon-book-open",
    "icon-bookmark",
    "icon-box",
    "icon-briefcase",
    "icon-calendar",
    "icon-camera",
    "icon-camera-off",
    "icon-cast",
    "icon-check",
    "icon-check-circle",
    "icon-check-square",
    "icon-chevron-down",
    "icon-chevron-left",
    "icon-chevron-right",
    "icon-chevron-up",
    "icon-chevrons-down",
    "icon-chevrons-left",
    "icon-chevrons-right",
    "icon-chevrons-up",
    "icon-chrome",
    "icon-circle",
    "icon-clipboard",
    "icon-clock",
    "icon-cloud",
    "icon-cloud-drizzle",
    "icon-cloud-lightning",
    "icon-cloud-off",
    "icon-cloud-rain",
    "icon-cloud-snow",
    "icon-code",
    "icon-codepen",
    "icon-copy",
    "icon-corner-down-left",
    "icon-corner-down-right",
    "icon-corner-left-down",
    "icon-corner-left-up",
    "icon-corner-right-down",
    "icon-corner-right-up",
    "icon-corner-up-left",
    "icon-corner-up-right",
    "icon-cpu",
    "icon-credit-card",
    "icon-crop",
    "icon-crosshair",
    "icon-database",
    "icon-delete",
    "icon-disc",
    "icon-dollar-sign",
    "icon-download",
    "icon-download-cloud",
    "icon-droplet",
    "icon-edit",
    "icon-edit-2",
    "icon-edit-3",
    "icon-external-link",
    "icon-eye",
    "icon-eye-off",
    "icon-facebook",
    "icon-fast-forward",
    "icon-feather",
    "icon-file",
    "icon-file-minus",
    "icon-file-plus",
    "icon-file-text",
    "icon-film",
    "icon-filter",
    "icon-flag",
    "icon-folder",
    "icon-folder-minus",
    "icon-folder-plus",
    "icon-framer",
    "icon-frown",
    "icon-gift",
    "icon-git-branch",
    "icon-git-commit",
    "icon-git-merge",
    "icon-git-pull-request",
    "icon-github",
    "icon-gitlab",
    "icon-globe",
    "icon-grid",
    "icon-hard-drive",
    "icon-hash",
    "icon-headphones",
    "icon-heart",
    "icon-help-circle",
    "icon-home",
    "icon-image",
    "icon-inbox",
    "icon-info",
    "icon-info-circle",
    "icon-italic",
    "icon-layers",
    "icon-layout",
    "icon-life-buoy",
    "icon-link",
    "icon-link-2",
    "icon-list",
    "icon-loader",
    "icon-lock",
    "icon-log-in",
    "icon-log-out",
    "icon-mail",
    "icon-map",
    "icon-map-pin",
    "icon-maximize",
    "icon-maximize-2",
    "icon-menu",
    "icon-message-circle",
    "icon-message-square",
    "icon-mic",
    "icon-mic-off",
    "icon-minimize",
    "icon-minimize-2",
    "icon-minus",
    "icon-minus-circle",
    "icon-minus-square",
    "icon-monitor",
    "icon-moon",
    "icon-more-horizontal",
    "icon-more-vertical",
    "icon-move",
    "icon-music",
    "icon-navigation",
    "icon-octagon",
    "icon-package",
    "icon-paperclip",
    "icon-pause",
    "icon-pause-circle",
    "icon-pen-tool",
    "icon-percent",
    "icon-phone",
    "icon-phone-call",
    "icon-phone-forwarded",
    "icon-phone-incoming",
    "icon-phone-missed",
    "icon-phone-off",
    "icon-phone-outgoing",
    "icon-pie-chart",
    "icon-play",
    "icon-play-circle",
    "icon-plus",
    "icon-plus-circle",
    "icon-plus-square",
    "icon-pocket",
    "icon-power",
    "icon-printer",
    "icon-radio",
    "icon-refresh-ccw",
    "icon-refresh-cw",
    "icon-repeat",
    "icon-rewind",
    "icon-rotate-ccw",
    "icon-rotate-cw",
    "icon-rss",
    "icon-save",
    "icon-scissors",
    "icon-search",
    "icon-send",
    "icon-server",
    "icon-settings",
    "icon-share",
    "icon-share-2",
    "icon-shield",
    "icon-shuffle",
    "icon-sidebar",
    "icon-skip-back",
    "icon-skip-forward",
    "icon-slack",
    "icon-slash",
    "icon-sliders",
    "icon-smartphone",
    "icon-speaker",
    "icon-square",
    "icon-star",
    "icon-stop-circle",
    "icon-sun",
    "icon-sunrise",
    "icon-sunset",
    "icon-tablet",
    "icon-tag",
    "icon-target",
    "icon-terminal",
    "icon-thermometer",
    "icon-thumbs-down",
    "icon-thumbs-up",
    "icon-toggle-left",
    "icon-toggle-right",
    "icon-trash",
    "icon-triangle",
    "icon-truck",
    "icon-tv",
    "icon-twitter",
    "icon-type",
    "icon-umbrella",
    "icon-underline",
    "icon-unlock",
    "icon-upload",
    "icon-upload-cloud",
    "icon-user",
    "icon-user-check",
    "icon-user-minus",
    "icon-user-plus",
    "icon-user-x",
    "icon-users",
    "icon-video",
    "icon-video-off",
    "icon-voicemail",
    "icon-volume",
    "icon-volume-1",
    "icon-volume-2",
    "icon-volume-x",
    "icon-watch",
    "icon-wifi",
    "icon-wifi-off",
    "icon-wind",
    "icon-x",
    "icon-x-circle",
    "icon-x-square",
    "icon-zap",
    "icon-zap-off",
    "icon-zoom-in",
    "icon-zoom-out"
]

export { dataMenu, dataMenuWithoutAdd, listTasks, listIconFeather }