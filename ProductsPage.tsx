import React from 'react';
import { Table } from 'antd';

const ProductsPage = () => {
  // Existing code...

  return (
    <div>
      {/* Existing code... */}

      {/* Detail Specs Table */} 
      <Table>
        {/* Other columns... */}
        {/* Remove the spec-note-row display for other_note fields */}
        {/* Example: For the detail specs table */}
        {/* <tr> */}
        {/*   <td>{other_note}</td> */}
        {/* </tr> */}

        {/* More rows as needed... */}
      </Table>

      {/* Bulk Spec Table */}
      <Table>
        {/* Existing columns... */}
        {/* Remove the spec-note-row display for other_note fields */}
        {/* Example: For the bulk spec table */}
        {/* <tr> */}
        {/*   <td>{other_note}</td> */}
        {/* </tr> */}

        {/* More rows as needed... */}
      </Table>
    </div>
  );
};

export default ProductsPage;