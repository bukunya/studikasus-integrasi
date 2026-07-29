const studiKasusUnggulan = [
  {
    name: "Manufaktur",
    industry: "Industri Manufaktur",
    company: "PT Maju Manufaktur Nusantara",
    description:
      "Transformasi operasional pabrik menuju industri 4.0 dengan visibilitas data end-to-end.",
    challenge:
      "Proses produksi masih mengandalkan pencatatan manual yang rentan kesalahan, menyebabkan data tidak real-time dan menyulitkan pengambilan keputusan strategis saat terjadi bottleneck di lantai pabrik.",
    solution:
      "Implementasi sistem ERP terintegrasi dengan modul monitoring produksi IoT, memberikan dashboard analitik real-time untuk melacak OEE (Overall Equipment Effectiveness) dan status inventori.",
    implementation:
      "Perusahaan berhasil menghilangkan silo data, mempercepat respon terhadap masalah mesin, dan mengoptimalkan kapasitas produksi secara keseluruhan dalam waktu 6 bulan implementasi.",
    impact: [
      {
        desc: "Efisiensi Produksi",
        value: "+35%",
      },
      {
        desc: "Downtime Mesin",
        value: "-40%",
      },
      {
        desc: "Akurasi Inventory",
        value: "99%",
      },
    ],
    caseStudyUrl: "https://example.com",
  },
  {
    name: "Distribusi",
    industry: "Industri Distribusi",
    company: "PT Maju Distribusi Nusantara",
    description:
      "Transformasi operasional pabrik menuju distribusi 4.0 dengan visibilitas data end-to-end.",
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    implementation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    impact: [
      {
        desc: "Efisiensi Distribusi",
        value: "+35%",
      },
      {
        desc: "Downtime Kendaraan",
        value: "-40%",
      },
      {
        desc: "Akurasi Inventory",
        value: "100%",
      },
    ],
    caseStudyUrl: "https://example.com",
  },
  {
    name: "Retail",
    industry: "Industri Retail",
    company: "PT Maju Retail Nusantara",
    description:
      "Transformasi operasional pabrik menuju retail 4.0 dengan visibilitas data end-to-end.",
    challenge:
      "Vestibulum convallis ex et turpis sodales, ac cursus arcu aliquam. Ut ut turpis turpis. Sed id volutpat nulla, ut blandit eros.",
    solution:
      "Vestibulum convallis ex et turpis sodales, ac cursus arcu aliquam. Ut ut turpis turpis. Sed id volutpat nulla, ut blandit eros.",
    implementation:
      "Vestibulum convallis ex et turpis sodales, ac cursus arcu aliquam. Ut ut turpis turpis. Sed id volutpat nulla, ut blandit eros.",
    impact: [
      {
        desc: "Efisiensi Retail",
        value: "+35%",
      },
      {
        desc: "Downtime Etalase",
        value: "-40%",
      },
      {
        desc: "Akurasi Inventory",
        value: "101%",
      },
    ],
    caseStudyUrl: "https://example.com",
  },
];

function renderCaseStudy(index) {
  const data = studiKasusUnggulan[index];

  document.getElementById("h-industry").textContent = data.industry;
  document.getElementById("h-company").textContent = data.company;
  document.getElementById("h-description").textContent = data.description;
  document.getElementById("h-challenge").textContent = data.challenge;
  document.getElementById("h-solution").textContent = data.solution;
  document.getElementById("h-implementation").textContent = data.implementation;
  document.getElementById("h-link").href = data.caseStudyUrl;

  const impactContainer = document.getElementById("h-impact");
  impactContainer.innerHTML = data.impact
    .map(
      (item) => `
      <div>
        <h1 class="DMS-text-green">
          ${item.value}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-up-right-icon lucide-move-up-right"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </h1>
        <p>${item.desc}</p>
      </div>
    `,
    )
    .join("");
}

function initTabs() {
  const buttons = document.querySelectorAll(".DMS-button-group button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const clickedIndex = parseInt(e.target.getAttribute("data-index"), 10);

      buttons.forEach((btn) => btn.classList.remove("DMS-button-active"));
      e.target.classList.add("DMS-button-active");

      renderCaseStudy(clickedIndex);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderCaseStudy(0);
});

