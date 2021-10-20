import React from 'react';

const Schedule = () => {
    return (
        <div>
            <h5 style={{color:'red'}}className="text-center text-danger mt-3">Open : 24Hours</h5>
            <h5 className="text-center text-primary mt-3">Our best doctors scheduling</h5>
            <table className="table table-dark table-striped w-75 mx-auto">
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Saturday</td>
                        <td>3pm</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>8Am</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>8Am</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>8Am</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>8Am</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>8Am</td>
                        <td>12Am</td>
                    </tr>
                    <tr>
                        <td>Fridday</td>
                        <td>5pm</td>
                        <td>11pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;