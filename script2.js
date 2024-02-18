// ملف script.js

const donateurs = [
  { nom: "علي", montant: 100 },
  { nom: "مريم", montant: 200 },
  { nom: "احمد", montant: 300 },
  { nom: "فاطمة", montant: 400 },
  { nom: "سليم", montant: 500 },
];

// دالة لعرض الجدول
function afficherTableau(donateurs) {
  const table = document.getElementById("tableau");
  table.innerHTML = "";

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
