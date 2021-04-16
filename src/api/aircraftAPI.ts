
import { Aircraft } from '../features/aircrafts/types'
import { Flight,  } from '../features/flights/types'

export function fetchAircrafts() {
    return new Promise<Aircraft[]>((resolve) =>
        setTimeout(() => resolve(
            [{ "ident": "GABCD", "type": "A320", "economySeats": 186, "base": "EGKK", "selected": false },
            { "ident": "GABCD1", "type": "A320", "economySeats": 186, "base": "LFMN", "selected": true },
            { "ident": "GABCD2", "type": "A320", "economySeats": 186, "base": "LFSB", "selected": false }
        ]), 1000)
    );
}

const flights = [
{"id":"AS1002","departuretime":27900,"arrivaltime":32100,"readable_departure":"07:45","readable_arrival":"08:55","origin":"LFMN","destination":"LFSB"},
{"id":"AS1025","departuretime":22800,"arrivaltime":28200,"readable_departure":"06:20","readable_arrival":"07:50","origin":"LFSB","destination":"EDDH"},
{"id":"AS1026","departuretime":30000,"arrivaltime":35100,"readable_departure":"08:20","readable_arrival":"09:45","origin":"EDDH","destination":"LFSB"},
{"id":"AS1027","departuretime":35100,"arrivaltime":40500,"readable_departure":"09:45","readable_arrival":"11:15","origin":"LFSB","destination":"EDDH"},
{"id":"AS1028","departuretime":42300,"arrivaltime":47400,"readable_departure":"11:45","readable_arrival":"13:10","origin":"EDDH","destination":"LFSB"},
{"id":"AS1043","departuretime":27900,"arrivaltime":33600,"readable_departure":"07:45","readable_arrival":"09:20","origin":"LFSB","destination":"EHAM"},
{"id":"AS1044","departuretime":21600,"arrivaltime":26100,"readable_departure":"06:00","readable_arrival":"07:15","origin":"EHAM","destination":"LFSB"},
{"id":"AS1057","departuretime":36900,"arrivaltime":43500,"readable_departure":"10:15","readable_arrival":"12:05","origin":"LFSB","destination":"LEPA"},
{"id":"AS1058","departuretime":45600,"arrivaltime":52800,"readable_departure":"12:40","readable_arrival":"14:40","origin":"LEPA","destination":"LFSB"},
{"id":"AS1067","departuretime":21600,"arrivaltime":31200,"readable_departure":"06:00","readable_arrival":"08:40","origin":"LFSB","destination":"LEMG"},]

export function fetchFlights() {
    return new Promise<Flight[]>((resolve) =>
        setTimeout(() => resolve(flights), 1000)
    );
}

export function fetchFlightsByOrigin(origin: string) {
    return new Promise<Flight[]>((resolve) =>
        setTimeout(() => resolve(
            flights.filter(e => e.origin===origin)
        ), 1000)
    );
}

