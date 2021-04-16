export interface Aircraft {
    ident: string;
    type: string;
    economySeats: number;
    base: string;
    selected: boolean;
    utilization?: number; 
}

export interface AircraftState {
    aircrafts: Aircraft[]; 
    status: 'idle' | 'loading' | 'failed';   
}