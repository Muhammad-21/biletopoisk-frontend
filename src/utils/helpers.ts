import { FilmAttributes } from "@/components/types"

export function translateGenre(word: string): string {
    switch (word) {
      case "action": return "Экшн"
      case "comedy": return "Комедия"
      case "fantasy": return "Фэнтези"
      case "horror": return "Хоррор"
      default: return word
    }
}


export function filterFilmsByGenre(films: FilmAttributes[], genre: string): FilmAttributes[] {
    return films.filter((film) => film.genre === genre);
}


