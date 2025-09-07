// Typing Effect for Hero Section
const typingElement = document.querySelector('.typing');
const text = "I build amazing web experiences.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  typeWriter();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Contact Form Submission (Basic)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});
