import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.duration}</td>
            <td>{props.data.rating}</td>
            <td>{props.data.genre}</td>
            <td>{props.data.awards}</td>
        </tr>
    );
}

export default TableRow;