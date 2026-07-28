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
