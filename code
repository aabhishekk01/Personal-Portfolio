<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Personal Portfolio - Abhishek Tripathi</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --font-family: 'Poppins', sans-serif;
      --color-bg: #ffffff;
      --color-text: #6b7280;
      --color-heading: #111827;
      --color-primary: #000000;
      --color-primary-hover: #222222;
      --shadow-light: 0 4px 8px rgba(0,0,0,0.05);
      --border-radius: 0.75rem;
      --transition-speed: 0.3s;
      --max-width: 1200px;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: var(--font-family);
      background-color: var(--color-bg);
      color: var(--color-text);
      line-height: 1.6;
      font-size: 17px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      color: inherit;
      text-decoration: none;
      outline-offset: 3px;
      transition: color var(--transition-speed);
    }
    a:hover, a:focus {
      color: var(--color-primary-hover);
      text-decoration: underline;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--color-bg);
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      backdrop-filter: saturate(180%) blur(12px);
    }
    nav {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-weight: 800;
      font-size: 1.5rem;
      color: var(--color-primary);
      letter-spacing: -0.02em;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      font-weight: 600;
      font-size: 1rem;
    }
    .nav-links a {
      padding: 0.35rem 0.5rem;
      border-radius: var(--border-radius);
      transition: background-color var(--transition-speed), color var(--transition-speed);
    }
    .nav-links a:hover, .nav-links a:focus {
      background-color: var(--color-primary);
      color: var(--color-bg);
      outline: none;
    }

    main {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 3rem 2rem 6rem;
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }

    /* Hero Section */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 4rem;
    }
    .hero h1 {
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.1;
      margin: 0 0 1rem 0;
      color: var(--color-heading);
      max-width: 700px;
    }
    .hero p {
      font-size: 1.25rem;
      color: var(--color-text);
      max-width: 600px;
      margin-bottom: 2rem;
    }
    .hero .btn-primary {
      background-color: var(--color-primary);
      color: var(--color-bg);
      padding: 1rem 2rem;
      font-weight: 700;
      font-size: 1.125rem;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      box-shadow: var(--shadow-light);
      transition: background-color var(--transition-speed), transform 0.3s ease;
      user-select: none;
    }
    .hero .btn-primary:hover,
    .hero .btn-primary:focus {
      background-color: var(--color-primary-hover);
      transform: scale(1.05);
      outline: none;
    }

    /* About Section */
    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    .about-text h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--color-heading);
    }
    .about-text p {
      font-size: 1.1rem;
      max-width: 450px;
      color: var(--color-text);
      line-height: 1.5;
    }
    .about-photo {
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1/1;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-light);
      background: linear-gradient(135deg, #ccc, #eee);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #999;
      user-select: none;
    }

    /* Projects Section */
    .projects {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
    .projects h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--color-heading);
      margin-bottom: 2rem;
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
      gap: 2rem;
    }
    .project-card {
      background: var(--color-bg);
      box-shadow: var(--shadow-light);
      border-radius: var(--border-radius);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: box-shadow var(--transition-speed), transform var(--transition-speed);
      cursor: pointer;
    }
    .project-card:hover,
    .project-card:focus-within {
      box-shadow: 0 0 15px rgba(0,0,0,0.12);
      transform: translateY(-5px);
      outline: none;
    }
    .project-title {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--color-primary);
      margin: 0;
    }
    .project-description {
      font-size: 1rem;
      color: var(--color-text);
      line-height: 1.3;
      flex-grow: 1;
    }
    .project-link {
      align-self: flex-start;
      font-weight: 600;
      color: var(--color-primary);
      border-bottom: 1px solid transparent;
      transition: border-color var(--transition-speed);
    }
    .project-link:hover,
    .project-link:focus {
      border-color: var(--color-primary);
      outline: none;
    }

    /* Contact Section */
    .contact {
      max-width: 500px;
      margin: 0 auto;
    }
    .contact h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--color-heading);
      margin-bottom: 2rem;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    label {
      position: relative;
      display: block;
      font-weight: 600;
      color: var(--color-primary);
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      user-select: none;
    }
    input, textarea {
      width: 100%;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 1rem;
      border: 1.5px solid #d1d5db;
      border-radius: var(--border-radius);
      transition: border-color var(--transition-speed), box-shadow var(--transition-speed);
      font-family: var(--font-family);
      resize: vertical;
      background: #fff;
      color: var(--color-heading);
    }
    input:focus, textarea:focus {
      border-color: var(--color-primary);
      box-shadow: 0 0 5px 2px rgba(0,0,0,0.08);
      outline: none;
    }
    textarea {
      min-height: 120px;
    }
    button[type="submit"] {
      background-color: var(--color-primary);
      color: var(--color-bg);
      padding: 1rem 2rem;
      font-weight: 700;
      font-size: 1.125rem;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      box-shadow: var(--shadow-light);
      transition: background-color var(--transition-speed), transform 0.3s ease;
      user-select: none;
    }
    button[type="submit"]:hover,
    button[type="submit"]:focus {
      background-color: var(--color-primary-hover);
      transform: scale(1.05);
      outline: none;
    }
    .success-message {
      margin-top: 1rem;
      color: green;
      font-weight: 600;
      font-size: 1rem;
      text-align: center;
      display: none;
    }

    /* Footer */
    footer {
      background: #f9fafb;
      padding: 2rem 2rem;
      text-align: center;
      font-size: 0.9rem;
      color: #9ca3af;
    }
    .social-links {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }
    .social-links a {
      display: inline-block;
      color: var(--color-primary);
      transition: color var(--transition-speed);
    }
    .social-links a:hover,
    .social-links a:focus {
      color: var(--color-primary-hover);
      outline: none;
    }
    .social-icon {
      width: 24px;
      height: 24px;
      fill: currentColor;
      display: inline-block;
      vertical-align: middle;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .about {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .about-text p {
        margin-left: auto;
        margin-right: auto;
      }
      main {
        padding: 2rem 1rem 4rem;
      }
      nav {
        padding: 1rem 1rem;
      }
      .hero h1 {
        font-size: 2.25rem;
      }
      .hero p {
        font-size: 1.1rem;
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Primary">
      <a href="https://www.instagram.com/_.aabhishekk.__/?__pwa=1" class="logo" aria-label="Homepage">Abhishek Tripathi</a>
      <div class="nav-links">
        <a href="#about" tabindex="0">About</a>
        <a href="#projects" tabindex="0">Projects</a>
        <a href="#contact" tabindex="0">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero" role="banner" aria-label="Introduction">
      <h1>Hi, I'm Abhishek Tripathi — a passionate Frontend Developer</h1>
      <p>I build modern, elegant digital experiences that delight users and drive value.</p>
      <button class="btn-primary" type="button" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})" aria-label="Scroll to contact form">Get In Touch</button>
    </section>

    <section id="about" class="about" aria-labelledby="about-title">
      <div class="about-text">
        <h2 id="about-title">About Me</h2>
        <p>I am a frontend developer specializing in creating responsive and user-friendly websites and web applications. I enjoy crafting seamless user experiences with attention to detail and modern design principles.</p>
      </div>
      <div class="about-photo" aria-label="Photo placeholder">
        <img src="https://logodix.com/logo/1287812.png" alt="Abhishek Tripathi"/>
        <span></span>
      </div>
    </section>

    <section id="projects" class="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">My Projects</h2>
      <div class="project-grid">
        <article class="project-card" tabindex="0" aria-labelledby="project1-title" aria-describedby="project1-desc">
          <h3 class="project-title" id="project1-title">Project Alpha</h3>
          <p class="project-description" id="project1-desc">A sleek portfolio website with interactive features and smooth animations.</p>
          <a href="#" class="project-link" aria-label="View Project Alpha details">View Details →</a>
        </article>
        <article class="project-card" tabindex="0" aria-labelledby="project2-title" aria-describedby="project2-desc">
          <h3 class="project-title" id="project2-title">Project Beta</h3>
          <p class="project-description" id="project2-desc">An e-commerce web application with full shopping cart functionality.</p>
          <a href="#" class="project-link" aria-label="View Project Beta details">View Details →</a>
        </article>
        <article class="project-card" tabindex="0" aria-labelledby="project3-title" aria-describedby="project3-desc">
          <h3 class="project-title" id="project3-title">Project Gamma</h3>
          <p class="project-description" id="project3-desc">A blogging platform focused on clean design and user engagement.</p>
          <a href="#" class="project-link" aria-label="View Project Gamma details">View Details →</a>
        </article>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Me</h2>
      <form id="contactForm" novalidate>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required aria-required="true" aria-describedby="nameError" />
        <span id="nameError" style="color:#b91c1c; display:none; font-size:0.9rem;">Please enter your name.</span>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required aria-required="true" aria-describedby="emailError" />
        <span id="emailError" style="color:#b91c1c; display:none; font-size:0.9rem;">Please enter a valid email address.</span>

        <label for="message">Message</label>
        <textarea id="message" name="message" required aria-required="true" aria-describedby="messageError"></textarea>
        <span id="messageError" style="color:#b91c1c; display:none; font-size:0.9rem;">Please enter your message.</span>

        <button type="submit" aria-live="polite">Send Message</button>
        <div class="success-message" role="alert" aria-live="polite" id="successMessage">Thank you! Your message has been sent.</div>
      </form>
    </section>
  </main>

  <footer>
    <div class="social-links" aria-label="Social Media Links">
      <a href="https://github.com/aabhishekk01" aria-label="GitHub" tabindex="0">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .297a12 12 0 00-3.795 23.406c.6.11.82-.26.82-.58v-2.234c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.083-.73.083-.73 1.205.084 1.839 1.24 1.839 1.24 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.606-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.125-.303-.535-1.523.12-3.176 0 0 1.01-.323 3.3 1.23a11.48 11.48 0 016.003 0c2.29-1.553 3.3-1.23 3.3-1.23.655 1.653.245 2.873.12 3.176.77.84 1.24 1.91 1.24 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.815 1.1.815 2.22v3.296c0 .32.21.7.82.58A12.005 12.005 0 0012 .297"></path></svg>
      </a>
      <a href="https://www.linkedin.com/in/abhishek-tripathi-89744531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" tabindex="0">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.451 20.452h-3.554v-5.569c0-1.33-.027-3.041-1.852-3.041-1.853 0-2.136 1.445-2.136 2.939v5.67h-3.553V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.264 2.368 4.264 5.448v6.293zM5.337 7.433a2.065 2.065 0 01-2.065-2.066 2.065 2.065 0 114.13 0 2.065 2.065 0 01-2.065 2.066zm1.778 13.019H3.56V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .78 0 1.743v20.514C0 23.213.792 24 1.771 24h20.451c.978 0 1.778-.787 1.778-1.743V1.743C24 .78 23.204 0 22.225 0z"/></svg>
      </a>
      <a href="https://x.com/abhishek_umari" aria-label="Twitter" tabindex="0">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.56-2.001.96-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.204-4.928 4.927 0 .39.045.765.127 1.124-4.094-.205-7.725-2.168-10.158-5.144-.423.733-.666 1.582-.666 2.488 0 1.713.872 3.226 2.188 4.11-.809-.025-1.571-.248-2.234-.616v.06c0 2.397 1.705 4.393 3.953 4.844-.413.112-.848.17-1.296.17-.317 0-.626-.03-.926-.086.626 1.956 2.444 3.379 4.6 3.42-1.68 1.316-3.808 2.1-6.116 2.1-.397 0-.788-.024-1.17-.069 2.179 1.399 4.768 2.215 7.557 2.215 9.054 0 14.005-7.496 14.005-13.986 0-.21 0-.423-.015-.635.964-.695 1.8-1.562 2.462-2.549z"/></svg>
      </a>
    </div>
    &copy; 2025 Abhishek Tripathi. All rights reserved.
  </footer>

  <script>
    (function() {
      const form = document.getElementById('contactForm');
      const nameInput = form.elements['name'];
      const emailInput = form.elements['email'];
      const messageInput = form.elements['message'];

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const successMessage = document.getElementById('successMessage');

      function validateEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate name
        if (!nameInput.value.trim()) {
          nameError.style.display = 'block';
          isValid = false;
        } else {
          nameError.style.display = 'none';
        }

        // Validate email
        if (!validateEmail(emailInput.value.trim())) {
          emailError.style.display = 'block';
          isValid = false;
        } else {
          emailError.style.display = 'none';
        }

        // Validate message
        if (!messageInput.value.trim()) {
          messageError.style.display = 'block';
          isValid = false;
        } else {
          messageError.style.display = 'none';
        }

        if (isValid) {
          // Simulate sending message
          successMessage.style.display = 'block';
          form.reset();
          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      });
    })();
  </script>
</body>
</html>
