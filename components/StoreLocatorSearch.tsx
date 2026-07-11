"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const RESELLERS = [
  { name: "Farmacia Sant'Anna", city: "Ascoli Piceno" },
  { name: "Erboristeria Il Sibillino", city: "Norcia" },
  { name: "Profumeria Bellezza Naturale", city: "Fermo" },
  { name: "Farmacia Centrale", city: "Amandola" },
  { name: "Bottega Bio dei Monti", city: "San Benedetto del Tronto" },
];

/** Ricerca rivenditori dimostrativa (nessuna ricerca reale). */
export function StoreLocatorSearch({ showList = false }: { showList?: boolean }) {
  const [q, setQ] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearched(true);
        }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Inserisci città o CAP"
          aria-label="Città o CAP"
          className="flex-1 rounded border border-border bg-white px-4 py-3 text-sm outline-none"
        />
        <button type="submit" className="btn btn-primary">
          <Search size={16} /> Trova
        </button>
      </form>
      {(searched || showList) && (
        <ul className="mt-5 divide-y divide-border rounded-xl border border-border bg-white">
          {RESELLERS.map((r) => (
            <li key={r.name} className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium text-text">{r.name}</span>
              <span className="text-text-muted">{r.city}</span>
            </li>
          ))}
        </ul>
      )}
      {searched && <p className="mt-2 text-xs text-text-muted">Elenco dimostrativo — la ricerca reale sarà attivata a breve.</p>}
    </div>
  );
}
