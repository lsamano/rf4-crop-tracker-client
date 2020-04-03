import React from 'react';

const FlowerRow = ({name, grow_time, harvest_amount, img_url}) => (
  <tr>
    <td><img alt={name} src={img_url}/> {name}</td>
    <td>{grow_time}</td>
    <td>{harvest_amount}</td>
    {/* <td>{store_level}</td>*/}
  </tr>
);

export default FlowerRow;
