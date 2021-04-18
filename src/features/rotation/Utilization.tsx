import React from 'react';
import { Flight,} from '../../common/types'
import { ProgressBar } from "react-bootstrap";
import CSS from 'csstype';

const ps: CSS.Properties = {
  height: '40px',
};

interface UtilizationDetails {
    type: 'turnaround' | 'idle' |'flight';
    duration: number
}
function createUtilization(flights: Flight[]): UtilizationDetails[]{
    let data: UtilizationDetails[] = []
    flights.forEach((item, ix, array) =>{
        if(ix === 0){
            data.push({type:'idle', duration : item.departuretime})
        }

        if(ix> 0 && ix < (array.length )){
            data.push({type: 'idle', duration: (array[ix].departuretime - (array[ix-1].arrivaltime + 1200))})
        }
        data.push({type:'flight', duration: item.arrivaltime - item.departuretime})
        data.push({type: 'turnaround', duration: 1200})

        if(ix === array.length -1){
            let last = array[array.length -1];
            data.push({type: 'idle', duration: (86400 - last.arrivaltime)})
        }

    });
    return data;
}

export function Utilization(props: { flights: Flight[] }) {
    const utilization = createUtilization(props.flights)    
    return (
        <div>
            <div>
              <ProgressBar style={ps}>
                  {utilization.map((value, ix)=>{
                      if(value.type === 'turnaround')
                        return( <ProgressBar className={'progress-bar-turnaround'} variant="warning" now={value.duration} key={ix} />)
                      if(value.type === 'idle')
                        return( <ProgressBar className={'progress-bar-idle'} variant="info" now={value.duration} key={ix} />)
                      if(value.type === 'flight')
                        return( <ProgressBar className={'progress-bar-flight'} variant="success" now={value.duration} key={ix} />)
                      return (<div/>)
                  })}
              </ProgressBar>
            </div> 
        </div>
    );
}