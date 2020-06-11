import React from 'react';

const CropRow = ({
  includeRegrow,
  name,
  grow_time,
  harvest_amount,
  regrows,
  img_url
}) => {
  // fail-safe, loads a default image
  const loadDefaultImage = event => event.target.src='logo512.png'

  return (
    <tr>
      <td>
        <img alt={name} src={img_url} onError={loadDefaultImage} />
        { name }
      </td>
      <td>{ grow_time }</td>
      <td>{ harvest_amount }</td>
      { includeRegrow && <td>{ regrows && "✅" }</td> }
    </tr>
  );
}

export default CropRow;
