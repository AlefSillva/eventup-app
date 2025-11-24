import { useState, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";

const STORAGE_KEY = "eventup_favorites";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Erro ao ler favoritos do localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error("Erro ao salvar favoritos no localStorage:", err);
    }
  }, [favorites]);

  const _identificador = (event) => event.id ?? event.name;

  const isFavorite = (event) => {
    const id = _identificador(event);
    return favorites.some((f) => (_identificador(f) === id));
  };

  const toggleFavorite = (event) => {
    const id = _identificador(event);
    setFavorites((prev) => {
      const exists = prev.some((f) => _identificador(f) === id);
      if (exists) {
        return prev.filter((f) => _identificador(f) !== id);
      } else {
        
        const minimal = {
          id: event.id ?? undefined,
          name: event.name ?? event,
          linkImage: event.linkImage ?? "",
          local: event.local ?? "",
          date: event.date ?? "",
          type: event.type ?? "",
        };
        return [...prev, minimal];
      }
    });
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    setFavorites, 
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
