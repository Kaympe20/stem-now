import { spaceType } from "../permanentLocation";

interface responseMakerspace {
    name: string;
    desc: string;
    lat: number;
    long: number;
    image: URL;
    website: URL;
}

interface expectedResponse {
    Makerspaces: responseMakerspace[];
}

export async function fetchMakerspaces() {
    const response: expectedResponse = await (await fetch('https://makerspace.com/wp-json/makerspaces/v1/spacedata/5/')).json();
    return response.Makerspaces.map(makerSpace => ({
        type: spaceType.makerspace,
        name: makerSpace.name,
        description: makerSpace.desc,
        location: {
            latitude: makerSpace.lat,
            longitude: makerSpace.long
        },
        website: makerSpace.website,
        imageUrl: makerSpace.image
    }));
}