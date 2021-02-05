import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import ConfirmBox from "../confirmbox/ConfirmBox";
import Tooltip from "@material-ui/core/Tooltip";

const DynamicTable = ({GetHeadCells, dataSource, Delete, onEdit, Add, View}) => {

    const [rowIdS, setRowIdS] = useState([]);
    const [ConfirmOpen, setConfirmOpen] = useState(false);

    useEffect(() => {

    }, [ConfirmOpen]);


    const handleChangeRowsPerPage = (prams) => {
        if (prams.rowIds.length > 0) {
            setRowIdS(prams.rowIds);
        } else {
            setRowIdS([]);
        }
    };

    const onEditChange = () => {
        if (rowIdS.length > 1) {
            console.log('Please Select 1 row');
        } else {
            if (dataSource) {
                dataSource.map(res => {
                    if (res.id === +rowIdS[0]) {
                        onEdit(res);
                    }
                })
            }
        }
    };

    const onAddChange = () => {
        Add('add');
    };

    const onConfirmResponse = (res) => {
        if(res === 'yes') {
            Delete(rowIdS)
        }
    };

    const onView = () => {
        if (rowIdS.length > 1) {
            console.log('Please Select 1 row');
        } else {
            if (dataSource) {
                dataSource.map(res => {
                    if (res.id === +rowIdS[0]) {
                        View(res);
                    }
                })
            }
        }
    };
    const onDelete = () => {
        console.log('delete render');
        if (rowIdS.length > 0) {
            setConfirmOpen(true);
        } else {
            console.log('Please Select any 1 row');
        }
    };
    return (
        <div>
            <div className="btn_main">
                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Tooltip title="Want to Add" placement="top-start">
                        <Button onClick={onAddChange}><AddIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Want to Edit" placement="top-start">
                        <Button onClick={onEditChange}><EditIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Want to Delete" placement="top-start">
                    <Button onClick={onDelete}><DeleteIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Want to View" placement="top-start">
                        <Button onClick={onView}><VisibilityIcon/></Button>
                    </Tooltip>

                </ButtonGroup>
                <ConfirmBox dialog={ConfirmOpen} onClose={(value) => setConfirmOpen(value)} result={onConfirmResponse}/>
            </div>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={dataSource} columns={GetHeadCells}
                    checkboxSelection
                    disableColumnMenu={true}
                    // hideFooterPagination={true }
                    pageSize={5}
                    onPageChange={(params) => {
                        console.log(params);
                    }}
                    onSelectionChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
};

export default DynamicTable;
