export interface IResults {
    id: number;
    name: string;
    status: string;
    image: string;

}
export interface ICard{
    results: IResults[];
}