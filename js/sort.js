document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function () {
    const skill = this.getAttribute('data-skill'); // Get selected skill
    const projects = document.querySelectorAll('.grid-item'); // All projects

    // Fade-out and slide down all grid items at once
    projects.forEach(project => {
      project.style.opacity = '0'; // Fade out
    });

    // Wait for fade-out and slide-down to finish (500ms)
    setTimeout(() => {
      // Show only matching projects
      projects.forEach(project => {
        const projectSkills = project.getAttribute('data-skills').split(','); // Get skills of project

        if (skill === 'all' || projectSkills.includes(skill)) {
          project.style.display = 'block';  // Show matching projects
          project.style.opacity = '1';      // Fade them in
        } else {
          project.style.display = 'none';  // Hide non-matching projects
        }
      });
    }, 000); // Match the fade-out duration
  });
});
