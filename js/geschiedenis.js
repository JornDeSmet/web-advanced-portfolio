'use strict';
export function addToHistory(searchData) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history = [...history, searchData];
    localStorage.setItem('searchHistory', JSON.stringify(history));
}

export function getHistory() {
    return JSON.parse(localStorage.getItem('searchHistory')) || [];
}
