
const header = document.querySelector('[data-header]');

if (header) {
  header.innerHTML = `
    <div class="site-header">
      <div class="wrap nav">
        <a class="logo" href="index.html" aria-label="TRIPDOZ Home">
          <img class="brand-logo" src="assets/logo.png" alt="TRIPDOZ">
        </a>

        <nav class="nav-links" id="main-nav">
          <a href="index.html">Home</a>
          <a href="index.html#explore">Explore Egypt</a>
          <a href="index.html#features">Features</a>
          <a href="index.html#about">About</a>
          <a href="contact.html">Contact</a>
        </nav>

        <div class="nav-actions">
          <a class="btn btn-dark"
             href="https://tripdoz.expo.app"
             target="_blank"
             rel="noopener">
            Explore the App
          </a>
          <button class="menu-toggle"
                  aria-label="Toggle navigation"
                  aria-expanded="false">☰</button>
        </div>
      </div>
    </div>
  `;

  const menuButton = header.querySelector('.menu-toggle');

  menuButton.addEventListener('click', () => {
    const isOpen = header.querySelector('.nav-links')
      .classList.toggle('open');

    menuButton.setAttribute('aria-expanded', isOpen);
  });
}

const footer = document.querySelector('[data-footer]');

if (footer) {
  footer.innerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo" aria-label="TRIPDOZ Home">
              <img class="brand-logo" src="assets/logo.png" alt="TRIPDOZ">
            </a>
            <p class="tagline">Discover Egypt. Your Way.</p>
            <p>Your companion for discovering Egypt — from iconic landmarks to secret sanctuaries.</p>
          </div>

          <div>
            <h4>NAVIGATION</h4>
            <a href="index.html">Home</a>
            <a href="index.html#explore">Explore Egypt</a>
            <a href="index.html#features">Features</a>
            <a href="index.html#about">About</a>
          </div>

          <div>
            <h4>LEGAL & SUPPORT</h4>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms & Conditions</a>
            <a href="contact.html">Contact / Support</a>
          </div>
        </div>

        <div class="footer-bottom">
          <span>Copyright © 2026 TRIPDOZ. All rights reserved.</span>
          <span>Crafted with cultural reverence • Made by RIO</span>
        </div>
      </div>
    </footer>
  `;
}

const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    const d = new FormData(form);
    const subject = 'TRIPDOZ: ' + d.get('inquiry');

    const body = `Name: ${d.get('name')}
Email: ${d.get('email')}
Inquiry: ${d.get('inquiry')}

${d.get('message')}`;

    window.location.href =
      'mailto:tripdozapp@gmail.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);

    document.querySelector('#form-status').textContent =
      'Your email app should open with the message ready to send. Please press Send there to complete your inquiry.';
  });
}
