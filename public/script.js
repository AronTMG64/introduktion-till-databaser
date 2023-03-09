
fetchGames();

async function fetchGames() {
  const parent = document.querySelector('#parent');

  const res = await fetch('/api/games');
  const data = await res.json();

  parent.innerHTML = `
    <table>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Genre</th>
        <th>Release Date</th>
        <th>Publisher</th>
      </tr>
      ${data.map(game => `
        <tr class="tr">
          <td class="text-center">${game.id}.</td>
          <td>${game.name}</td>
          <td class="text-center">${game.genre}</td>
          <td class="text-center">${game.release_date.slice(0, 10)}</td>
          <td class="text-center">${game.publisher}</td>
        </tr>
      `).join('')}
    </table>
  `;
}