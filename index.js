const intermediateButton = document.getElementById('intermediate')
const beginnerButton = document.getElementById('beginner')
const beginnerProjects = document.querySelectorAll('.beginner')
const intermediateProjects = document.querySelectorAll('.intermediate')

intermediateButton.addEventListener('click', () => {
    intermediateButton.classList.add('clicked')
    beginnerButton.classList.remove('clicked')
    intermediateProjects.forEach(element => {
        element.classList.remove('hidden')
    });
    beginnerProjects.forEach(element => {
        element.classList.add('hidden')
    });
})

beginnerButton.addEventListener('click', () => {
    intermediateButton.classList.remove('clicked')
    beginnerButton.classList.add('clicked')
    intermediateProjects.forEach(element => {
        element.classList.add('hidden')
    });
    beginnerProjects.forEach(element => {
        element.classList.remove('hidden')
    });
})