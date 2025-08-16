document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#classesGrid');
  const items = grid ? Array.from(grid.children) : [];
  const buttons = document.querySelectorAll('#classesFilters .nav-link');

  function applyFilter(key){
    items.forEach(col => {
      const cat = col.getAttribute('data-cat');
      const show = (key === '*' || key === cat);
      col.classList.toggle('d-none', !show);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  // start: pokaż wszystko
  applyFilter('*');
});
