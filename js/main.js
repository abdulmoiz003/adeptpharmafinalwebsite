/* ========================================
   ADEPT PHARMA - MAIN JAVASCRIPT
   ======================================== */

// Utility: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// HEADER & NAVIGATION
// ========================================

function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const navMenu = nav.querySelector('ul');
      navMenu.classList.toggle('show');
      hamburger.classList.toggle('active');

      if (!navMenu.classList.contains('show')) {
        nav.querySelectorAll('.nav-dropdown.open').forEach(openDropdown => {
          openDropdown.classList.remove('open');
        });
      }
    });

    // Close menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.querySelector('ul').classList.remove('show');
        hamburger.classList.remove('active');
        nav.querySelectorAll('.nav-dropdown.open').forEach(openDropdown => {
          openDropdown.classList.remove('open');
        });
      });
    });

    // Toggle dropdown submenus on mobile
    nav.querySelectorAll('.nav-dropdown > a').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          const dropdown = anchor.parentElement;

          if (!dropdown.classList.contains('open')) {
            event.preventDefault();
            nav.querySelectorAll('.nav-dropdown.open').forEach(openDropdown => {
              if (openDropdown !== dropdown) {
                openDropdown.classList.remove('open');
              }
            });
            dropdown.classList.add('open');
          }
        }
      });
    });
  }

  // Sticky header shadow on scroll
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, 10));
}

// ========================================
// FORM VALIDATION & SUBMISSION
// ========================================

function initForms() {
  const forms = document.querySelectorAll('form[data-form-type]');

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(form) {
  let isValid = true;
  const errors = {};

  // Get all required fields
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    const value = field.value.trim();

    // Clear previous error
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.form-error');
    if (existingError) existingError.remove();

    // Validate
    if (!value) {
      isValid = false;
      field.classList.add('error');
      errors[field.name] = 'This field is required';
      showFieldError(field, 'This field is required');
    } else if (field.type === 'email' && !validateEmail(value)) {
      isValid = false;
      field.classList.add('error');
      errors[field.name] = 'Please enter a valid email';
      showFieldError(field, 'Please enter a valid email');
    } else if (field.type === 'tel' && !/^[\d\s\-+()]+$/.test(value)) {
      isValid = false;
      field.classList.add('error');
      errors[field.name] = 'Please enter a valid phone number';
      showFieldError(field, 'Please enter a valid phone number');
    }
  });

  return isValid;
}

function showFieldError(field, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  field.parentElement.appendChild(errorDiv);
}

function handleFormSubmit(e) {
  const form = e.target;
  const formType = form.getAttribute('data-form-type');

  // Validate form
  if (!validateForm(form)) {
    e.preventDefault();
    console.log('Form validation failed');
    return;
  }

  if (formType === 'contact') {
    // Let the browser submit the form to the configured email endpoint.
    return;
  }

  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  data.formType = formType;
  data.submittedAt = new Date().toLocaleString();

  console.log('Form submitted:', data);
  showFormSuccess(form);
  form.reset();
  setTimeout(() => {
    window.location.href = '/pages/thank-you.html';
  }, 1000);
}


function showFormSuccess(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success';
  successDiv.innerHTML = `
    <strong>Success!</strong> Your message has been sent. Thank you for contacting us.
  `;
  form.parentElement.insertBefore(successDiv, form);
  form.style.display = 'none';
}

// Add alert styles
const style = document.createElement('style');
style.textContent = `
  .alert {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 24px;
    font-weight: 500;
  }
  
  .alert-success {
    background-color: #D4EDDA;
    color: #155724;
    border: 1px solid #C3E6CB;
  }
  
  .alert-error {
    background-color: #F8D7DA;
    color: #721C24;
    border: 1px solid #F5C6CB;
  }
`;
document.head.appendChild(style);

// ========================================
// COOKIE CONSENT BANNER
// ========================================

function initCookieConsent() {
  const cookieBanner = document.querySelector('.cookie-banner');
  if (!cookieBanner) return;

  // Check if user already accepted
  if (localStorage.getItem('cookieConsent')) {
    cookieBanner.classList.add('hidden');
    return;
  }

  const acceptBtn = cookieBanner.querySelector('.cookie-accept');
  const rejectBtn = cookieBanner.querySelector('.cookie-reject');

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.add('hidden');
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.add('hidden');
  });
}

// ========================================
// SCROLL ANIMATIONS (FADE UP)
// ========================================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// CAROUSEL / SLIDER
// ========================================

function initCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });
  }
}

// ========================================
// ACCORDION / COLLAPSIBLE
// ========================================

function initAccordion(accordionSelector) {
  const nodes = document.querySelectorAll(accordionSelector);
  const accordions = new Set();

  nodes.forEach(node => {
    if (node.classList.contains('accordion-item')) {
      accordions.add(node.parentElement);
    } else {
      accordions.add(node);
    }
  });

  accordions.forEach(accordion => {
    if (!accordion) return;
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const body = item.querySelector('.accordion-body');

      if (header && body) {
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all other items if not multi-expand
          if (!accordion.hasAttribute('data-multi-expand')) {
            items.forEach(i => {
              i.classList.remove('active');
              i.querySelector('.accordion-body').style.maxHeight = '0';
            });
          }

          // Toggle current item
          if (!isActive) {
            item.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px';
          } else {
            item.classList.remove('active');
            body.style.maxHeight = '0';
          }
        });

        // Set initial state
        if (item.classList.contains('active')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          body.style.maxHeight = '0';
        }
      }
    });
  });
}

