import React from 'react';

const CropRow = ({includeRegrow, name, grow_time, harvest_amount, regrows, img_url}) => (
  <tr>
    <td><img alt={name} src={img_url}/> {name}</td>
    <td>{grow_time}</td>
    <td>{harvest_amount}</td>
    { includeRegrow && <td>{regrows && "✅"}</td> }
    {/* <td>{store_level}</td>*/}
  </tr>
);

export default CropRow;
