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

export interface Flight {
    id: string,
    departuretime: number,
    arrivaltime: number,
    readable_departure: string,
    readable_arrival: string, 
    origin: string,
    destination: string,
    scheduled?: boolean 
}

export interface FlightState {
    flights: Flight[]; 
    status: 'idle' | 'loading' | 'failed';   
}

export interface Rotation {
    id: string,
    aircraftId: string,
    date: string,
    flights: Flight[],
}

export interface RotationState {
    currentRotationId?: string,
    status: 'idle' | 'loading' | 'failed';
    rotationList: Rotation[]
}