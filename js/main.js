// Centro Comunitário Sonho Real — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Dismissible top notice bar
  var noticeBar = document.getElementById('notice-bar');
  var noticeClose = document.querySelector('.notice-close');
  if (noticeBar && noticeClose) {
    noticeClose.addEventListener('click', function () {
      noticeBar.classList.add('is-hidden');
    });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form (static demo — no backend wired up yet)
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'A enviar a sua mensagem...';
      status.classList.remove('success');
      setTimeout(function () {
        status.textContent = 'Obrigado pela sua mensagem! Entraremos em contacto brevemente.';
        status.classList.add('success');
        form.reset();
      }, 700);
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
