import React, { useState, useRef, useEffect } from "react";
import { FilterIcon, X } from "lucide-react";

const genreIcons = {
  Action: "🎬",
  Adventure: "🌄",
  Animation: "🎨",
  Biography: "📜",
  Comedy: "😂",
  Crime: "🕵️‍♂️",
  Drama: "🎭",
  Fantasy: "🧚",
  History: "📖",
  Horror: "😱",
  Musical: "🎵",
  Mystery: "🧩",
  Romance: "💖",
  "Sci-Fi": "🚀",
  Sport: "⚽",
  Thriller: "👻",
  War: "⚔️",
  Western: "🤠",
  "Neo-noir": "🕵️",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GenrePopover({ genres, selectedGenre, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    onSelect(null); // Reset selection
    // Don't close the genre list
  };

  return (
    <div
      className="relative inline-block items-start gap-1 pb-2 -ml-[9px]"
      ref={ref}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
          open
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        <FilterIcon className="w-4 h-4 mr-1" />
        Genre
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-52 rounded-xl bg-black/30 p-2 text-white shadow-lg backdrop-blur-md border border-white/20">
          <div className="flex justify-between items-center mb-2 px-2">
            <h4 className="text-sm font-semibold">
              {selectedGenre ? `${selectedGenre}` : "Filter by Genre"}
            </h4>
            {selectedGenre && (
              <button
                onClick={handleClear}
                className="text-xs flex items-center gap-1 hover:underline"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>
          <div className="max-h-[250px] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    onSelect(genre); // Don't close
                  }}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                    selectedGenre === genre
                      ? "bg-blue-600"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span>{genreIcons[genre] || "🎞️"}</span>
                  <span>{genre}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
