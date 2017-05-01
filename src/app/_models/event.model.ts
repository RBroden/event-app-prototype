import { Location} from './location.model';
import { Tag } from './tag.model';

export class Event {
    id: number;
    name: string;
    location: Location;
    tags?: Tag[];
}