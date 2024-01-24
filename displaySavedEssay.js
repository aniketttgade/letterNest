document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the saved essay from local storage
    const savedEssayTitle = localStorage.getItem('savedEssayTitle');
    const savedEssayContent = localStorage.getItem('savedEssayContent');

    // Display the saved essay on the page
    const savedEssayTitleElement = document.getElementById('savedEssayTitle');
    const savedEssayContentElement = document.getElementById('savedEssayContent');

    if (savedEssayTitle && savedEssayContent) {
        savedEssayTitleElement.textContent = savedEssayTitle;
        savedEssayContentElement.textContent = savedEssayContent;
    } else {
        // Handle the case where there is no saved essay
        savedEssayTitleElement.textContent = 'No essay saved.';
        savedEssayContentElement.textContent = '';
    }

    // Clear local storage after displaying the saved essay
    localStorage.removeItem('savedEssayTitle');
    localStorage.removeItem('savedEssayContent');
});
