'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function removeDuplicates(namesArray) {
    const newArray = [];
    for (const value of namesArray) {
        if (!newArray.includes(value)) newArray.push(value);
    }
    return newArray;
}

console.log(removeDuplicates(names));
