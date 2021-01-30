import React from 'react';
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@material-ui/core';
import ModalFunction from './modal';

const List = ({items}) =>{
    return(
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Alimentos</TableCell>
                        <TableCell>Visualizar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items && items.map((item)=>{
                        return(
                            <TableRow key={item.id}>
                                <TableCell>{item.Nome}</TableCell>
                                <TableCell>
                                    <ModalFunction
                                      data={item}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default List;