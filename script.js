const data = {
  personal: { name: "Jean Decian" },
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
}

document.addEventListener("DOMContentLoaded", renderResumeCV);
