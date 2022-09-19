const baseUrl:string = "https://randomuser.me/api"

export const getAsset:any = async () => {
    const data = await fetch(baseUrl, {
        method: "GET",
    });
    const assetData = await data.json();
    return assetData.results
}