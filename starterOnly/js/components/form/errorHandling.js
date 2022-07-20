const showError = (errorNode, text) => {
    errorNode.textContent = text
    errorNode.style.display = "block";
}

const hideError = (errorNode, text) => {
    
}

export { showError, hideError}