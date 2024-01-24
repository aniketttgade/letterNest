document.addEventListener('DOMContentLoaded', function () {
    const essayForm = document.getElementById('essayForm');

    essayForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('essayTitle').value;
        const content = document.getElementById('essayContent').value;

        // Save the essay to local storage
        localStorage.setItem('savedEssayTitle', title);
        localStorage.setItem('savedEssayContent', content);

        // Redirect the user to the submitted essay page
        window.location.href = 'essay-submitted.html';
    });
});
