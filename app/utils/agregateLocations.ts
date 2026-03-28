import { fetchMakerspaces } from "./sources/makerspaces.com";

export async function aggregateLocations() {
    return (await fetchMakerspaces()).concat([]);
}