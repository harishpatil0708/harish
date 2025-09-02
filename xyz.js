function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', theme);
  document.getElementById('theme-toggle').textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.querySelector('.nav-menu ul');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

const posts = [
  { title: 'First Post', date: '2025‑09‑01', content: 'Intro blog post content.' },
  { title: 'Another Post', date: '2025‑08‑15', content: 'More content here.' }
];

const blogContainer = document.querySelector('.blog-container');
posts.forEach(p => {
  const div = document.createElement('div');
  div.className = 'blog-post';
  div.innerHTML = `<h3>${p.title}</h3><small>${p.date}</small><p>${p.content}</p>`;
  blogContainer.appendChild(div);
});
