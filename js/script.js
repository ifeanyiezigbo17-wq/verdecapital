here// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(function (i) {
        i.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ===== Smooth Scroll for Anchor Links =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after clicking a link
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });

  // ===== Navbar Background on Scroll =====
  const header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== Simple Form Validation (Login/Register) =====
  const forms = document.querySelectorAll('form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;
      const inputs = form.querySelectorAll('input[required]');

      inputs.forEach(function (input) {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#e53935';
        } else {
          input.style.borderColor = '';
        }
      });

      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          valid = false;
          emailInput.style.borderColor = '#e53935';
        }
      }

      const passwordInputs = form.querySelectorAll('input[type="password"]');
      if (passwordInputs.length === 2) {
        if (passwordInputs[0].value !== passwordInputs[1].value) {
          valid = false;
          passwordInputs[1].style.borderColor = '#e53935';
          alert('Passwords do not match.');
        }
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  });
});
