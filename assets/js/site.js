(() => {
  const input = document.querySelector('[data-search-input]');
  const cards = document.querySelectorAll('[data-post-grid] .post-card');
  const buttons = document.querySelectorAll('[data-filter]');
  const empty = document.querySelector('[data-filter-empty]');
  const namedCategories = ['networking', 'soc', 'tryhackme'];
  if (!cards.length) return;

  let category = 'all';

  function update() {
    let visible = 0;
    const query = (input?.value || '').trim().toLowerCase();
    for (const card of cards) {
      const cardCategory = card.dataset.category;
      const matchesCategory = category === 'all' || (
        category === 'other' ? !namedCategories.includes(cardCategory) : cardCategory === category
      );
      const show = matchesCategory && card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible++;
    }
    if (empty) empty.hidden = visible > 0;
  }

  input?.addEventListener('input', update);
  for (const button of buttons) {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      for (const candidate of buttons) {
        candidate.classList.toggle('selected', candidate === button);
        candidate.setAttribute('aria-pressed', String(candidate === button));
      }
      update();
    });
  }
})();
