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