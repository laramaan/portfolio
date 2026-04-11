document.addEventListener('DOMContentLoaded', () => {
    // Reload intercept (forces to home hero component on refresh)
    const navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (navEntry && navEntry.type === 'reload') {
        window.location.href = 'index.html#home';
    }

    // Scroll restoration & Scroll to top
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }

    // Custom smooth scroll utility with header offset handling
    const smoothScrollTo = (targetElement) => {
        const headerOffset = 100; // nav height offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    };

    // Scroll spy for active link
    const sections = document.querySelectorAll('section[id], header[id], div[id="blogs"]');
    const navLinks = document.querySelectorAll('.nav-links-container .nav-link');

    const updateActiveLink = () => {
        let scrollY = window.scrollY;
        let currentSectionId = '';
        
        sections.forEach(sec => {
            const sectionHeight = sec.offsetHeight;
            const sectionTop = sec.offsetTop - 200; // offset for nav height
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        
        // Handle bottom of page
        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 100) {
            currentSectionId = 'contact';
        } else if (scrollY < 200 && document.querySelector('#home')) {
            currentSectionId = 'home';
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                let targetId = href.split('#')[1];
                if (targetId && targetId === currentSectionId) {
                    link.className = 'nav-link text-yellow font-bold border-b-2 border-[#feb300] pb-1 hover:scale-105 transition-transform duration-200';
                } else if (targetId) {
                    link.className = 'nav-link text-white/80 hover:text-white transition-colors hover:scale-105 transition-transform duration-200';
                }
            }
        });
    };

    if (document.querySelector('#home')) {
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Initial check
    }

    // Smooth scroll intercept for identical page hash links
    document.querySelectorAll('a[href^="index.html#"], a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            let targetId = this.getAttribute('href');
            if (targetId.startsWith('index.html')) {
                // If we are already on index.html
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/portfolio/')) {
                    e.preventDefault();
                    targetId = targetId.substring(10); // get '#id'
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        smoothScrollTo(targetElement);
                        history.pushState(null, null, targetId);
                        setTimeout(updateActiveLink, 50);
                    }
                }
            } else if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    smoothScrollTo(targetElement);
                    history.pushState(null, null, targetId);
                    setTimeout(updateActiveLink, 50);
                }
            }
        });
    });

    // Services
    const servicesGrid = document.querySelector('#services-grid');
    if (servicesGrid && typeof portfolioData !== 'undefined') {
        servicesGrid.innerHTML = portfolioData.services.map(service => `
          <div class="bg-grey p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span class="material-symbols-outlined text-3xl text-green relative z-10">${service.icon}</span>
            </div>
            <h3 class="font-headline font-bold text-[22px] text-green mb-3">
              ${service.title}
            </h3>
            <p class="font-body text-green/60 leading-relaxed mb-6 text-[15px]">
              ${service.short_desc}
            </p>
            <a class="inline-flex items-center font-headline font-bold text-[15px] text-green transition-transform duration-300 group-hover:px-1"
              href="service.html?id=${service.id}">
              Learn more
              <span class="text-yellow ml-2">
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </span>
            </a>
          </div>
        `).join('');
    }

    // Projects
    const projectsGrid = document.querySelector('#projects-grid');
    if (projectsGrid && typeof portfolioData !== 'undefined') {
        projectsGrid.innerHTML = portfolioData.projects.map(project => `
          <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col h-full border border-black/5 group cursor-pointer" onclick="window.location.href='project.html?id=${project.id}'">
            <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-grey">
              <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="flex flex-wrap gap-3 mb-6">
              ${project.tags.map(tag => `<span class="bg-yellow text-green font-headline font-bold text-[13px] px-5 py-2 rounded-full">${tag}</span>`).join('')}
            </div>
            <div class="flex items-center justify-between mt-auto gap-4">
              <h3 class="text-2xl font-headline font-bold text-green leading-snug">${project.title}</h3>
              <div class="w-12 h-12 shrink-0 bg-green text-white rounded-full flex items-center justify-center shadow-md group-hover:bg-yellow transition-colors duration-300">
                <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>
        `).join('');
    }

    // Blogs
    const blogsGrid = document.querySelector('#blogs-grid');
    if (blogsGrid && typeof portfolioData !== 'undefined') {
        blogsGrid.innerHTML = portfolioData.blogs.map(blog => `
          <div class="group cursor-pointer" onclick="window.location.href='blog.html?id=${blog.id}'">
            <div class="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white">
              <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green font-bold text-[13px] px-4 py-2 rounded-full font-headline">
                ${blog.date}
              </div>
            </div>
            <div class="flex items-center gap-2 text-green/60 font-body text-[14px] mb-3">
              <span class="material-symbols-outlined text-[18px]">schedule</span>
              <span>${blog.time}</span>
            </div>
            <h3 class="font-headline font-bold text-[22px] text-green group-hover:text-yellow transition-colors leading-[1.3] mb-4">${blog.title}</h3>
            <p class="font-body text-green/70 leading-relaxed">${blog.content.substring(0, 100)}...</p>
          </div>
        `).join('');
    }

    // Testimonials
    const testimonialsGrid = document.querySelector('#testimonials-grid');
    if (testimonialsGrid && typeof portfolioData !== 'undefined') {
        testimonialsGrid.innerHTML = portfolioData.testimonials.map((test, index) => `
          <div class="bg-grey p-8 md:p-12 rounded-[2rem] flex flex-col justify-between h-full group transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
            <div>
              <div class="text-yellow mb-6">
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 opacity-50">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p class="font-headline text-[18px] md:text-[22px] text-green leading-relaxed font-bold tracking-tight mb-8">
                "${test.text}"
              </p>
            </div>
            <div class="flex items-center gap-4">
              <img src="${test.image}" alt="${test.name}" class="w-14 h-14 rounded-full object-cover shadow-sm" />
              <div>
                <h4 class="font-headline font-bold text-green text-[16px]">${test.name}</h4>
                <p class="font-body text-green/60 text-[14px]">${test.role}</p>
              </div>
            </div>
          </div>
        `).join('');
    }

    // FAQs
    const faqsContainer = document.querySelector('#faqs-container');
    if (faqsContainer && typeof portfolioData !== 'undefined') {
        faqsContainer.innerHTML = portfolioData.faqs.map((faq, idx) => `
          <details class="group bg-white/10 rounded-2xl overflow-hidden transition-all duration-300 open:bg-yellow open:text-green text-white" ${idx === 0 ? 'open' : ''}>
            <summary class="w-full p-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="font-headline text-lg font-bold">${faq.q}</span>
              <div class="relative w-6 h-6 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined absolute transition-opacity duration-200 group-open:opacity-0">add</span>
                <span class="material-symbols-outlined absolute opacity-0 transition-opacity duration-200 group-open:opacity-100">remove</span>
              </div>
            </summary>
            <div class="px-6 pb-6 text-sm leading-relaxed opacity-90 border-t border-transparent group-open:border-green/10 mt-2">
              ${faq.a}
            </div>
          </details>
        `).join('');
    }

    // Single Service Page
    const singleContainer = document.querySelector('#single-container');
    if (singleContainer && typeof portfolioData !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      const type = document.body.dataset.type; // service, project, or blog
      
      let dataList = [];
      if (type === 'service') dataList = portfolioData.services;
      else if (type === 'project') dataList = portfolioData.projects;
      else if (type === 'blog') dataList = portfolioData.blogs;

      const item = dataList.find(x => x.id === id);
      if (item) {
        let parentPageName = 'Home';
        let parentPageUrl = 'index.html';
        if (type === 'service') { parentPageName = 'Services'; parentPageUrl = 'services.html'; }
        if (type === 'project') { parentPageName = 'Projects'; parentPageUrl = 'projects.html'; }
        if (type === 'blog') { parentPageName = 'Blogs'; parentPageUrl = 'blogs.html'; }
        
        singleContainer.innerHTML = `
          <div class="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-6">
            <h1 class="font-headline font-bold text-4xl md:text-6xl text-green w-full md:max-w-2xl">${item.title}</h1>
            <a href="${parentPageUrl}" class="text-green/80 hover:text-green font-body flex items-center gap-2 mt-2 shrink-0"><span class="material-symbols-outlined">arrow_back</span> ${parentPageName}</a>
          </div>
          ${item.image ? `<img src="\${item.image}" alt="\${item.title}" class="w-full rounded-2xl mb-8 shadow-sm">` : ''}
          ${item.date ? `<p class="font-body text-green/60 mb-8"><span class="font-bold">\${item.date}</span> • \${item.time}</p>` : ''}
          <div class="font-body text-green/80 text-lg leading-relaxed"><p>${item.content}</p></div>
        `;
      } else {
        singleContainer.innerHTML = `<p class="text-xl text-center text-green">Item not found.</p>`;
      }
    }
});
