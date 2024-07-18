import { ukoly } from './data.js';
import { PolozkyVKalendari } from './model';

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};

const renderItem = (polozka: PolozkyVKalendari): Element => {
  const start = polozka.casovyUdaj.hodina * 60 + polozka.casovyUdaj.minuta;
  const itemElement = document.createElement('div');
  itemElement.classList.add('calendar-item');
  itemElement.classList.add(`item-${polozka.type}`);
  itemElement.innerHTML = `
    <div class="title">${polozka.nazev}</div>
    <div class="time">${polozka.casovyUdaj.hodina}:${String(
    polozka.casovyUdaj.minuta,
  ).padStart(2, '0')}</div>
  `;
  itemElement.style.marginTop = `${start}px`;
  itemElement.style.height =
    polozka.type === 'event' ? `${polozka.delkaTrvani}px` : 'auto';

  if (polozka.type === 'task' && polozka.splneno) {
    itemElement.classList.add('task-done');
  }

  return itemElement;
};

const renderCalendar = (items: PolozkyVKalendari[]): void => {
  items.forEach((item) => {
    const columnElement = document.querySelector(
      `#day${item.casovyUdaj.denVTydnu}`,
    )!;
    columnElement.appendChild(renderItem(item));
  });
};

renderGrid();
renderCalendar(ukoly);
