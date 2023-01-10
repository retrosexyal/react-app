export interface IResults {
    id: number;
    name: string;
    status: string;
    image: string;
    isFavorit?: boolean;

}
export interface ICard{
    results: IResults[];
}