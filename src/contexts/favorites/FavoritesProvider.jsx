import { useState, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";

const STORAGE_KEY = "eventup_favorites";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Erro ao ler favoritos:", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error("Erro ao salvar favoritos:", err);
    }
  }, [favorites]);

  const isFavorite = (id) => {
    return favorites.some((f) => f.id === id);
  };

  const toggleFavorite = (event) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === event.id);

      if (exists) {
        return prev.filter((f) => f.id !== event.id);
      }

      return [...prev, event];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
