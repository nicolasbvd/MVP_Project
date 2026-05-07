const STORAGE_USER = 'tempro_user';
const STORAGE_SESSION = 'tempro_session';

function setupReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length || typeof IntersectionObserver === 'undefined') {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
  } catch {
    return null;
  }
}

function getSessionEmail() {
  return localStorage.getItem(STORAGE_SESSION) || '';
}

function updateAuthUi() {
  const authTrigger = document.querySelector('#auth-trigger');
  const logoutBtn = document.querySelector('#logout-btn');
  const sessionEmail = getSessionEmail();

  if (!authTrigger || !logoutBtn) {
    return;
  }

  if (sessionEmail) {
    authTrigger.textContent = `Connecte: ${sessionEmail}`;
    logoutBtn.hidden = false;
  } else {
    authTrigger.textContent = 'Connexion';
    logoutBtn.hidden = true;
  }
}

function setupAuthModal() {
  const modal = document.querySelector('#auth-modal');
  const authTrigger = document.querySelector('#auth-trigger');
  const closeBtn = document.querySelector('#auth-close');
  const loginForm = document.querySelector('#login-form');
  const feedback = document.querySelector('#login-feedback');
  const logoutBtn = document.querySelector('#logout-btn');

  if (!authTrigger || !logoutBtn) {
    return;
  }

  authTrigger.addEventListener('click', () => {
    if (!modal) {
      return;
    }
    modal.hidden = false;
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.hidden = true;
    });
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.hidden = true;
      }
    });
  }

  if (loginForm && feedback && modal) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const email = String(formData.get('email') || '').trim().toLowerCase();
      const password = String(formData.get('password') || '');
      const user = getStoredUser();

      if (!user || user.email !== email || user.password !== password) {
        feedback.textContent = 'Identifiants invalides. Inscrivez-vous d abord.';
        return;
      }

      localStorage.setItem(STORAGE_SESSION, email);
      feedback.textContent = 'Connexion reussie.';
      loginForm.reset();
      updateAuthUi();
      setTimeout(() => {
        modal.hidden = true;
        feedback.textContent = '';
      }, 500);
    });
  }

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_SESSION);
    updateAuthUi();
  });
}

function setupSignupForm() {
  const signupForm = document.querySelector('#signup-form');
  const signupFeedback = document.querySelector('#signup-feedback');
  const activitySelect = document.querySelector('#activity');
  const customActivityWrap = document.querySelector('#custom-activity-wrap');
  const customActivityInput = document.querySelector('#custom-activity');

  if (!signupForm || !signupFeedback) {
    return;
  }

  const toggleCustomActivity = () => {
    if (!activitySelect || !customActivityWrap || !customActivityInput) {
      return;
    }

    const isOther = activitySelect.value === 'autre';
    customActivityWrap.hidden = !isOther;
    customActivityInput.required = isOther;

    if (!isOther) {
      customActivityInput.value = '';
    }
  };

  if (activitySelect) {
    activitySelect.addEventListener('change', toggleCustomActivity);
    toggleCustomActivity();
  }

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const selectedActivity = String(formData.get('activity') || '').trim();
    const customActivity = String(formData.get('customActivity') || '').trim();
    const user = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim().toLowerCase(),
      phone: String(formData.get('phone') || '').trim(),
      activity: selectedActivity === 'autre' && customActivity ? customActivity : selectedActivity,
      note: String(formData.get('note') || '').trim(),
      password: String(formData.get('password') || ''),
    };

    localStorage.setItem(STORAGE_USER, JSON.stringify(user));
    localStorage.setItem(STORAGE_SESSION, user.email);
    signupFeedback.textContent = 'Inscription enregistree. Vous etes connecte.';
    signupForm.reset();
    updateAuthUi();
  });
}

setupReveal();
setupAuthModal();
setupSignupForm();
updateAuthUi();
