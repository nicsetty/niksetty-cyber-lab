(() => {
 const input = document.querySelector('[data-search-input]');
 const cards = Array.from(document.querySelectorAll('[data-post-grid] .post-card'));
 const buttons = Array.from(document.querySelectorAll('[data-filter]'));
 const empty = document.querySelector('[data-filter-empty]');
 if (!cards.length) return;
 let category='all';
 function update(){let visible=0;const query=(input?.value||'').trim().toLowerCase();cards.forEach(card=>{const hay=card.dataset.search||'';const matchSearch=hay.includes(query);const matchCategory=category==='all'||(category==='other'?!['networking','soc','tryhackme'].some(v=>hay.includes(v)):hay.includes(category));const show=matchSearch&&matchCategory;card.hidden=!show;if(show)visible++;});if(empty)empty.hidden=visible>0;}
 input?.addEventListener('input',update);
 buttons.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.filter;buttons.forEach(b=>{b.classList.toggle('selected',b===btn);b.setAttribute('aria-pressed',String(b===btn));});update();}));
})();
