import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
    return (
        <div className="card-body">
            <div className="row">
                <div class="table ">
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((row, index) => {
                            return <TableRow key={index} data={row} />
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );
}

export default Table;