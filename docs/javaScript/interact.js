window.addEventListener("DOMContentLoaded", () => {
  const highlightBtn = document.getElementById("toggle-highlights-btn");
  const notesCheckbox = document.getElementById("toggle-notes-chk");

  const hobbySpans = document.querySelectorAll(".hobby-highlight");
  const noteSpans = document.querySelectorAll(".design-note");

  if (highlightBtn) {
    highlightBtn.addEventListener("click", () => {
      hobbySpans.forEach((span) => span.classList.toggle("on"));
    });
  }

  if (notesCheckbox) {
    notesCheckbox.addEventListener("change", () => {
      noteSpans.forEach((span) =>
        span.classList.toggle("on", notesCheckbox.checked),
      );
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Existing interactive controls code...

  // ===================================================
  // Interactive JS for SVG Elements
  // ===================================================
  const svgBars = document.querySelectorAll(".svg-bar");
  const randomizeBtn = document.getElementById("randomize-svg-btn");
  const colorPicker = document.getElementById("svg-color-picker");
  const chartBaseY = 200; // Baseline Y coordinate for the SVG chart

  // 1. Randomize SVG Bar Heights on Button Click
  if (randomizeBtn) {
    randomizeBtn.addEventListener("click", () => {
      svgBars.forEach((bar) => {
        const newHeight = Math.floor(Math.random() * 120) + 30; // Height between 30px and 150px
        const newY = chartBaseY - newHeight;

        bar.setAttribute("height", newHeight);
        bar.setAttribute("y", newY);
      });
    });
  }

  // 2. Change SVG Bar Colors via Color Input Picker
  if (colorPicker) {
    colorPicker.addEventListener("input", (e) => {
      const selectedColor = e.target.value;
      svgBars.forEach((bar) => {
        bar.setAttribute("fill", selectedColor);
      });
    });
  }

  // 3. Click interaction directly on SVG elements
  svgBars.forEach((bar, index) => {
    bar.addEventListener("click", () => {
      const currentHeight = bar.getAttribute("height");
      alert(`Bar #${index + 1} clicked! Height: ${currentHeight}px`);
    });
  });
});
