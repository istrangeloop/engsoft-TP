import React,{useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  makeStyles,
  Divider,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import ModalFunction from "./modal";
import TablePaginationActions from './tablePagination'; 

const List = ({ items }) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return (
    <div className={classes.root}>
      <Divider variant="middle" style={{ background: "blue" }} />
      <Box class={classes.table}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow class={classes.row}>
                <TableCell style={{ fontSize: "24px", color: "#ffffff"}}>
                  Alimentos
                </TableCell>
                <TableCell style={{ fontSize: "24px", color: "#ffffff"}} align='center'>
                  Nutrientes
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { items && (rowsPerPage > 0
                ? items.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : items
              ).map((item) => (
                <TableRow key={item.id}>
                      <TableCell style={{ fontSize: "16px"}}>
                        {" "}
                        {item.Nome}
                      </TableCell>
                      <TableCell style={{ fontSize: "16px" }} align='center'>
                        <ModalFunction data={item} />
                      </TableCell>
                    </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "Tudo", value: -1 }]}
                  colSpan={3}
                  count={items.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "linhas": "linhas" },
                    native: false,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  table: {
    margin: "20px 140px 30px",
    border:'2px ridge',
    borderRadius:'5px',
    width: "80%",
  },
  row: {
    background: "#3f51b5",
  },
}));

export default List;
