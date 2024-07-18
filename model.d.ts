type CasovyUdaj = {
  denVTydnu: number;
  hodina: number;
  minuta: number;
};

interface PolozkaVKalendari {
  nazev: string;
  casovyUdaj: CasovyUdaj;
}

interface Udalost extends PolozkaVKalendari {
  delkaTrvani: number;
  type: 'event';
}

interface Ukol extends PolozkaVKalendari {
  splneno: boolean;
  type: 'task';
}

export type PolozkyVKalendari = Udalost | Ukol;
