import React from "react";
import DynamicTable from "../Table/DynamicTable";
import ConfirmBox from "../confirmbox/ConfirmBox";
import Spinner from "../Loader/Spinner";

const PartnerSetup = () => {
    const columns = [
        // {
        //     field: 'id',
        //     headerName: 'ID',
        //     width: 130 ,
        // },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 130 ,
        },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            width: 130 ,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 130 ,
            valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 32 },
        { id: 6, lastName: 'Melisandre', firstName: 'fsdsfsd', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
        { id: 16, lastName: 'Melisandre', firstName: 'sdfsdf', age: 150 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const onDeleteClick = (ids) => {
        console.log('onDeleteClick', ids);
    };
    const onEditClick = (values) => {
        console.log('onEditClick', values);
    };

 const onAddClick = (values) => {
        console.log('onAddClick', values);
    };

 const onViewClick = (values) => {
        console.log('onViewClick', values);
    };
 const openDialog = (values) => {
        console.log('openDialog', values);
    };

    return(
         <div>
             <DynamicTable
                 GetHeadCells={columns}
                 dataSource={rows}
                 Delete={onDeleteClick}
                 onEdit={onEditClick}
                 Add={onAddClick}
                 View={onViewClick}
             />
             {/*<Spinner/>*/}
         </div>
     )
 };
export default PartnerSetup;
