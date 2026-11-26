export const LOJAS_URL =
  import.meta.env.VITE_LOJAS_URL || "https://lojas.e-sigma.app";

export const CONFIRMACAO_URL =
  import.meta.env.VITE_CONFIRMACAO_URL || "/confirmacao";

export const INSTITUTIONAL_GROUPS = [
  {
    id: "gob",
    title: "GOB",
    subtitle: "Grande Oriente do Brasil",
    url: "https://www.gob.org.br/",
    secondary: [
      { label: "METAGOB", url: "https://meta.gob.org.br" },
      { label: "Caixa Postal", url: "https://caixapostal.gob.org.br/" },
      { label: "SOL", url: "https://sol.gob.org.br/" },
      { label: "GOB LEX", url: "https://goblex.gob.org.br" },
    ],
  },
  {
    id: "gobgo",
    title: "GOB-GO",
    subtitle: "Grande Oriente do Brasil — Goiás",
    url: "https://www.gobgo.org.br/",
    secondary: [
      { label: "Chancelaria", url: "https://chancelaria.gobgo.org.br/" },
    ],
  },
  {
    id: "esigma",
    title: "E-Sigma",
    subtitle: "Plataforma Maçônica",
    url: "https://e-sigma.app",
    secondary: [
      { label: "Harmonia", url: "https://harmonia.e-sigma.app" },
      { label: "Taverna", url: "https://taverna.e-sigma.app" },
    ],
  },
];
