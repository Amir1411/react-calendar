import React, { useState } from 'react';

const CreateEvent = (props) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "startDate") setStartDate(e.target.value);
        if (e.target.name === "endDate") setEndDate(e.target.value);
        if (e.target.name === "description") setDescription(e.target.value);
    };
    const handleSubmit = () => {
        let data = {
            from: startDate,
            to: endDate,
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
                    <div>
                        <div className="form-group">
                            <label>From</label>
                            <input
                                type="date"
                                className="form-control"
                                name="startDate"
                                value={startDate}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input
                                type="date"
                                className="form-control"
                                name="endDate"
                                value={endDate}
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