(function () {
  /* ── Data ─────────────────────────────────────────────────────── */
  const page = window.location.pathname.split('/').pop() || '';

  const foundations = [
    { href: 'colors.html',     icon: '<circle cx="12" cy="12" r="5"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',    label: 'Colors' },
    { href: 'typography.html', icon: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',                                                   label: 'Typography' },
    { href: 'spacing.html',    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',                                                                                           label: 'Spacing' },
    { href: 'effects.html',    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',                                      label: 'Effects' },
  ];

  const components = [
    { href: 'accordion.html',        icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',                                                                                                                    label: 'Accordion' },
    { href: 'alert.html',            icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',                                                                                           label: 'Alert' },
    { href: 'alert-dialog.html',     icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',                                                                                                                      label: 'Alert Dialog' },
    { href: 'avatar.html',           icon: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',                                                                                                                                      label: 'Avatar' },
    { href: 'badge.html',            icon: '<rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><path d="M8 3v6M16 3v6"/>',                                                                                             label: 'Badge' },
    { href: 'breadcrumb.html',       icon: '<polyline points="9 18 15 12 9 6"/>',                                                                                                                                                                         label: 'Breadcrumb' },
    { href: 'button.html',           icon: '<rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="16 2 12 7 8 2"/>',                                                                                                                         label: 'Button' },
    { href: 'card.html',             icon: '<rect x="3" y="3" width="18" height="18" rx="2"/>',                                                                                                                                                           label: 'Card' },
    { href: 'checkbox.html',         icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>',                                                                                                                                  label: 'Checkbox' },
    { href: 'collapsible.html',      icon: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20"/><polyline points="8 13 12 17 16 13"/>',                                                                                                   label: 'Collapsible' },
    { href: 'combobox.html',         icon: '<path d="M6 9l6 6 6-6"/><rect x="3" y="3" width="18" height="18" rx="2"/>',                                                                                                                                   label: 'Combobox' },
    { href: 'command.html',          icon: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3h12"/>',                                              label: 'Command' },
    { href: 'context-menu.html',     icon: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',                                                                                                               label: 'Context Menu' },
    { href: 'data-table.html',       icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18"/>',                                                                                                                        label: 'Data Table' },
    { href: 'date-picker.html',      icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',                                          label: 'Date Picker' },
    { href: 'dialog.html',           icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9h20"/>',                                                                                                                                 label: 'Dialog' },
    { href: 'drawer.html',           icon: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 15h20"/>',                                                                                                                                       label: 'Drawer' },
    { href: 'dropdown-menu.html',    icon: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>', label: 'Dropdown Menu' },
    { href: 'form.html',             icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',                    label: 'Form' },
    { href: 'hover-card.html',       icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',                                                                                                   label: 'Hover Card' },
    { href: 'input.html',            icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',                                                                                                                                  label: 'Input' },
    { href: 'label.html',            icon: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',                                                                         label: 'Label' },
    { href: 'menubar.html',          icon: '<rect x="2" y="8" width="20" height="8" rx="1"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><line x1="14" y1="12" x2="14.01" y2="12"/>',                              label: 'Menubar' },
    { href: 'navigation-menu.html',  icon: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',                                                                                          label: 'Navigation Menu' },
    { href: 'pagination.html',       icon: '<polyline points="15 18 9 12 15 6"/><polyline points="20 18 14 12 20 6"/>',                                                                                                                                   label: 'Pagination' },
    { href: 'popover.html',          icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',    label: 'Popover' },
    { href: 'progress.html',         icon: '<line x1="2" y1="12" x2="22" y2="12"/><circle cx="9" cy="12" r="3"/>',                                                                                                                                       label: 'Progress' },
    { href: 'radio-group.html',      icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',                                                                                                                                            label: 'Radio Group' },
    { href: 'resizable.html',        icon: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',                                                         label: 'Resizable' },
    { href: 'scroll-area.html',      icon: '<rect x="2" y="2" width="20" height="20" rx="2"/><line x1="18" y1="6" x2="18" y2="18"/>',                                                                                                                    label: 'Scroll Area' },
    { href: 'select.html',           icon: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>', label: 'Select' },
    { href: 'separator.html',        icon: '<line x1="2" y1="12" x2="22" y2="12"/>',                                                                                                                                                                     label: 'Separator' },
    { href: 'sheet.html',            icon: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M16 3v18"/>',                                                                                                                                       label: 'Sheet' },
    { href: 'skeleton.html',         icon: '<rect x="3" y="4" width="18" height="4" rx="2"/><rect x="3" y="12" width="12" height="4" rx="2"/><rect x="3" y="20" width="8" height="4" rx="2"/>',                                                          label: 'Skeleton' },
    { href: 'slider.html',           icon: '<line x1="2" y1="12" x2="22" y2="12"/><circle cx="8" cy="12" r="3"/>',                                                                                                                                       label: 'Slider' },
    { href: 'switch.html',           icon: '<rect x="2" y="8" width="20" height="8" rx="4"/><circle cx="8" cy="12" r="3"/>',                                                                                                                             label: 'Switch' },
    { href: 'table.html',            icon: '<path d="M21 3H3v7h18V3zM21 14H3v7h18v-7z"/>',                                                                                                                                                               label: 'Table' },
    { href: 'tabs.html',             icon: '<rect x="2" y="6" width="20" height="16" rx="2"/><path d="M2 10h20M6 6V3M12 6V3"/>',                                                                                                                         label: 'Tabs' },
    { href: 'textarea.html',         icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/>',                                        label: 'Textarea' },
    { href: 'toast.html',            icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',                                                                                                                                  label: 'Toast' },
    { href: 'toggle.html',           icon: '<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M21 12H3"/>',                                                                                                                                        label: 'Toggle' },
    { href: 'toggle-group.html',     icon: '<rect x="2" y="8" width="6" height="8" rx="1"/><rect x="10" y="8" width="6" height="8" rx="1"/><rect x="18" y="8" width="6" height="8" rx="1"/>',                                                            label: 'Toggle Group' },
    { href: 'tooltip.html',          icon: '<path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M12 8v4M12 16h.01"/>',                                                                                              label: 'Tooltip' },
  ];

  const gettingStarted = [
    { href: 'introduction.html', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',                                                                                         label: 'Introduction' },
    { href: 'installation.html', icon: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',                                                                                                                                             label: 'Installation' },
    { href: 'theming.html',      icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 1 0 4.93 19.07"/>',                                                                                                                                         label: 'Theming' },
  ];

  function item(href, icon, label) {
    const active = href === page ? ' active' : '';
    const svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>`;
    return `<a class="sidebar-item${active}" href="${href}">${svg}${label}</a>`;
  }

  /* ── Inject sidebar HTML ───────────────────────────────────────── */
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </div>
      <div class="sidebar-brand">
        <span class="sidebar-brand-name">Design System</span>
        <span class="sidebar-brand-sub">v1.0.0</span>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-group">
        <span class="sidebar-group-label">Getting Started</span>
        ${gettingStarted.map(g => item(g.href, g.icon, g.label)).join('\n        ')}
      </div>
      <div class="sidebar-separator"></div>
      <div class="sidebar-group">
        <span class="sidebar-group-label">Foundations</span>
        ${foundations.map(f => item(f.href, f.icon, f.label)).join('\n        ')}
      </div>
      <div class="sidebar-separator"></div>
      <div class="sidebar-group">
        <span class="sidebar-group-label">Components</span>
        ${components.map(c => item(c.href, c.icon, c.label)).join('\n        ')}
      </div>
    </nav>
    <div class="sidebar-footer">
      <a class="sidebar-footer-item" href="https://ui.shadcn.com" target="_blank">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        shadcn/ui Docs
      </a>
    </div>`;

  /* ── Toggle / close ────────────────────────────────────────────── */
  var hamburgerBtn = null;

  function toggleSidebar() {
    var isOpen = sidebar.classList.toggle('open');
    var overlay = document.getElementById('overlay');
    if (overlay) overlay.classList.toggle('open', isOpen);
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    var overlay = document.getElementById('overlay');
    if (overlay) overlay.classList.remove('open');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  window.toggleSidebar = toggleSidebar;
  window.closeSidebar  = closeSidebar;

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  /* Close sidebar after link tap on mobile */
  sidebar.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (link && window.matchMedia('(max-width: 768px)').matches) {
      closeSidebar();
    }
  });

  /* ── Hamburger button (injected into topbar on mobile) ─────────── */
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'topbar-hamburger';
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-controls', 'sidebar');
    hamburgerBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        '<line x1="3" y1="6" x2="21" y2="6"/>' +
        '<line x1="3" y1="12" x2="21" y2="12"/>' +
        '<line x1="3" y1="18" x2="21" y2="18"/>' +
      '</svg>';
    hamburgerBtn.addEventListener('click', toggleSidebar);
    topbar.insertBefore(hamburgerBtn, topbar.firstChild);
  }

  /* ── Inject responsive CSS ─────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    /* Hamburger button — hidden on desktop, shown on mobile */
    '.topbar-hamburger{display:none;align-items:center;justify-content:center;',
    'width:36px;height:36px;flex-shrink:0;border:none;background:none;cursor:pointer;',
    'color:hsl(var(--foreground));border-radius:var(--radius-md);}',
    '.topbar-hamburger:hover{background:hsl(var(--muted));}',
    '.topbar-hamburger svg{width:20px;height:20px;}',

    /* Desktop: sidebar already sticky via existing CSS.               */
    /* Guarantee main area doesn't clip the sticky sidebar.            */
    '@media(min-width:769px){',
    'body{overflow:hidden;}',
    '.main{overflow-y:auto;height:100vh;}',
    '}',

    /* Mobile: drawer */
    '@media(max-width:768px){',
    '.topbar-hamburger{display:flex;}',
    /* Push topbar actions so breadcrumb doesn't collide with buttons */
    '.topbar{padding:0 1rem;}',
    /* Sidebar slides in as a drawer */
    '.sidebar{position:fixed;top:0;left:0;height:100vh;z-index:40;',
    'transform:translateX(-100%);',
    'transition:transform var(--duration-300,300ms) var(--easing-out,ease-out);',
    'box-shadow:var(--shadow-xl,0 20px 60px rgba(0,0,0,.3));}',
    '.sidebar.open{transform:translateX(0);}',
    /* Overlay behind drawer */
    '.sidebar-overlay{display:none;position:fixed;inset:0;z-index:30;',
    'background:rgba(0,0,0,.45);backdrop-filter:blur(2px);}',
    '.sidebar-overlay.open{display:block;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  /* ── Scroll-position preservation ─────────────────────────────── */
  var SCROLL_KEY = 'ds-sidebar-scroll';

  /* Restore saved scroll, or scroll active item into view */
  var saved = sessionStorage.getItem(SCROLL_KEY);
  if (saved !== null) {
    sidebar.scrollTop = parseInt(saved, 10) || 0;
  } else {
    var activeItem = sidebar.querySelector('.sidebar-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  }

  /* Save scroll before leaving page */
  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem(SCROLL_KEY, String(sidebar.scrollTop));
  });

})();
