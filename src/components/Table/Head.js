import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },

    '&:last-child': {
        borderRight: 0,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '& td, & th': {
        borderRight: `1px solid ${theme.palette.common.white}`,
    },
}));


const CustomTableHead = (props) => {
    const { headers } = props;

    return (
        <TableHead>
            <StyledTableRow>
                {headers.map((head, index) => (
                    <StyledTableCell
                        key={index}
                        align={head.align}
                        padding={head.disablePadding ? 'none' : 'normal'}
                    >
                        <span className="fw-bolder">{head.label}</span>

                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    );
}

export default CustomTableHead;