// Add accordion styles
const accordionStyle = document.createElement('style');
accordionStyle.textContent = `
  .accordion-item {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;
  }
  
  .accordion-header {
    padding: 16px;
    background-color: var(--color-light-bg);
    cursor: pointer;
    font-weight: 600;
    color: var(--color-text-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: background-color 250ms ease;
  }
  
  .accordion-header:hover {
    background-color: var(--color-light-blue);
    color: var(--color-white);
  }
  
  .accordion-header::after {
    content: '▼';
    font-size: 12px;
    transition: transform 250ms ease;
    margin-left: 12px;
  }
  
  .accordion-item.active .accordion-header::after {
    transform: rotate(180deg);
  }
  
  .accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 250ms ease;
  }
  
  .accordion-body-content {
    padding: 16px;
    color: var(--color-text-muted);
    font-size: 15px;
    line-height: 1.6;
  }
`;
document.head.appendChild(accordionStyle);

// ========================================
// FILTER / CATEGORY SELECTOR
// ========================================

function initCategoryFilter(filterSelector, targetSelector) {
  // Support either passing a container selector (e.g. [data-category-filter])
  // or a selector that directly targets the filter buttons (e.g. .filter-btn)
  let filterNodes = document.querySelectorAll(filterSelector);
  if (!filterNodes || filterNodes.length === 0) return;

  // If the selector matched a single container that holds the buttons, find the buttons inside it
  let filterBtns;
  if (filterNodes.length === 1 && filterNodes[0].hasAttribute && filterNodes[0].hasAttribute('data-category-filter')) {
    filterBtns = filterNodes[0].querySelectorAll('.filter-btn, [data-filter]');
  } else {
    filterBtns = filterNodes;
  }

  const targetItems = document.querySelectorAll(targetSelector);
  if (!filterBtns || filterBtns.length === 0 || !targetItems || targetItems.length === 0) return;

  const applyFilter = (category, pushHash = false) => {
    // Update active state on buttons
    filterBtns.forEach(b => {
      const btnFilter = b.getAttribute('data-filter') || b.getAttribute('data-category');
      if (btnFilter === category) b.classList.add('active'); else b.classList.remove('active');
    });

    // Show/hide target items
    targetItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = '';
        setTimeout(() => item.classList.add('fade-up'), 10);
      } else {
        item.style.display = 'none';
        item.classList.remove('fade-up');
      }
    });

    // Optionally update the URL hash without scrolling the page
    if (pushHash) {
      if (category === 'all') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } else {
        history.replaceState(null, '', window.location.pathname + window.location.search + '#' + category);
      }
    }
  };

  // Wire up button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-filter') || (btn.getAttribute('href') || '').replace('#', '') || btn.getAttribute('data-category');
      if (!category) return;
      applyFilter(category, true);
    });
  });

  // Apply initial filter from hash if present
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    applyFilter(initialHash, false);
    // Wait for the page to render before forcing scroll
    requestAnimationFrame(() => {
      const hashTarget = document.getElementById(initialHash);
      if (hashTarget) {
        hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const el = document.querySelector('[data-category-filter]');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Listen for hash changes (e.g., navbar links)
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (h) {
      applyFilter(h, false);
      requestAnimationFrame(() => {
        const target = document.getElementById(h) || document.querySelector('[data-category-filter]');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      applyFilter('all', false);
      const target = document.querySelector('[data-category-filter]');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Add active button styling
const filterStyle = document.createElement('style');
filterStyle.textContent = `
  .filter-btn {
    padding: 10px 20px;
    border: 1px solid var(--color-border);
    background-color: var(--color-white);
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    transition: all 250ms ease;
  }
  
  .filter-btn:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
  
  .filter-btn.active {
    background-color: var(--color-accent);
    color: var(--color-white);
    border-color: var(--color-accent);
  }
`;
document.head.appendChild(filterStyle);

// ========================================
// LAZY LOAD IMAGES
// ========================================

function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initForms();
  initCookieConsent();
  initScrollAnimations();
  initLazyLoad();
  initCategoryFilter('.filter-btn', '[data-category]');

  // Initialize specific components (called on pages that use them)
  // initCarousel('.testimonials-carousel');
  // initAccordion('.faq-accordion');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll to element
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Add class to element
function addClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add(className);
  });
}

// Remove class from element
function removeClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.remove(className);
  });
}

// Toggle class
function toggleClass(selector, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.toggle(className);
  });
}

// Make functions globally available
window.scrollToElement = scrollToElement;
window.addClass = addClass;
window.removeClass = removeClass;
window.toggleClass = toggleClass;
window.initCarousel = initCarousel;
window.initAccordion = initAccordion;
window.initCategoryFilter = initCategoryFilter;
