import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../src/datatablesource';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletee } from '../../redux/userRows';

function DataTable() {
  const userRows = useSelector((state) => state.userRows);
  const dispatch = useDispatch()

  const rowsWithId = userRows.map((row, index) => {
    return { ...row, id: index + 1 };
  });


  const userAction = [
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      headerClassName: 'custom-header',
      renderCell: (params) => {
        return (
          <div className={`flex flex-row gap-2 items-center`}>
            <NavLink
              to={`/users/${params.row.id}`}
              className={`px-2 py-1 rounded-md cursor-pointer text-[#7070BE] border-dashed border-[1px] border-[#7070BE] text-[12px]`}
            >
              View
            </NavLink>
            <button
              onClick={() => dispatch(deletee(params.row.id))}
              className={`px-2 py-1 rounded-md cursor-pointer text-[#E86680] border-dashed border-[1px] border-[#E86680] text-[12px]`}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full ">
      <DataGrid
        rows={rowsWithId}
        columns={userColumns.concat(userAction)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;