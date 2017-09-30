export class Consommation {
    id: number;
    date:Date;
    distance: number;
    volume: number;

    compute(): number {
        if ( this.distance ) {
            return this.volume *100 / this.distance;
        } else { 
            return 0;
        }
    }
}

export class DB_model {
    maxId: number;
    items: Consommation[];
}