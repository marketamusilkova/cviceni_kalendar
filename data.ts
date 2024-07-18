import { PolozkyVKalendari } from './model';

export const ukoly: PolozkyVKalendari[] = [
  {
    nazev: 'Kurz TypeScriptu',
    casovyUdaj: {
      denVTydnu: 2,
      hodina: 8,
      minuta: 0,
    },
    delkaTrvani: 120,
    type: "event"
  },
  {
    nazev: 'Udělat úkol z TS',
    casovyUdaj: {
      denVTydnu: 3,
      hodina: 8,
      minuta: 0,
    },
    splneno: false,
    type: "task"
  },
  {
    nazev: 'Kurz TypeScriptu',
    casovyUdaj: {
      denVTydnu: 4,
      hodina: 10,
      minuta: 30,
    },
    delkaTrvani: 120,
    type: "event"
  },
  {
    nazev: 'Udělat úkol z TS',
    casovyUdaj: {
      denVTydnu: 5,
      hodina: 11,
      minuta: 0,
    },
    splneno: true,
    type: "task"
  },
];
