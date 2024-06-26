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
    { val: 'icon-activity', label: 'Activity' },
    { val: 'icon-airplay', label: 'Airplay' },
    { val: 'icon-alert-circle', label: 'Alert Circle' },
    { val: 'icon-alert-octagon', label: 'Alert Octagon' },
    { val: 'icon-alert-triangle', label: 'Alert Triangle' },
    { val: 'icon-align-center', label: 'Align Center' },
    { val: 'icon-align-justify', label: 'Align Justify' },
    { val: 'icon-align-left', label: 'Align Left' },
    { val: 'icon-align-right', label: 'Align Right' },
    { val: 'icon-anchor', label: 'Anchor' },
    { val: 'icon-aperture', label: 'Aperture' },
    { val: 'icon-archive', label: 'Archive' },
    { val: 'icon-arrow-down', label: 'Arrow Down' },
    { val: 'icon-arrow-down-circle', label: 'Arrow Down Circle' },
    { val: 'icon-arrow-down-left', label: 'Arrow Down Left' },
    { val: 'icon-arrow-down-right', label: 'Arrow Down Right' },
    { val: 'icon-arrow-left', label: 'Arrow Left' },
    { val: 'icon-arrow-left-circle', label: 'Arrow Left Circle' },
    { val: 'icon-arrow-right', label: 'Arrow Right' },
    { val: 'icon-arrow-right-circle', label: 'Arrow Right Circle' },
    { val: 'icon-arrow-up', label: 'Arrow Up' },
    { val: 'icon-arrow-up-circle', label: 'Arrow Up Circle' },
    { val: 'icon-arrow-up-left', label: 'Arrow Up Left' },
    { val: 'icon-arrow-up-right', label: 'Arrow Up Right' },
    { val: 'icon-at-sign', label: 'At Sign' },
    { val: 'icon-award', label: 'Award' },
    { val: 'icon-bar-chart', label: 'Bar Chart' },
    { val: 'icon-bar-chart-2', label: 'Bar Chart 2' },
    { val: 'icon-battery', label: 'Battery' },
    { val: 'icon-bell', label: 'Bell' },
    { val: 'icon-bell-off', label: 'Bell Off' },
    { val: 'icon-bluetooth', label: 'Bluetooth' },
    { val: 'icon-bold', label: 'Bold' },
    { val: 'icon-book', label: 'Book' },
    { val: 'icon-book-open', label: 'Book Open' },
    { val: 'icon-bookmark', label: 'Bookmark' },
    { val: 'icon-box', label: 'Box' },
    { val: 'icon-briefcase', label: 'Briefcase' },
    { val: 'icon-calendar', label: 'Calendar' },
    { val: 'icon-camera', label: 'Camera' },
    { val: 'icon-camera-off', label: 'Camera Off' },
    { val: 'icon-cast', label: 'Cast' },
    { val: 'icon-check', label: 'Check' },
    { val: 'icon-check-circle', label: 'Check Circle' },
    { val: 'icon-check-square', label: 'Check Square' },
    { val: 'icon-chevron-down', label: 'Chevron Down' },
    { val: 'icon-chevron-left', label: 'Chevron Left' },
    { val: 'icon-chevron-right', label: 'Chevron Right' },
    { val: 'icon-chevron-up', label: 'Chevron Up' },
    { val: 'icon-chevrons-down', label: 'Chevrons Down' },
    { val: 'icon-chevrons-left', label: 'Chevrons Left' },
    { val: 'icon-chevrons-right', label: 'Chevrons Right' },
    { val: 'icon-chevrons-up', label: 'Chevrons Up' },
    { val: 'icon-chrome', label: 'Chrome' },
    { val: 'icon-circle', label: 'Circle' },
    { val: 'icon-clipboard', label: 'Clipboard' },
    { val: 'icon-clock', label: 'Clock' },
    { val: 'icon-cloud', label: 'Cloud' },
    { val: 'icon-cloud-drizzle', label: 'Cloud Drizzle' },
    { val: 'icon-cloud-lightning', label: 'Cloud Lightning' },
    { val: 'icon-cloud-off', label: 'Cloud Off' },
    { val: 'icon-cloud-rain', label: 'Cloud Rain' },
    { val: 'icon-cloud-snow', label: 'Cloud Snow' },
    { val: 'icon-code', label: 'Code' },
    { val: 'icon-codepen', label: 'Codepen' },
    { val: 'icon-command', label: 'Command' },
    { val: 'icon-compass', label: 'Compass' },
    { val: 'icon-copy', label: 'Copy' },
    { val: 'icon-corner-down-left', label: 'Corner Down Left' },
    { val: 'icon-corner-down-right', label: 'Corner Down Right' },
    { val: 'icon-corner-left-down', label: 'Corner Left Down' },
    { val: 'icon-corner-left-up', label: 'Corner Left Up' },
    { val: 'icon-corner-right-down', label: 'Corner Right Down' },
    { val: 'icon-corner-right-up', label: 'Corner Right Up' },
    { val: 'icon-corner-up-left', label: 'Corner Up Left' },
    { val: 'icon-corner-up-right', label: 'Corner Up Right' },
    { val: 'icon-cpu', label: 'Cpu' },
    { val: 'icon-credit-card', label: 'Credit Card' },
    { val: 'icon-crop', label: 'Crop' },
    { val: 'icon-crosshair', label: 'Crosshair' },
    { val: 'icon-database', label: 'Database' },
    { val: 'icon-delete', label: 'Delete' },
    { val: 'icon-disc', label: 'Disc' },
    { val: 'icon-dollar-sign', label: 'Dollar Sign' },
    { val: 'icon-download', label: 'Download' },
    { val: 'icon-download-cloud', label: 'Download Cloud' },
    { val: 'icon-droplet', label: 'Droplet' },
    { val: 'icon-edit', label: 'Edit' },
    { val: 'icon-edit-2', label: 'Edit 2' },
    { val: 'icon-edit-3', label: 'Edit 3' },
    { val: 'icon-external-link', label: 'External Link' },
    { val: 'icon-eye', label: 'Eye' },
    { val: 'icon-eye-off', label: 'Eye Off' },
    { val: 'icon-facebook', label: 'Facebook' },
    { val: 'icon-fast-forward', label: 'Fast Forward' },
    { val: 'icon-feather', label: 'Feather' },
    { val: 'icon-file', label: 'File' },
    { val: 'icon-file-minus', label: 'File Minus' },
    { val: 'icon-file-plus', label: 'File Plus' },
    { val: 'icon-file-text', label: 'File Text' },
    { val: 'icon-film', label: 'Film' },
    { val: 'icon-filter', label: 'Filter' },
    { val: 'icon-flag', label: 'Flag' },
    { val: 'icon-folder', label: 'Folder' },
    { val: 'icon-folder-minus', label: 'Folder Minus' },
    { val: 'icon-folder-plus', label: 'Folder Plus' },
    { val: 'icon-github', label: 'Github' },
    { val: 'icon-globe', label: 'Globe' },
    { val: 'icon-grid', label: 'Grid' },
    { val: 'icon-hash', label: 'Hash' },
    { val: 'icon-headphones', label: 'Headphones' },
    { val: 'icon-heart', label: 'Heart' },
    { val: 'icon-help-circle', label: 'Help Circle' },
    { val: 'icon-home', label: 'Home' },
    { val: 'icon-image', label: 'Image' },
    { val: 'icon-inbox', label: 'Inbox' },
    { val: 'icon-info', label: 'Info' },
    { val: 'icon-instagram', label: 'Instagram' },
    { val: 'icon-italic', label: 'Italic' },
    { val: 'icon-layers', label: 'Layers' },
    { val: 'icon-layout', label: 'Layout' },
    { val: 'icon-life-buoy', label: 'Life Buoy' },
    { val: 'icon-link', label: 'Link' },
    { val: 'icon-link-2', label: 'Link 2' },
    { val: 'icon-linkedin', label: 'Linkedin' },
    { val: 'icon-list', label: 'List' },
    { val: 'icon-loader', label: 'Loader' },
    { val: 'icon-lock', label: 'Lock' },
    { val: 'icon-log-in', label: 'Log In' },
    { val: 'icon-log-out', label: 'Log Out' },
    { val: 'icon-mail', label: 'Mail' },
    { val: 'icon-map', label: 'Map' },
    { val: 'icon-map-pin', label: 'Map Pin' },
    { val: 'icon-maximize', label: 'Maximize' },
    { val: 'icon-maximize-2', label: 'Maximize 2' },
    { val: 'icon-menu', label: 'Menu' },
    { val: 'icon-message-circle', label: 'Message Circle' },
    { val: 'icon-message-square', label: 'Message Square' },
    { val: 'icon-mic', label: 'Mic' },
    { val: 'icon-mic-off', label: 'Mic Off' },
    { val: 'icon-minimize', label: 'Minimize' },
    { val: 'icon-minimize-2', label: 'Minimize 2' },
    { val: 'icon-minus', label: 'Minus' },
    { val: 'icon-minus-circle', label: 'Minus Circle' },
    { val: 'icon-minus-square', label: 'Minus Square' },
    { val: 'icon-monitor', label: 'Monitor' },
    { val: 'icon-moon', label: 'Moon' },
    { val: 'icon-more-horizontal', label: 'More Horizontal' },
    { val: 'icon-more-vertical', label: 'More Vertical' },
    { val: 'icon-move', label: 'Move' },    
    { val: 'icon-music', label: 'Music' },
    { val: 'icon-navigation', label: 'Navigation' },
    { val: 'icon-octagon', label: 'Octagon' },
    { val: 'icon-package', label: 'Package' },
    { val: 'icon-paperclip', label: 'Paperclip' },
    { val: 'icon-pause', label: 'Pause' },
    { val: 'icon-pause-circle', label: 'Pause Circle' },
    { val: 'icon-pen-tool', label: 'Pen Tool' },
    { val: 'icon-percent', label: 'Percent' },
    { val: 'icon-phone', label: 'Phone' },
    { val: 'icon-phone-call', label: 'Phone Call' },
    { val: 'icon-phone-forwarded', label: 'Phone Forwarded' },
    { val: 'icon-phone-incoming', label: 'Phone Incoming' },
    { val: 'icon-phone-missed', label: 'Phone Missed' },
    { val: 'icon-phone-off', label: 'Phone Off' },
    { val: 'icon-phone-outgoing', label: 'Phone Outgoing' },
    { val: 'icon-pie-chart', label: 'Pie Chart' },
    { val: 'icon-play', label: 'Play' },
    { val: 'icon-play-circle', label: 'Play Circle' },
    { val: 'icon-plus', label: 'Plus' },
    { val: 'icon-plus-circle', label: 'Plus Circle' },
    { val: 'icon-plus-square', label: 'Plus Square' },
    { val: 'icon-pocket', label: 'Pocket' },
    { val: 'icon-power', label: 'Power' },
    { val: 'icon-printer', label: 'Printer' },
    { val: 'icon-radio', label: 'Radio' },
    { val: 'icon-refresh-ccw', label: 'Refresh Ccw' },
    { val: 'icon-refresh-cw', label: 'Refresh Cw' },
    { val: 'icon-repeat', label: 'Repeat' },
    { val: 'icon-rewind', label: 'Rewind' },
    { val: 'icon-rotate-ccw', label: 'Rotate Ccw' },
    { val: 'icon-rotate-cw', label: 'Rotate Cw' },
    { val: 'icon-rss', label: 'Rss' },
    { val: 'icon-save', label: 'Save' },
    { val: 'icon-scissors', label: 'Scissors' },
    { val: 'icon-search', label: 'Search' },
    { val: 'icon-send', label: 'Send' },
    { val: 'icon-server', label: 'Server' },
    { val: 'icon-settings', label: 'Settings' },
    { val: 'icon-share', label: 'Share' },
    { val: 'icon-share-2', label: 'Share 2' },
    { val: 'icon-shield', label: 'Shield' },
    { val: 'icon-shield-off', label: 'Shield Off' },
    { val: 'icon-shopping-bag', label: 'Shopping Bag' },
    { val: 'icon-shopping-cart', label: 'Shopping Cart' },
    { val: 'icon-shuffle', label: 'Shuffle' },
    { val: 'icon-sidebar', label: 'Sidebar' },
    { val: 'icon-skip-back', label: 'Skip Back' },
    { val: 'icon-skip-forward', label: 'Skip Forward' },
    { val: 'icon-slack', label: 'Slack' },
    { val: 'icon-slash', label: 'Slash' },
    { val: 'icon-sliders', label: 'Sliders' },
    { val: 'icon-smartphone', label: 'Smartphone' },
    { val: 'icon-speaker', label: 'Speaker' },
    { val: 'icon-square', label: 'Square' },
    { val: 'icon-star', label: 'Star' },
    { val: 'icon-stop-circle', label: 'Stop Circle' },
    { val: 'icon-sun', label: 'Sun' },
    { val: 'icon-sunrise', label: 'Sunrise' },
    { val: 'icon-sunset', label: 'Sunset' },
    { val: 'icon-tablet', label: 'Tablet' },
    { val: 'icon-tag', label: 'Tag' },
    { val: 'icon-target', label: 'Target' },
    { val: 'icon-terminal', label: 'Terminal' },
    { val: 'icon-thermometer', label: 'Thermometer' },
    { val: 'icon-thumbs-down', label: 'Thumbs Down' },
    { val: 'icon-thumbs-up', label: 'Thumbs Up' },
    { val: 'icon-toggle-left', label: 'Toggle Left' },
    { val: 'icon-toggle-right', label: 'Toggle Right' },
    { val: 'icon-trash', label: 'Trash' },
    { val: 'icon-trash-2', label: 'Trash 2' },
    { val: 'icon-trending-down', label: 'Trending Down' },
    { val: 'icon-trending-up', label: 'Trending Up' },
    { val: 'icon-triangle', label: 'Triangle' },
    { val: 'icon-truck', label: 'Truck' },
    { val: 'icon-tv', label: 'Tv' },
    { val: 'icon-twitch', label: 'Twitch' },
    { val: 'icon-twitter', label: 'Twitter' },
    { val: 'icon-type', label: 'Type' },
    { val: 'icon-umbrella', label: 'Umbrella' },
    { val: 'icon-underline', label: 'Underline' },
    { val: 'icon-unlock', label: 'Unlock' },
    { val: 'icon-upload', label: 'Upload' },
    { val: 'icon-upload-cloud', label: 'Upload Cloud' },
    { val: 'icon-user', label: 'User' },
    { val: 'icon-user-check', label: 'User Check' },
    { val: 'icon-user-minus', label: 'User Minus' },
    { val: 'icon-user-plus', label: 'User Plus' },
    { val: 'icon-user-x', label: 'User X' },
    { val: 'icon-users', label: 'Users' },
    { val: 'icon-video', label: 'Video' },
    { val: 'icon-video-off', label: 'Video Off' },
    { val: 'icon-voicemail', label: 'Voicemail' },
    { val: 'icon-volume', label: 'Volume' },
    { val: 'icon-volume-1', label: 'Volume 1' },
    { val: 'icon-volume-2', label: 'Volume 2' },
    { val: 'icon-volume-x', label: 'Volume X' },
    { val: 'icon-watch', label: 'Watch' },
    { val: 'icon-wifi', label: 'Wifi' },
    { val: 'icon-wifi-off', label: 'Wifi Off' },
    { val: 'icon-wind', label: 'Wind' },
    { val: 'icon-x', label: 'X' },
    { val: 'icon-x-circle', label: 'X Circle' },
    { val: 'icon-x-square', label: 'X Square' },
    { val: 'icon-zap', label: 'Zap' },
    { val: 'icon-zap-off', label: 'Zap Off' },
    { val: 'icon-zoom-in', label: 'Zoom In' },
    { val: 'icon-zoom-out', label: 'Zoom Out' }
  ]



export { dataMenu, dataMenuWithoutAdd, listTasks, listIconFeather }