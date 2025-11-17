// assets/script.js

// Simple client-side form validation for application & contact forms
document.addEventListener('DOMContentLoaded', () => {
  // bootstrap form validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        // show a simple success message instead of submitting to server
        e.preventDefault();
        const successEl = form.querySelector('.form-success');
        if (successEl) {
          successEl.classList.remove('d-none');
          setTimeout(()=> successEl.classList.add('d-none'), 3500);
        }
        form.reset();
      }
      form.classList.add('was-validated');
    });
  });

  // Users page: simple client-side search
  const userSearch = document.getElementById('userSearch');
  if (userSearch) {
    userSearch.addEventListener('input', () => {
      const q = userSearch.value.toLowerCase();
      document.querySelectorAll('.user-card').forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const email = card.dataset.email.toLowerCase();
        card.style.display = (name.includes(q) || email.includes(q)) ? '' : 'none';
      });
    });
  }

  // populate user modal with details
  document.querySelectorAll('.view-user-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.user-card');
      if (!card) return;
      document.getElementById('modalUserName').textContent = card.dataset.name;
      document.getElementById('modalUserEmail').textContent = card.dataset.email;
      document.getElementById('modalUserRole').textContent = card.dataset.role;
      document.getElementById('modalUserBio').textContent = card.dataset.bio;
      const img = document.getElementById('modalUserImg');
      img.src = card.dataset.img || 'https://via.placeholder.com/150';
    });
  });

});
