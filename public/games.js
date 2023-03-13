const gameId = window.location.pathname.split('/').splice(-1)[0];

fetchGame();

async function fetchGame() {
  const parent = document.querySelector('#parent');

  const res = await fetch(`/api/games/${gameId}`);
  const game = await res.json();

  parent.innerHTML = game.map(item => `
    <div>
      <h1>${item.name}</h1>
      <h2>${item.genre}</h2>
      <h2>${item.publisher}</h2>
    </div>
  `).join('');
};