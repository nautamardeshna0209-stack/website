// assets/admin.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Example: simple delete button confirmation
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this entry?")) {
        btn.closest("tr").remove();
      }
    });
  });
});
