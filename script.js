const projectsData = [
    { title: "Project 1", description: "Description of project 1." },
    { title: "Project 2", description: "Description of project 2." },
    { title: "Project 3", description: "Description of project 3." }
];

const projectsSection = document.getElementById('projects');

projectsData.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);

    projectsSection.appendChild(projectElement);
});
