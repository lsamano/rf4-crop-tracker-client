import React from 'react';

const CropRow = ({name, grow_time, harvest_amount, regrows}) => (
  <tr>
    <td>{name}</td>
    <td>{grow_time}</td>
    <td>{harvest_amount}</td>
    <td>{regrows && "✅"}</td>
    {/* <td>{store_level}</td>*/}
  </tr>
);

export default CropRow;
