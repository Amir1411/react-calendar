import React from 'react';
import { generateRandomKey } from '../../../Constants/Utils';

const CalRow = (props) => {
    const drawCells = () => {
        let cells = props.cells.map((d, index) => {
            let event;
            if(d.eventData) {
                event = d.eventData.map(e => {
                    let classAttr = e === ' ' ? 'event empty-event' : 'event';
                    return <div key={generateRandomKey()} className={classAttr} title={e}>{e}</div>
                })
            }
            return <td key={generateRandomKey()+d.day}>
                <span className={d.customClass}>{d.day}</span>
                {event}
            </td>
        });
        return cells;
    };
    return (
        <tr>
            {drawCells()}
        </tr>
    );

};


export default CalRow
