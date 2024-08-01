export interface IGenreList<T> {
    created_by: string,
    description: string,
    favorite_count: number,
    id: number,
    iso_639_1: string,
    item_count: number,
    items: T[]
    name: string,
    page: number,
    poster_path: string,
    total_pages: number,
    total_results: number
}