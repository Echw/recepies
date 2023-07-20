import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "amount" | "ingredient";
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

const columns: Column[] = [
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
  },
  {
    id: "ingredient",
    label: "Ingredient",
    minWidth: 170,
  },
];

interface Data {
  amount: string;
  ingredient: string;
}

function createData(amount: string, ingredient: string): Data {
  return { amount, ingredient };
}

const rows = [
  createData("500g", "flour"),
  createData("x1", "egg"),
  createData("250g", "sugar"),
];

export const RecipeIngridientsColumn = () => {
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Dough
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ top: 57 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.ingredient}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
