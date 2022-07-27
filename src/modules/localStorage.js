/* eslint-disable max-len */
export const getLocalStorage = (localStorageArr) => JSON.parse(localStorage.getItem(localStorageArr));

export const setLocalStorage = (localStorageArr, codeArr) => localStorage.setItem(localStorageArr, JSON.stringify(codeArr));