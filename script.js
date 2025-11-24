const data = {
  personal: { name: "Jean Decian" },
  education: [
    {
      degree: "Maîtrise en informatique",
      institution: "Université du Québec à Chicoutimi (UQAC)",
      location: "Chicoutimi, Canada",
      startDate: "2023",
      endDate: "en cours",
      description: [
        "Cryptographie (8INF874), Gestion de la cybersécurité et des données personnelles (8INF886), Spécification, test et vérification (8INF958)",
      ],
    },
    {
      degree: "Certificat en cyberenquête",
      institution: "Polytechnique Montréal",
      location: "Montréal, Canada",
      startDate: "2023",
      endDate: "2023",
      description: [
        "Internet: réseau et applications (CY110), Prévention de la cybercriminalité (CY201), Analyse de la personnalité cybercriminelle l (CY211)",
      ],
    },
    {
      degree: "Baccalauréat en génie informatique",
      institution: "Polytechnique Montréal",
      location: "Montréal, Canada",
      startDate: "2016",
      endDate: "2021",
      description: [
        "Sécurité informatique (INF4420A), Sécurité des réseaux fixes et mobiles (INF8402), Investigation numérique en informatique (INF8430), Ingénierie de la qualité en logiciel (LOG8371)",
      ],
    },
  ],
};

function createElement(tag, classes, content = "") {
  const element = document.createElement(tag);

  if (classes) element.className = classes;
  if (content) element.innerHTML = content;

  return element;
}

function renderResumeCV() {
  const container = document.getElementById("resume-cv-container");
  if (!container) return;

  const header = createElement("header", "pb-4 mb-6 border-b border-gray-200");
  const nameEl = createElement(
    "h1",
    "text-4xl font-extrabold text-blue-800 tracking-tighter",
    data.personal.name
  );
  header.appendChild(nameEl);

  container.appendChild(header);

  container.appendChild(
    createElement("h3", "section-title text-lg text-gray-800", "Éducation")
  );

  data.education.forEach((edu) => {
    const eduDiv = createElement(
      "div",
      "mb-4 pb-2 border-b border-gray-100 last:border-b-0"
    );

    const firstRow = createElement("div", "flex justify-between items-start");
    firstRow.appendChild(
      createElement("h4", "text-base font-semibold text-gray-800", edu.degree)
    );
    firstRow.appendChild(
      createElement(
        "span",
        "text-sm font-medium text-gray-500",
        edu.startDate + " - " + edu.endDate
      )
    );
    eduDiv.appendChild(firstRow);

    const secondRow = createElement(
      "div",
      "flex justify-between items-center text-sm text-gray-600 italic mt-0.5 mb-1"
    );
    secondRow.appendChild(createElement("p", "", edu.institution));
    secondRow.appendChild(createElement("p", "text-right", edu.location));
    eduDiv.appendChild(secondRow);

    const descList = createElement(
      "ul",
      "list-disc ml-5 text-gray-700 text-sm space-y-1"
    );
    edu.description.forEach((point) => {
      descList.appendChild(createElement("li", "", point));
    });
    eduDiv.appendChild(descList);

    container.appendChild(eduDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderResumeCV);
