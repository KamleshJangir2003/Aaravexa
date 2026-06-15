// ── SHARED NAVBAR ──
function getNavbar(activePage) {
  // Detect if we are inside the services/ subfolder
  const inServices = window.location.pathname.includes('/services/');
  const base = inServices ? '../' : '';

  const categories = [
    {
      icon: 'fa-laptop-code', label: '💻 Development', color: '#167DFF',
      items: [
        { href: base+'services/website-development.html',  icon: 'fa-globe',          label: 'Website Development' },
        { href: base+'services/web-app-development.html',  icon: 'fa-window-restore', label: 'Web App Development' },
        { href: base+'services/mobile-app-development.html', icon: 'fa-mobile-screen', label: 'Mobile App Development' },
        { href: base+'services/custom-software.html',      icon: 'fa-gears',          label: 'Custom Software' },
        { href: base+'services/ecommerce-development.html', icon: 'fa-cart-shopping', label: 'E-Commerce Development' },
        { href: base+'services/api-development.html',      icon: 'fa-plug',           label: 'API Development & Integration' },
      ]
    },
    {
      icon: 'fa-brain', label: '🤖 AI & Automation', color: '#7eb8ff',
      items: [
        { href: base+'services/ai-chatbots.html',       icon: 'fa-robot',               label: 'AI Solutions' },
        { href: base+'services/ai-chatbots.html',       icon: 'fa-comment-dots',        label: 'AI Chatbots' },
        { href: base+'services/ai-automation.html',     icon: 'fa-wand-magic-sparkles', label: 'AI Automation' },
        { href: base+'services/generative-ai.html',     icon: 'fa-microchip',           label: 'Generative AI Integration' },
        { href: base+'services/business-automation.html', icon: 'fa-sitemap',           label: 'Business Automation' },
      ]
    },
    {
      icon: 'fa-pen-nib', label: '🎨 Design & Branding', color: '#43a8ff',
      items: [
        { href: base+'services/ui-ux-design.html',       icon: 'fa-pen-nib',  label: 'UI/UX Design' },
        { href: base+'services/logo-brand-identity.html', icon: 'fa-star',     label: 'Logo & Brand Identity' },
        { href: base+'services/graphic-design.html',      icon: 'fa-image',    label: 'Graphic Design' },
        { href: base+'services/landing-page-design.html', icon: 'fa-bullseye', label: 'Landing Page Design' },
      ]
    },
    {
      icon: 'fa-chart-line', label: '📈 Growth & Marketing', color: '#167DFF',
      items: [
        { href: base+'service-marketing.html',                 icon: 'fa-chart-bar',       label: 'Digital Marketing' },
        { href: base+'services/seo-optimization.html',         icon: 'fa-magnifying-glass', label: 'SEO Optimization' },
        { href: base+'services/social-media-management.html',  icon: 'fa-instagram',       label: 'Social Media Management' },
        { href: base+'services/performance-marketing.html',    icon: 'fa-bullhorn',        label: 'Performance Marketing' },
        { href: base+'services/content-strategy.html',         icon: 'fa-file-pen',        label: 'Content Strategy' },
      ]
    },
    {
      icon: 'fa-cloud', label: '☁️ Cloud & Infrastructure', color: '#7eb8ff',
      items: [
        { href: base+'services/aws-cloud-setup.html',    icon: 'fa-aws',    label: 'AWS / Cloud Setup', brand: true },
        { href: base+'services/devops-services.html',    icon: 'fa-docker', label: 'DevOps Services', brand: true },
        { href: base+'services/server-management.html',  icon: 'fa-server', label: 'Server Management' },
        { href: base+'services/hosting-deployment.html', icon: 'fa-rocket', label: 'Hosting & Deployment' },
      ]
    },
    {
      icon: 'fa-shield-halved', label: '🛡️ Support & Security', color: '#43a8ff',
      items: [
        { href: base+'services/website-maintenance.html',      icon: 'fa-wrench',                 label: 'Website Maintenance' },
        { href: base+'services/technical-support.html',        icon: 'fa-headset',                label: 'Technical Support' },
        { href: base+'services/security-audit.html',           icon: 'fa-magnifying-glass-chart', label: 'Security Audit' },
        { href: base+'services/performance-optimization.html', icon: 'fa-gauge-high',             label: 'Performance Optimization' },
      ]
    },
  ];

  const megaHtml = categories.map(cat => `
    <div class="mega-col">
      <div class="mega-cat-head">
        <i class="fa-solid ${cat.icon}" style="color:${cat.color}"></i>
        <span>${cat.label}</span>
      </div>
      <ul class="mega-list">
        ${cat.items.map(item => `
          <li>
            <a href="${item.href}">
              <i class="${item.brand ? 'fa-brands' : 'fa-solid'} ${item.icon}"></i>
              ${item.label}
            </a>
          </li>`).join('')}
      </ul>
    </div>`).join('');

  const pages = [
    { href: base+'about.html',     label: 'About' },
    { href: base+'portfolio.html', label: 'Portfolio' },
    { href: base+'blog.html',      label: 'Blog' },
    { href: base+'contact.html',   label: 'Contact' },
  ];

  const otherLinks = pages.map(p =>
    `<li><a href="${p.href}"${p.label === activePage ? ' class="nav-active"' : ''}>${p.label}</a></li>`
  ).join('');

  return `
  <nav class="navbar" id="navbar">
    <div class="container nav-inner">
      <a href="${base}index.html" class="logo">
        <img src="${base}image/aaravexa-logo-removebg-preview.png" alt="Aaravexa Technology" style="height:75px;width:auto;display:block;" />
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${base}index.html"${activePage === 'Home' ? ' class="nav-active"' : ''}>Home</a></li>
        <li class="has-dropdown">
          <a href="${base}services.html"${activePage === 'Services' ? ' class="nav-active"' : ''}>Services <i class="fa-solid fa-chevron-down" id="srvChevron" style="font-size:.6rem;margin-left:4px;transition:transform .3s;"></i></a>
          <div class="mega-dropdown">
            <div class="mega-grid">
              ${megaHtml}
            </div>
            <div class="mega-footer">
              <a href="${base}services.html"><i class="fa-solid fa-th-large"></i> View All Services →</a>
              <a href="${base}contact.html"><i class="fa-solid fa-rocket"></i> Get Free Consultation →</a>
            </div>
          </div>
        </li>
        ${otherLinks}
        <li><a href="${base}contact.html" class="btn-nav">Get Started</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

// ── SHARED FOOTER ──
function getFooter() {
  const inServices = window.location.pathname.includes('/services/');
  const base = inServices ? '../' : '';
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="${base}index.html" class="logo logo-footer">
            <img src="${base}image/footer-logo.png" alt="Aaravexa Technology" style="height:60px;width:auto;display:block;image-rendering:-webkit-optimize-contrast;image-rendering:high-quality;-ms-interpolation-mode:bicubic;" />
          </a>
          <p class="footer-tagline">Building the Future with AI</p>
          <p class="footer-desc">We craft digital solutions that drive real business growth — websites, apps, AI tools & cloud infrastructure.</p>
          <div class="footer-social">
            <a href="mailto:aaravexatechnologies@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel:+916378409986" title="Phone"><i class="fa-solid fa-phone"></i></a>
            <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Development</h5>
          <a href="${base}services/website-development.html">Website Development</a>
          <a href="${base}services/web-app-development.html">Web App Development</a>
          <a href="${base}services/mobile-app-development.html">Mobile App Development</a>
          <a href="${base}services/custom-software.html">Custom Software</a>
          <a href="${base}services/ecommerce-development.html">E-Commerce</a>
          <a href="${base}services/api-development.html">API Integration</a>
        </div>
        <div class="footer-col">
          <h5>AI & Design</h5>
          <a href="${base}services/ai-chatbots.html">AI Solutions</a>
          <a href="${base}services/ai-chatbots.html">AI Chatbots</a>
          <a href="${base}services/business-automation.html">Business Automation</a>
          <a href="${base}services/ui-ux-design.html">UI/UX Design</a>
          <a href="${base}services/logo-brand-identity.html">Logo & Branding</a>
          <a href="${base}services/aws-cloud-setup.html">Cloud & DevOps</a>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <a href="mailto:aaravexatechnologies@gmail.com">aaravexatechnologies@gmail.com</a>
          <a href="tel:+916378409986">+91 6378409986</a>
          <a href="${base}services/performance-marketing.html">Digital Marketing</a>
          <a href="${base}services/seo-optimization.html">SEO Optimization</a>
          <a href="${base}services/technical-support.html">Support & Security</a>
          <p style="color:rgba(255,255,255,.45);font-size:.82rem;margin-top:8px;">Mon–Sat, 9am–7pm IST</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Aaravexa Technology. All rights reserved.</p>
        <p>🚀 Web • App • AI Solutions &nbsp;|&nbsp; 💻 Software • Cloud • Automation</p>
      </div>
    </div>
  </footer>`;
}

// ── INIT ──
function initPage(activePage) {
  document.getElementById('navbar-placeholder').innerHTML = getNavbar(activePage);
  document.getElementById('footer-placeholder').innerHTML = getFooter();

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a:not(.has-dropdown > a)').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

  // Mobile mega-dropdown toggle
  const hasDropdown = navLinks.querySelector('.has-dropdown > a');
  if (hasDropdown) {
    hasDropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        hasDropdown.parentElement.classList.toggle('open');
      }
    });
  }

  // Chevron rotate
  const ddParent = navLinks.querySelector('.has-dropdown');
  if (ddParent) {
    const chevron = document.getElementById('srvChevron');
    ddParent.addEventListener('mouseenter', () => { if (chevron) chevron.style.transform = 'rotate(180deg)'; });
    ddParent.addEventListener('mouseleave', () => { if (chevron) chevron.style.transform = 'rotate(0deg)'; });
  }

  // Scroll animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    obs.observe(el);
  });
}
