import React from 'react';
import DrawRowsComponent from "./DrawRows";
import { weekNames } from '../../../Constants/Constants';

const MonthView = (props) => {
    return(
        <table width="100%" className="table table-bordered">
            <thead>
                <tr>
                    {weekNames.map((name) => {
                        return <th key={name}>{name}</th>;
                    })}
                </tr>
            </thead>
            <DrawRowsComponent
                date={props.date}
                getCurrentDate={props.getCurrentDate}
                events={props.events}
            />
        </table>
    );
}

export default MonthView;