document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          } else {
              entry.target.classList.remove("active");
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach(section => {
      observer.observe(section);
  });

  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          window.scrollTo({
              top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
              behavior: 'smooth'
          });
      });
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
  } else {
      scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', () => {
      const projectTitle = item.querySelector('h3').innerText;
      const projectDescription = item.querySelector('p').innerText;
      modalContent.innerHTML = `<h3>${projectTitle}</h3><p>${projectDescription}</p>`;
      modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';
});
