import React from "react";
import { DayTime } from "../../../Constants/Constants";

const DayWiseCalendar = (props) => {
    const currentDate = props.currDayDate;
    const drawRows = () => {
        
    }
    return (
        <div style={{height: "600px", overflow: "auto"}}>
            <table className="table table-bordered">
                <tbody>
                    {DayTime.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td style={{ width: "10%" }}>{d}</td>
                                <td style={{ width: "90%" }}>{
                                    props.events.map((e) => {
                                        let fromDateTime = Math.floor((new Date(e.from)).getTime() / 1000);
                                        let toDateTime = Math.floor(((new Date(e.to)).getTime()+(1000 * 60 * 60 * 24)) / 1000);
                                        let curr = Math.floor((new Date(currentDate)).getTime() / 1000);
                                        if (curr <= toDateTime && curr >= fromDateTime ){
                                            if (d.split(":")[0] === e.startTime.split(":")[0]) {
                                                return <div className="event" key={`${i}-event`}>{e.description}</div>
                                            }
                                        }
                                        return ""
                                    })
                                }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DayWiseCalendar;
