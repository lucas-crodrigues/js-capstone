export const getLocalStorage = (localStorageArr) => {
  return JSON.parse(localStorage.getItem(localStorageArr));
}

export const setLocalStorage = (localStorageArr, codeArr) => {
  return localStorage.setItem(localStorageArr, JSON.stringify(codeArr));
}