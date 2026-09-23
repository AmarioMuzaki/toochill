  const menuItems = [
    {
      name: "Pancong Original",
      price: "Rp 7.000",
      desc: "Kue pancong klasik dengan pinggiran renyah dan tengah yang lumer hangat, gurih khas santan kelapa.",
      tags: ["Best seller", "Gurih"],
      icon: `<i data-lucide="cake-slice"></i>`
    },
    {
      name: "Pancong Keju",
      price: "Rp 10.000",
      desc: "Pancong lumer ditaburi keju parut melimpah di atasnya, gurih manis dalam satu gigitan.",
      tags: ["Favorit", "Gurih manis"],
      icon: `<i data-lucide="sparkles"></i>`
    },
    {
      name: "Pancong Nutella",
      price: "Rp 12.000",
      desc: "Siraman nutella premium di atas pancong hangat, ditambah taburan kacang untuk sensasi renyah.",
      tags: ["Cokelat", "Kacang"],
      icon: `<i data-lucide="droplets"></i>`
    },
    {
      name: "Pancong Nutella & Keju",
      price: "Rp 14.000",
      desc: "Kombinasi dua topping favorit — nutella lumer bertemu keju parut yang gurih. Manis dan gurih sekaligus.",
      tags: ["Kombinasi", "Rekomendasi"],
      icon: `<i data-lucide="layers-2"></i>`
    },
    {
      name: "Es Coklat Toochill",
      price: "Rp 10.000",
      desc: "Dibuat dari bubuk cocoa asli, bukan sasetan — creamy, pekat, dan menyegarkan di malam hari yang hangat.",
      tags: ["Dingin", "Cocoa asli"],
      icon: `<i data-lucide="cup-soda"></i>`
    },
    {
      name: "Paket Duo Chill",
      price: "Rp 16.000",
      desc: "Satu pancong original ditemani satu es coklat — paket pas untuk yang mau coba dua-duanya sekaligus.",
      tags: ["Paket hemat"],
      icon: `<i data-lucide="concierge-bell"></i>`
    }
  ];

  const grid = document.getElementById('menuGrid');
  menuItems.forEach((item, i) => {
    const card = document.createElement('button');
    card.className = 'menu-card';
    card.type = 'button';
    card.innerHTML = `
      <div class="icon-wrap">${item.icon}</div>
      <div>
        <h3>${item.name}</h3>
        <div class="price">${item.price}</div>
      </div>
      <p class="desc">${item.desc}</p>
      <span class="tap-hint">Ketuk untuk detail <i data-lucide="arrow-up-right"></i></span>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
  lucide.createIcons();

  const backdrop = document.getElementById('modalBackdrop');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');

  function openModal(i){
    const item = menuItems[i];
    modalIcon.innerHTML = item.icon;
    lucide.createIcons({nodes: [modalIcon]});
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;
    modalTags.innerHTML = item.tags.map(t => `<span>${t}</span>`).join('');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if(e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });
