import { geolocation } from "./geolocation";

enum EventType {
    hackathon = 'Hackathon',
    combatRobot = 'Combat Robotics Competition',
    otherRobotics = 'Skill-Based Robotics Competition',
    other = 'other',
}

export interface event {
    type: EventType;
    name: string;
    description: string;
    date: Date;
    location: geolocation;
    website: URL;
    imageUrl: URL;
}