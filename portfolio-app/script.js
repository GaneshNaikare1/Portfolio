// script.js - navigation, smooth scroll, and form validation (vanilla JS)

// Wait for DOM
document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', function(){
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click (for better UX)
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(navLinks.classList.contains('open')) navLinks.classList.remove('open');
    });
  });

  // Smooth scrolling for internal links (non-JS fallback exists via CSS)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId.length>1){
        e.preventDefault();
        const el = document.querySelector(targetId);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Simple form validation
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      // Basic validation checks
      if(!name.value.trim()) return showError(name,'Please enter your name');
      if(!validateEmail(email.value)) return showError(email,'Please enter a valid email');
      if(!message.value.trim()) return showError(message,'Please type a short message');
      // If all good, show success and reset
      alert('Thank you — your message was validated. Replace this alert with form submission logic.');
      form.reset();
    });
  }

  function showError(el,msg){
    el.focus();
    // Temporary alert is fine for this static template
    alert(msg);
  }

  function validateEmail(email){
    // Basic RFC-like check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
