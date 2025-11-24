const data = {
  personal: {
    name: "Jean Decian",
    title:
      "Analyste en sécurité de l'information | Étudiant à la maîtrise en informatique",
    email: "jeandecian@hotmail.fr",
    linkedin: "jeandecian",
    github: "jeandecian",
    address: "Montréal, Canada",
  },
  certifications: [
    {
      name: "Practical Network Penetration Tester (PNPT)",
      issuer: "TCM Security",
      date: "en cours",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
    },
    {
      name: "PCI Professional",
      issuer: "PCI Security Standards Council",
      date: "2023",
    },
  ],
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
  experience: [
    {
      title: "Analyste en sécurité de l'information",
      company: "Valtech",
      location: "Montréal, Canada",
      startDate: "09/2021",
      endDate: "11/2025",
      description: [
        "Assumer le rôle d'officier principal de la sécurité de l'information (ISO) pour le Canada et servir de point de contact principal pour toutes les questions liées à la sécurité de l'information",
        "Conduire des évaluations des risques de sécurité de l'information et élaborer des plans d'atténuation pour minimiser les risques identifiés",
        "Effectuer des analyses d'impact sur les affaires (BIA) pour identifier les fonctions critiques de l'entreprise et les exigences de continuité des activités",
        "Effectuer des audits réguliers de sécurité de l'information pour garantir la conformité aux politiques internes et aux exigences réglementaires",
        "Fournir une formation et une sensibilisation à la sécurité de l'information aux employés pour promouvoir une culture de sécurité au sein de l'organisation",
        "Mettre en œuvre et gérer des politiques, des normes et des procédures de sécurité de l'information conformes aux cadres réglementaires pertinents",
        "Opérer les capacités GRC (Governance, Risk, and Compliance) pour soutenir les initiatives de gestion des risques de l'organisation",
        "Valider la conformité interne et externe aux normes de sécurité telles que PCI DSS, ISO 27001, SOC 2, GDPR, etc.",
      ],
    },
    {
      title: "Stagiaire en cybersécurité",
      company: "Centre de Recherche Informatique de Montréal (CRIM)",
      location: "Montréal, Canada",
      startDate: "01/2021",
      endDate: "08/2021",
      description: [
        "Développer une plateforme Wiki, basée sur MediaWiki, pour répertorier et évaluer la sécurité et la résilience des systèmes IoT",
        "Déterminer les attributs pertinents de l'analyseur de trafic Zeek pour proposer de nouveaux Indicators of Compromise (IoC) en liant aux techniques MITRE ATT&CK",
      ],
    },
    {
      title: "Stagiaire en cybersécurité",
      company: "Centre de Recherche Informatique de Montréal (CRIM)",
      location: "Montréal, Canada",
      startDate: "05/2019",
      endDate: "03/2020",
      description: [
        "Déterminer la qualité du code de logiciels Java open-source en fonction de leur tendance aux fautes et changements",
        "Développer un balayeur de ports pour prédire la catégorie de la machine cible (serveur, poste de travail, IoT, etc.) en utilisant des données de Shodan",
      ],
    },
  ],
  publications: [
    {
      title:
        "Estimating the Carbon Footprint of Cyberattacks: The Ransomware Case",
      date: "2025",
    },
    {
      title:
        "Wiki-IoT: Registering and Evaluating the Security and Resilience of Internet of Things and Connected Devices Using a Collaborative Platform",
      date: "2024",
    },
    {
      title: "Social Network Cyberattacks and Security Issues",
      date: "2021",
    },
  ],
  skills: [
    {
      title: "Langues",
      topics: ["Français", "Anglais (C1)"],
    },
    {
      title: "Gestion des risques d'entreprise",
      topics: [
        "Analyse d'impact sur les affaires",
        "Analyse de risque",
        "Audit interne",
        "Gestion des risques",
        "Planification de la continuité des affaires",
      ],
    },
    {
      title: "Gouvernance",
      topics: ["Politiques de sécurité", "Conformité réglementaire"],
    },
    {
      title: "Normes et cadres de cybersécurité",
      topics: [
        "ISO 27001",
        "OWASP Top 10",
        "NIST Cybersecurity Framework",
        "PCI DSS",
      ],
    },
    {
      title: "Opérations de sécurité",
      topics: ["Gestion des vulnerabilités", "Réponse aux incidents"],
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
  const titleEl = createElement(
    "h2",
    "text-xl font-light text-gray-700 mt-1",
    data.personal.title
  );
  header.appendChild(nameEl);
  header.appendChild(titleEl);

  const contactDiv = createElement(
    "div",
    "flex flex-wrap justify-center sm:justify-start space-x-4 text-sm mt-3 text-gray-600"
  );

  const contactItems = [
    {
      text: data.personal.email,
      href: `mailto:${data.personal.email}`,
    },
    {
      text: "linkedin.com/in/" + data.personal.linkedin,
      href: `https://linkedin.com/in/${data.personal.linkedin}`,
      external: true,
    },
    {
      text: "github.com/" + data.personal.github,
      href: `https://github.com/${data.personal.github}`,
      external: true,
    },
    { text: data.personal.address },
  ];
  contactItems.forEach((item) => {
    const itemEl = createElement(
      item.href ? "a" : "span",
      "flex items-center space-x-1 hover:text-blue-700 transition duration-150",
      `<span>${item.text}</span>`
    );
    if (item.href) {
      itemEl.href = item.href;
      itemEl.target = item.external ? "_blank" : "_self";
    }
    contactDiv.appendChild(itemEl);
  });
  header.appendChild(contactDiv);

  container.appendChild(header);

  container.appendChild(
    createElement("h3", "section-title text-lg text-gray-800", "Certifications")
  );

  const certDiv = createElement(
    "div",
    "mb-4 pb-2 border-b border-gray-100 last:border-b-0"
  );

  const certList = createElement(
    "ul",
    "list-disc ml-5 text-gray-700 text-sm space-y-1"
  );
  data.certifications.forEach((cert) => {
    const certItem = createElement(
      "li",
      "",
      `${cert.name} - ${cert.issuer} (${cert.date})`
    );
    certList.appendChild(certItem);
  });
  certDiv.appendChild(certList);

  container.appendChild(certDiv);

  container.appendChild(
    createElement("h3", "section-title text-lg text-gray-800", "Compétences")
  );

  data.skills.forEach((skill) => {
    const skillDiv = createElement(
      "div",
      "mb-4 pb-2 border-b border-gray-100 last:border-b-0"
    );

    skillDiv.appendChild(
      createElement("h4", "text-sm font-bold text-blue-700 mb-1", skill.title)
    );

    const topicsDiv = createElement("div", "flex flex-wrap gap-2");
    skill.topics.forEach((topic) => {
      topicsDiv.appendChild(
        createElement(
          "span",
          "text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-200 transition",
          topic
        )
      );
    });
    skillDiv.appendChild(topicsDiv);

    container.appendChild(skillDiv);
  });

  container.appendChild(
    createElement("h3", "section-title text-lg text-gray-800", "Expérience")
  );

  data.experience.forEach((exp) => {
    const expDiv = createElement(
      "div",
      "mb-4 pb-2 border-b border-gray-100 last:border-b-0"
    );

    const firstRow = createElement("div", "flex justify-between items-start");
    firstRow.appendChild(
      createElement("h4", "text-base font-semibold text-gray-800", exp.title)
    );
    firstRow.appendChild(
      createElement(
        "span",
        "text-sm font-medium text-gray-500",
        exp.startDate + " - " + exp.endDate
      )
    );
    expDiv.appendChild(firstRow);

    const secondRow = createElement(
      "div",
      "flex justify-between items-center text-sm text-gray-600 italic mt-0.5 mb-1"
    );
    secondRow.appendChild(createElement("p", "", exp.company));
    secondRow.appendChild(createElement("p", "text-right", exp.location));
    expDiv.appendChild(secondRow);

    const descList = createElement(
      "ul",
      "list-disc ml-5 text-gray-700 text-sm space-y-1"
    );
    exp.description.forEach((point) => {
      descList.appendChild(createElement("li", "", point));
    });
    expDiv.appendChild(descList);

    container.appendChild(expDiv);
  });

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

  container.appendChild(
    createElement("h3", "section-title text-lg text-gray-800", "Publications")
  );

  const pubDiv = createElement(
    "div",
    "mb-4 pb-2 border-b border-gray-100 last:border-b-0"
  );

  const row = createElement(
    "ul",
    "list-disc ml-5 text-gray-700 text-sm space-y-1"
  );
  data.publications.forEach((pub) => {
    const pubItem = createElement("li", "", `${pub.title} (${pub.date})`);
    row.appendChild(pubItem);
  });
  pubDiv.appendChild(row);

  container.appendChild(pubDiv);
}

document.addEventListener("DOMContentLoaded", renderResumeCV);
