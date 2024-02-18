// ملف script.js

const donateurs = [
  { nom: "علي", montant: 100 },
  { nom: "مريم", montant: 200 },
  { nom: "احمد", montant: 300 },
  { nom: "فاطمة", montant: 400 },
  { nom: "سليم", montant: 50 },
];

// دالة لعرض الجدول
function afficherTableau(donateurs) {
  const table = document.getElementById("tableau");
  table.innerHTML = "";

  // حساب مجموع التبرعات
  let totalMontant = 0;
  for (const donateur of donateurs) {
    totalMontant += donateur.montant;
  }

  // فرز المتبرعين حسب المبلغ
  donateurs.sort((a, b) => b.montant - a.montant);

  // إضافة عنوان "مجموع التبرعات"
  const ligneTitre = document.createElement("tr");
  const celluleTitre = document.createElement("td");
  celluleTitre.textContent = "مجموع التبرعات";
  celluleTitre.colspan = 2;
  ligneTitre.appendChild(celluleTitre);
  table.appendChild(ligneTitre);

  // إضافة خلية "مجموع التبرعات"
  const celluleTotal = document.createElement("td");
  celluleTotal.textContent = totalMontant;
  ligneTitre.appendChild(celluleTotal);

  // عرض المتبرعين
  for (const donateur of donateurs) {
    const ligne = document.createElement("tr");

    const nomCellule = document.createElement("td");
    nomCellule.textContent = donateur.nom;
    ligne.appendChild(nomCellule);

    const montantCellule = document.createElement("td");
    montantCellule.textContent = donateur.montant;
    ligne.appendChild(montantCellule);

    table.appendChild(ligne);
  }
}

// عند تحميل الصفحة
afficherTableau(donateurs);
