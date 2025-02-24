document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function () {
    const skill = this.getAttribute('data-skill'); // Get selected skill
    const projects = document.querySelectorAll('.grid-item'); // All projects

      // Show only matching projects
      projects.forEach(project => {
        const projectSkills = project.getAttribute('data-skills').split(','); // Get skills of project

        if (skill === 'all' || projectSkills.includes(skill)) {
          project.style.display = 'block';  // Show matching projects
          project.style.opacity = '1';
        } else {
          project.style.display = 'none';  // Hide non-matching projects
        }
      })
  });
});
