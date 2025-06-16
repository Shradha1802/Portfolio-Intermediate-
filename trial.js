  const radios = document.querySelectorAll('input[name="about_tab"]');
  const skill = document.querySelector('.about_skill');
  const experience = document.querySelector('.about_experience');
  const education = document.querySelector('.about_education');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      // Remove 'active' from all
      skill.classList.remove('active');
      experience.classList.remove('active');
      education.classList.remove('active');

      // Add 'active' to selected
      if (radio.value === "Skill") skill.classList.add('active');
      if (radio.value === "Experience") experience.classList.add('active');
      if (radio.value === "Education") education.classList.add('active');
    });
  });

  // Show Skill by default on page load
  document.getElementById("Skill").checked = true;
  skill.classList.add('active');

