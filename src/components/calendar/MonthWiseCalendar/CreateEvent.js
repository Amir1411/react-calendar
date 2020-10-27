import React, { useState } from 'react';
import { checkTime } from '../../../Constants/Utils';

const CreateEvent = (props) => {
    const [errorContainer, setErrorContainer] = useState("");
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
    const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) => {
        setErrorContainer("");
        if (e.target.name === "startDate") setStartDate(e.target.value);
        if (e.target.name === "endDate") setEndDate(e.target.value);
        if (e.target.name === "description") setDescription(e.target.value);
        if (e.target.name === "endTime") {
            const ch = checkTime(e.target.value);
            if (ch) {
                setErrorContainer("You can not select past time");
                return false;
            }
            setEndTime(e.target.value);
        }
        if (e.target.name === "startTime") {
            const ch = checkTime(e.target.value);
            if (ch) {
                setErrorContainer("You can not select past time");
                return false;
            }
            setStartTime(e.target.value);
        }
    };
    const handleSubmit = () => {
        setErrorContainer("");
        if (startDate === null) {
            setErrorContainer("From date is required");
            return false;
        }
        if (endDate === null) {
            setErrorContainer("To date is required");
            return false;
        }
        if (startTime === "") {
            setErrorContainer("From time is required");
            return false;
        }
        if (endTime === "") {
            setErrorContainer("To time is required");
            return false;
        }
        if (description === "") {
            setErrorContainer("Description field is required");
            return false;
        }
        let data = {
            from: startDate,
            to: endDate,
            startTime,
            endTime,
            description: description,
        };
        props.handleSubmit(data);
        setStartDate('');
        setEndDate('');
        setDescription('');
    };

    return (
        <div className="popup-container-wrap">
            <div className="background-overlay" onClick={props.closeEventPopup}></div>
            <div className="popup-container">
                <div className="">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h1>Create new Event</h1>
                        </div>
                        <div className="pull-right">
                            <i className="fa fa-times" onClick={props.closeEventPopup}></i>
                        </div>
                    </div>
                    {errorContainer !== "" && (<p className="error">{errorContainer}</p>)}
                    <div>
                        <div className="form-group">
                            <label>From</label>
                            <input
                                type="date"
                                className="form-control"
                                min={new Date().toISOString().split("T")[0]}
                                name="startDate"
                                value={startDate}
                                onChange={(e) => handleChange(e)}
                            />
                            <input 
                                type="time"
                                className="form-control"
                                name="startTime"
                                value={startTime}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input
                                type="date"
                                className="form-control"
                                min={new Date().toISOString().split("T")[0]}
                                name="endDate"
                                value={endDate}
                                onChange={(e) => handleChange(e)}
                            />
                            <input 
                                type="time"
                                className="form-control"
                                name="endTime"
                                value={endTime}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={description}
                                onChange={(e) => handleChange(e)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;