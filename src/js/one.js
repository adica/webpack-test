'use strict';

const moduleTwo =  require('./two');

const item = {
    id: 1,
    sections: [
        [{ id: 123, readingTime: 5 }],
        [{ id: 456, readingTime: 3 }],
        [{ id: 789, readingTime: 2 }]
    ]
};



// Sum all readingTime
const readingTime = item.sections.map((section) => {
    return moduleTwo.getSection(section);
}).map((component) => {
    return moduleTwo.getReadingTime(component) || 0;
}).reduce(function (time1, time2) {
    return time1 + time2;
}, 0);

console.log('reading time: ', readingTime);
