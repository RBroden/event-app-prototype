import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Event } from '../_models/event.model';
// below models only for mock data type casting
import { Location } from '../_models/location.model';
import { Coordinates } from '../_models/coordinates.model';
import { Tag } from '../_models/tag.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = <Event[]>[
            {
                id: 0,
                name: "Mars Party",
                location: <Location>{
                    id: 0,
                    name: "Mars",
                    coordinates: <Coordinates>{ x: 0, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 0,
                        name: "Pool"
                    },
                    {
                        id: 1,
                        name: "Launch Pad"
                    }
                ]
            },{
                id: 1,
                name: "Venus Convention",
                location: <Location>{
                    id: 1,
                    name: "Venus",
                    coordinates: <Coordinates>{ x: 1, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 2,
                        name: "Steam Room"
                    },
                    {
                        id: 1,
                        name: "Launch Pad"
                    }
                ]
            },{
                id: 2,
                name: "Earth Shindig",
                location: <Location>{
                    id: 2,
                    name: "Earth",
                    coordinates: <Coordinates>{ x: 2, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 3,
                        name: "Disco Room"
                    },
                    {
                        id: 1,
                        name: "Launch Pad"
                    }
                ]
            },{
                id: 3,
                name: "Earth Poetry Reading",
                location: <Location>{
                    id: 2,
                    name: "Earth",
                    coordinates: <Coordinates>{ x: 2, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 4,
                        name: "Expresso Machine"
                    },{
                        id: 6,
                        name: "Monolith"
                    }
                ]
            },{
                id: 4,
                name: "Mars Dirt Bike Race",
                location: <Location>{
                    id: 3,
                    name: "Mars",
                    coordinates: <Coordinates>{ x: 3, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 1,
                        name: "Launch Pad"
                    }
                ]
            },{
                id: 5,
                name: "Jupiter Roller Derby",
                location: <Location>{
                    id: 4,
                    name: "Jupiter",
                    coordinates: <Coordinates>{ x: 4, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 1,
                        name: "Launch Pad"
                    },{
                        id: 0,
                        name: "Pool"
                    },{
                        id: 6,
                        name: "Monolith"
                    }
                ]
            },{
                id: 6,
                name: "Saturn Ring Toss",
                location: <Location>{
                    id: 5,
                    name: "Saturn",
                    coordinates: <Coordinates>{ x: 5, y: 0}
                },
                tags: <Tag[]>[
                    {
                        id: 1,
                        name: "Launch Pad"
                    },{
                        id: 5,
                        name: "Cassini–Huygens"
                    }
                ]
            },{
                id: 7,
                name: "Saturn Meditation",
                location: <Location>{
                    id: 5,
                    name: "Saturn",
                    coordinates: <Coordinates>{ x: 5, y: 0}
                }
            }
        ];
    return {events};
  }
}