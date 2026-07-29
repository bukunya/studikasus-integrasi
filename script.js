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

function renderMetodologi(index) {
  const data = metodologi[index];

  const formattedNumber = String(index + 1).padStart(2, "0");

  document.getElementById("m-number").textContent = formattedNumber;
  document.getElementById("m-title").textContent = data.name;
  document.getElementById("m-description").textContent = data.description;
}

function initMetodologiTabs() {
  const buttons = document.querySelectorAll(
    ".DMS-stepper-container .DMS-step-button",
  );

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetButton = e.target.closest(".DMS-step-button");
      const clickedIndex = parseInt(
        targetButton.getAttribute("data-index"),
        10,
      );

      buttons.forEach((btn) => btn.classList.remove("active"));
      targetButton.classList.add("active");

      renderMetodologi(clickedIndex);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMetodologiTabs();
  renderMetodologi(0);
});

const industri = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>`,
    name: "Manufaktur",
    description:
      "Meningkatkan OEE rata-rata sebesar 25% di lebih dari 40 pabrik berskala nasional.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    name: "Distribusi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    name: "Retail",
    description: "Consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    name: "Logistik",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>`,
    name: "Keuangan",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
    name: "Kesehatan",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
    name: "Pendidikan",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
    name: "Lainnya",
    description: "Excepteur sint occaecat cupidatat non proident.",
  },
];

function renderTileIcons() {
  industri.forEach((item, index) => {
    const iconContainer = document.getElementById(`ind-icon-${index}`);
    if (iconContainer) {
      iconContainer.innerHTML = item.icon;
    }
  });
}

function renderIndustriBanner(index) {
  const data = industri[index];

  document.getElementById("ind-banner-tag").textContent =
    `Dampak di Sektor ${data.name}`;
  document.getElementById("ind-banner-desc").textContent =
    `"${data.description}"`;
}

function initIndustriTabs() {
  const tiles = document.querySelectorAll(
    "#industri-grid button.DMS-custom-border",
  );

  tiles.forEach((tile) => {
    tile.addEventListener("click", (e) => {
      const targetBtn = e.target.closest("button");
      const clickedIndex = parseInt(targetBtn.getAttribute("data-index"), 10);

      tiles.forEach((btn) => {
        btn.classList.remove("DMS-industries-active");

        const textNode = btn.querySelector("p");
        if (textNode) textNode.classList.remove("DMS-text-green");

        const svgNode = btn.querySelector("svg");
        if (svgNode) {
          svgNode.classList.remove("DMS-industries-icon-active");
          svgNode.classList.add("DMS-industries-icon");
        }
      });

      targetBtn.classList.add("DMS-industries-active");

      const activeText = targetBtn.querySelector("p");
      if (activeText) activeText.classList.add("DMS-text-green");

      const activeSvg = targetBtn.querySelector("svg");
      if (activeSvg) {
        activeSvg.classList.remove("DMS-industries-icon");
        activeSvg.classList.add("DMS-industries-icon-active");
      }

      renderIndustriBanner(clickedIndex);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTileIcons();
  initIndustriTabs();
  renderIndustriBanner(0);
});

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("DMS-mySlides");
  let dots = document.getElementsByClassName("DMS-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("DMS-active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("DMS-active");
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
