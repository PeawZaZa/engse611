const p = document.querySelectorAll('#main p');

p.forEach((paragraph) => {
  paragraph.textContent = 'changing all P in div main';
});
