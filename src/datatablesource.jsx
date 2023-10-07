export const userColumns = [
    { field: "id", headerName: "ID", width: 70,headerClassName: "custom-header",
    renderCell:(params) =>{
      return(
        <p className="text-tx">{params.row.id}</p>
      )
    } },
    {
      field: "user",
      headerName: "User",
      width: 230,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="cellWithImg flex flex-row gap-2 items-center">
            <img className="cellImg w-[25px] h-[25px] rounded-full" src={params.row.img} alt="avatar" />
            <p className="text-tx">{params.row.username}</p>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      headerClassName: "custom-header",
      renderCell:(params) =>{
        return(
          <p className="text-tx">{params.row.email}</p>
        )
      }
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
      headerClassName: "custom-header",
      renderCell:(params) =>{
        return(
          <p className="text-tx">{params.row.age}</p>
        )
      }
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status} rounded-md  px-2 py-1`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];



  