mapboxgl.accessToken = <INSERT MAPBOX TOKEN>;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [44.183333, 40.516667],    
    zoom: 6,
    bearing: 0,
    pitch: 0 
});

// To correct the gps coordinates, [X+4, Y-2]

var chapters = {
    // 'demo': {
    //     bearing: 0,
    //     // Armenia
    //     center: [44.183333, 40.516667],
    //     zoom: 6,
    //     pitch: 0
    // },
    'overview': {
        duration: 6000,
        // Armenia
        center: [44.183333, 40.516667],
        bearing: 0, // In degrees. 0 is normal map orientation
        zoom: 6,
        pitch: 0
    },
    'big-questions': {
        bearing: 0,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        speed: 0.6,
        pitch: 0
    },
    'history': {
        bearing: 0,
        center: [0.05991101, 51.48752939],
        zoom: 12.3
    },
    'mass-graves': {
        bearing: 0,
        // Ras al-Ain Mass Grave Site
        center: [40.06791650113689, 36.84572273106825],
        zoom: 12.9639,
        pitch: 0,
        speed: 0.5
    },
    'political': {
        bearing: 0,
        // Turkey as well as its neighbors
        center: [37.49171644065325, 38.86857880528933],
        zoom: 3.6289
    },
    'cultural': {
        bearing: 0,
        // LA the home of one of the largest Armenian diaspora centers
        center: [-118.22505106359205, 33.96899530943443],
        zoom: 7.655097,
        pitch: 0
    },
    'personal-stories': {
        bearing: 0,
        // Mt Ararat
        center: [44.69212081849798, 39.851711511335765],
        zoom: 11.93528,
        pitch: 0
    },
    'other': {
        bearing: 0,
        center: [-75.30820642102589, 40.00805090450967 ],
        zoom: 14.20816,
        pitch: 0
    }
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'demo';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
