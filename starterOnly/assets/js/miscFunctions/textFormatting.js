const capitalizeFirstLetter = (string) => {
    let tempString = string.toLowerCase().trim()
    return tempString.charAt(0).toUpperCase() + tempString.slice(1);
}

export { capitalizeFirstLetter }