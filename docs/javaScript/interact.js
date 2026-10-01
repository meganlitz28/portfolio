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
