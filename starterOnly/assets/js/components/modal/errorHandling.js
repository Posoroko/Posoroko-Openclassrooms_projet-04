const showError = (errorNode, errorMessage) => {
    errorNode.style.display = "block"
    errorNode.textContent = errorMessage
}

const hideError = (errorNode) => {
    errorNode.style = 'none'
}

export { showError, hideError }