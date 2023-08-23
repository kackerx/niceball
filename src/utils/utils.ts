export const getImg = (item: any, type: string) => {
    return new URL(`../assets/img/${ item }.${ type }`, import.meta.url).href;
}
