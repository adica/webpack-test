'use strict';

function getSection(section) {
    return section[0];
}

function getReadingTime(item) {
    return item.readingTime;
}


module.exports = {
    getSection: getSection,
    getReadingTime: getReadingTime
}