const metodologi = [
  {
    icon: "",
    name: "Analisis Kebutuhan",
    description:
      "Kami memulai dengan audit mendalam terhadap proses bisnis Anda saat ini. Tim konsultan kami akan mengidentifikasi bottleneck, inefisiensi, dan peluang perbaikan untuk merumuskan strategi transformasi yang tepat sasaran.",
  },
  {
    icon: "",
    name: "Perancangan Solusi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "",
    name: "Implementasi",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: "",
    name: "Optimisasi",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const industri = [
  {
    icon: "",
    name: "Manufaktur",
    description:
      "Meningkatkan OEE rata-rata sebesar 25% di lebih dari 40 pabrik berskala nasional.",
  },
  {
    icon: "",
    name: "Distribusi",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: "",
    name: "Retail",
    description: "consectetur adipiscing elit.",
  },
  {
    icon: "",
    name: "Logistik",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "",
    name: "Keuangan",
    description: "Ut enim ad minim veniam",
  },
  {
    icon: "",
    name: "Kesehatan",
    description:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "",
    name: "Pendidikan",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: "",
    name: "Lainnya",
    description: "Excepteur sint occaecat cupidatat non proident",
  },
];

// ---------- INTEGRASI ----------
const networkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="16" y="16" width="6" height="6" rx="1"></rect><path d="M12 8v4M12 12H5v4M12 12h7v4"></path></svg>`;

const protocols = [
  {
    key: "REST API",
    title: "Dukungan REST API",
    desc: "Standar industri untuk komunikasi web yang ringan, stateless, dan scalable. Mendukung integrasi modern dengan performa tinggi.",
    badges: ["Reliable", "Flexible", "Scalable"]
  },
  {
    key: "SOAP",
    title: "Dukungan SOAP",
    desc: "Protokol pesan berbasis XML dengan standar keamanan ketat, cocok untuk transaksi enterprise yang membutuhkan kontrak data yang kaku.",
    badges: ["Secure", "Structured", "Enterprise-Ready"]
  },
  {
    key: "GraphQL",
    title: "Dukungan GraphQL",
    desc: "Bahasa query fleksibel yang memungkinkan aplikasi mengambil hanya data yang dibutuhkan, mengurangi over-fetching dan mempercepat respons.",
    badges: ["Efficient", "Flexible", "Typed"]
  },
  {
    key: "Webhooks",
    title: "Dukungan Webhooks",
    desc: "Notifikasi berbasis event yang dikirim secara real-time saat data berubah, sehingga sistem lain dapat bereaksi tanpa polling.",
    badges: ["Real-time", "Event-Driven", "Lightweight"]
  },
  {
    key: "JSON",
    title: "Dukungan Format JSON",
    desc: "Format pertukaran data yang ringan dan mudah dibaca, menjadi standar de-facto untuk komunikasi API modern.",
    badges: ["Lightweight", "Readable", "Universal"]
  },
  {
    key: "XML",
    title: "Dukungan Format XML",
    desc: "Format markup terstruktur dengan validasi skema yang ketat, ideal untuk pertukaran data enterprise yang kompleks.",
    badges: ["Structured", "Validated", "Portable"]
  },
  {
    key: "EDI",
    title: "Dukungan EDI",
    desc: "Standar pertukaran dokumen bisnis elektronik antar perusahaan, mempercepat proses pengadaan dan logistik.",
    badges: ["Standardized", "Automated", "Trusted"]
  },
  {
    key: "CSV",
    title: "Dukungan Format CSV",
    desc: "Format tabular sederhana yang mudah diproses, cocok untuk pertukaran data dalam jumlah besar antar sistem.",
    badges: ["Simple", "Universal", "Bulk-Ready"]
  }
];

const departments = [
  {
    key: "Retail & E-Commerce",
    flow: "ERP → E-Commerce → Warehouse",
    tantangan: "Sinkronisasi stok lambat menyebabkan overselling di marketplace dan keterlambatan pengiriman.",
    dampak: "Mencegah overselling, mempercepat pemenuhan pesanan, dan meningkatkan kepuasan pelanggan.",
    solusi: "Integrasi real-time antara platform E-Commerce, sistem ERP, dan Warehouse Management.",
    hasil: "+40% Efisiensi Pemrosesan Pesanan"
  },
  {
    key: "Marketing & Sales",
    flow: "CRM → Marketing Platform → Analytics",
    tantangan: "Data pelanggan terpecah di berbagai platform membuat kampanye tidak tepat sasaran.",
    dampak: "Kampanye lebih personal, konversi meningkat, dan pengambilan keputusan berbasis data.",
    solusi: "Sinkronisasi otomatis data leads dan customer journey ke seluruh platform marketing.",
    hasil: "+35% Peningkatan Konversi Kampanye"
  },
  {
    key: "HR & Finance",
    flow: "HRIS → Payroll → Banking",
    tantangan: "Proses payroll manual rentan kesalahan dan memakan waktu tim finance setiap bulan.",
    dampak: "Penggajian lebih akurat, patuh regulasi, dan tim finance fokus pada hal strategis.",
    solusi: "Integrasi otomatis data kehadiran, HRIS, sistem payroll, hingga transfer perbankan.",
    hasil: "+60% Percepatan Proses Penggajian"
  }
];

// icon path directory: https://lucide.dev
const warnIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L14.7 3.86a2 2 0 0 0-3.4 0Z"></path></svg>`;
const impactIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"></path><path d="M16 7h6v6"></path></svg>`;
const bulbIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.47c.6.55 1 1.36 1 2.13V16h6v-1.4c0-.77.4-1.58 1-2.13A6 6 0 0 0 12 2Z"></path></svg>`;
const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>`;

const protocolTabsEl = document.getElementById("DMS-protocol-tabs");
const protocolPanelEl = document.getElementById("DMS-protocol-panel");
const protocolSection = document.getElementById("DMS-section-protocols");

function renderProtocolPanel(p) {
  protocolPanelEl.innerHTML = `
    <div class="DMS-protocol-icon">${networkIcon}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="DMS-badge-row">
      ${p.badges.map(b => `<span>${b}</span>`).join("")}
    </div>
  `;
}

function setActiveProtocol(index, { scroll = true } = {}) {
  [...protocolTabsEl.children].forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle("DMS-is-active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  renderProtocolPanel(protocols[index]);
  if (scroll) {
    protocolSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

protocols.forEach((p, i) => {
  const btn = document.createElement("button");
  btn.className = "DMS-tab-btn" + (i === 0 ? " DMS-is-active" : "");
  btn.textContent = p.key;
  btn.type = "button";
  btn.role = "tab";
  btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
  btn.addEventListener("click", () => setActiveProtocol(i));
  protocolTabsEl.appendChild(btn);
});
renderProtocolPanel(protocols[0]);

const deptTabsEl = document.getElementById("DMS-dept-tabs");
const deptBodyEl = document.getElementById("DMS-dept-body");
const deptShellEl = document.getElementById("DMS-dept-shell");

function renderDeptBody(d) {
  deptBodyEl.innerHTML = `
    <div class="DMS-dept-card">
      <h4><span class="DMS-icon-chip DMS-icon-chip--warn">${warnIcon}</span>Tantangan</h4>
      <p>${d.tantangan}</p>
    </div>
    <div class="DMS-dept-card">
      <h4><span class="DMS-icon-chip DMS-icon-chip--impact">${impactIcon}</span>Dampak Bisnis</h4>
      <p>${d.dampak}</p>
    </div>
    <div class="DMS-dept-card">
      <h4><span class="DMS-icon-chip DMS-icon-chip--solution">${bulbIcon}</span>Solusi</h4>
      <p>${d.solusi}</p>
    </div>
    <div>
      <div class="DMS-result-box">
        <div class="DMS-result-box__tag">${checkIcon} Hasil yang Diperoleh</div>
        <p class="DMS-result-box__stat">${d.hasil}</p>
      </div>
    </div>
  `;
}

function setActiveDept(index, { scroll = true } = {}) {
  [...deptTabsEl.children].forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle("DMS-is-active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  renderDeptBody(departments[index]);
  if (scroll) {
    deptShellEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

departments.forEach((d, i) => {
  const btn = document.createElement("button");
  btn.className = "DMS-dept-btn" + (i === 0 ? " DMS-is-active" : "");
  btn.type = "button";
  btn.role = "tab";
  btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
  btn.innerHTML = `<span class="DMS-dept-btn__name">${d.key}</span><span class="DMS-dept-btn__flow">${d.flow}</span>`;
  btn.addEventListener("click", () => setActiveDept(i));
  deptTabsEl.appendChild(btn);
});
renderDeptBody(departments[0]);