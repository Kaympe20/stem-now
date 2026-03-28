import type { geolocation } from "./geolocation";

export enum spaceType {
    makerspace = 'Makerspace',
    other = 'other',
}

export interface permanentLocation {
    type: spaceType;
    name: string;
    description: string;
    location: geolocation;
    website: URL;
    imageUrl: URL;
}