import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../src/datatablesource';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebese'
import { doc, deleteDoc } from "firebase/firestore";

function DataTable() {
  const [data, setData] = useState([])




  useEffect(() => {
    const fetchData = async() => {
    const list = []
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
        });
        setData(list)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


    
  const handleInput = async (id) =>{
    try{
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id))
    }catch(err) {
      console.log(err)
    }
  }


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
              onClick={() => handleInput(params.row.id)}
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
    <div className="w-full overflow-x-auto overflow-hidden">
      <DataGrid
        rows={data}
        columns={userColumns.concat(userAction)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;