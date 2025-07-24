import React from 'react';

const DataTable = ({ columns, data }) => {
    return (
        <table className="min-w-full border divide-y divide-gray-200">
            <thead>
                <tr>
                    {columns.map((col, idx) => (
                        <th key={idx} className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                            {col.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((col, i) => (
                            <td key={i} className="px-4 py-2 text-sm text-gray-800">
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
