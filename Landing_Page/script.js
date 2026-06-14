const STORAGE_USER = 'tempro_user';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/nicolas.bovard@heig-vd.ch';

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

function setupSignupForm() {
  const signupForm = document.querySelector('#signup-form');
  const signupFeedback = document.querySelector('#signup-feedback');
  const customActivityInput = document.querySelector('#custom-activity');

  if (!signupForm || !signupFeedback) {
    return;
  }

  if (customActivityInput) {
    customActivityInput.required = true;
  }

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const customActivity = String(formData.get('customActivity') || '').trim();
    const user = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim().toLowerCase(),
      phone: String(formData.get('phone') || '').trim(),
      activity: customActivity,
      note: String(formData.get('note') || '').trim(),
    };

    localStorage.setItem(STORAGE_USER, JSON.stringify(user));

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      });

      if (!response.ok) {
        signupFeedback.textContent = "Impossible d'envoyer le formulaire pour le moment.";
        return;
      }

      signupForm.reset();
      signupForm.hidden = true;
      signupFeedback.textContent =
        'Merci de votre confiance, nous vous recontacterons rapidement.';
    } catch (error) {
      signupFeedback.textContent = "Impossible d'envoyer le formulaire pour le moment.";
    }
  });
}

function setupContactToggle() {
  const toggles = document.querySelectorAll('[data-target]');
  if (!toggles.length) {
    return;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      if (!targetId) {
        return;
      }

      const panel = document.getElementById(targetId);
      if (!panel) {
        return;
      }

      panel.hidden = !panel.hidden;
    });
  });
}

setupReveal();
setupSignupForm();
setupContactToggle();