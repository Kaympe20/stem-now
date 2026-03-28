import { fetchMakerspaces } from "../sources/makerspaces.com";

export default defineEventHandler(async (event) => {
    return {
        "In Person Events": (await fetchMakerspaces()).concat([])
    }
});