function createElement(tag, classes, content = "") {
  const element = document.createElement(tag);

  if (classes) element.className = classes;
  if (content) element.innerHTML = content;

  return element;
}

function renderResumeCV() {
  const container = document.getElementById("resume-cv-container");
  if (!container) return;
}

document.addEventListener("DOMContentLoaded", renderResumeCV);
