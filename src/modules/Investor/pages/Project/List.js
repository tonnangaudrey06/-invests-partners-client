import '../../../../styles/projet.scss'

import React from 'react';

import { MdAddCircle } from 'react-icons/md';
// import act1 from '../../../../assets/img/projet.jpg'
// import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { moneyFormat } from '../../../../core/utils/helpers';

import { TablePaginationActions, CustomTableHead } from '../../../../components';

import { UserService } from '../../../../core/services';

import { connect } from "react-redux";

import { projets } from '../../../../core/reducers/auth/actions';

import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&': {
        transition: 'all 0.2s ease-in-out'
    },

    '&:hover td, &:hover th': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        cursor: 'pointer'
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const headCells = [
    // {
    //     align: 'center',
    //     disablePadding: true,
    //     label: '',
    // },
    {
        align: 'left',
        disablePadding: false,
        label: 'Projet',
    },
    {
        align: 'center',
        disablePadding: false,
        label: 'Secteur d\'activité',
    },
    // {
    //     align: 'center',
    //     disablePadding: false,
    //     label: 'Etat',
    // },
    {
        align: 'right',
        disablePadding: false,
        label: 'Investissement',
    },
    {
        align: 'center',
        disablePadding: false,
        label: '',
    },
];

const ProjetList = (props) => {

    const { user, setProjetsData } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [projets, setProjets] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const refreshProjets = () => {
        setLoading(true);
        UserService.getAllUserProjetsInvesti(user.id).then(
            rs => {
                setProjets(rs.data.data);
                setProjetsData(rs.data.data)
                setLoading(false);
            },
            error => {
                setLoading(false);
            }
        )
    }

    React.useEffect(() => {
        function loadProjets() {
            setLoading(true);
            UserService.getAllUserProjetsInvesti(user.id).then(
                rs => {
                    setProjets(rs.data.data);
                    setProjetsData(rs.data.data)
                    setLoading(false);
                },
                error => {
                    setLoading(false);
                }
            )
        }

        loadProjets()
    }, [setProjetsData, user])

    return (
        <Box sx={{ width: '100%' }}>
            <Toolbar className='p-0'>
                <div className="d-flex justify-content-between align-items-center flex-wrap w-100 py-3">
                    <h4 className="fw-bolder">
                        Investissements éffectués
                    </h4>
                    <div className="d-flex align-items-cente">
                        <Button className="me-2" onClick={refreshProjets} variant="contained" startIcon={<RefreshIcon />}>
                            Actualiser
                        </Button>

                        <Button onClick={() => window.location.replace('/projets')} variant="contained" startIcon={<MdAddCircle />}>
                            Nouvel investissement
                        </Button>
                    </div>
                </div>

            </Toolbar>
            <Paper className="shadow rounded" sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: '100%' }} aria-label="custom pagination table">
                        <CustomTableHead headers={headCells} />
                        <TableBody>
                            {(projets?.length > 0 && loading) && (
                                <TableRow style={{ height: 100 }}>
                                    <TableCell colSpan={6}>
                                        <div className="d-flex justify-content-center align-items-center flex-wrap w-100">
                                            <CircularProgress />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                            {(rowsPerPage > 0
                                ? projets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : projets
                            ).map((projet) => (
                                <Tooltip key={projet.id} title="Cliquez pour voir plus de détails" placement="top" arrow>
                                    <StyledTableRow onClick={() => { props.history.push(`${props.match.url}/${projet.projet}`) }}>
                                        {/* <TableCell align="center" component="th" style={{ width: "1%" }} scope="row">
                                            <Avatar alt={projet?.projet_data?.intitule} src={projet?.projet_data?.logo ? projet?.projet_data?.logo : act1} sx={{ width: 30, height: 30 }} />
                                        </TableCell> */}
                                        <TableCell align="left">
                                            <span className="fw-bolder fs-6">{projet?.projet_data?.intitule}</span>
                                        </TableCell>
                                        <TableCell align="center" style={{ width: "25%" }}>
                                            <span className="fw-bolder fs-6">{projet?.projet_data?.secteur_data?.libelle}</span>
                                        </TableCell>
                                        {/* <TableCell align="center" style={{ width: "5%" }}>
                                            {{
                                                'REJETE': <span className="badge bg-danger p-1">{projet?.projet_data?.etat_complet}</span>,
                                                'ATTENTE_DOCUMENT_SUP': <span className="badge bg-dark p-1">{projet?.projet_data?.etat_complet}</span>,
                                                'ATTENTE_PAIEMENT': <span className="badge bg-warning p-1">{projet?.projet_data?.etat_complet}</span>,
                                                'CLOTURE': <span className="badge bg-success p-1">{projet?.projet_data?.etat_complet}</span>,
                                                'PUBLIE': <span className="badge bg-success p-1">{projet?.projet_data?.etat_complet}</span>,
                                            }[projet?.projet_data?.etat] || <span className="badge bg-secondary p-1">En attente</span>}

                                        </TableCell> */}
                                        <TableCell align="right" style={{ width: "15%" }}>
                                            <span className="fw-bolder fs-6">{moneyFormat(projet?.total_investi)} FCFA</span>
                                        </TableCell>
                                        <TableCell align="center" style={{ width: "5%" }}>
                                            <i className="bi bi-chevron-compact-right"></i>
                                        </TableCell>
                                    </StyledTableRow>
                                </Tooltip>
                            ))}

                            {projets?.length <= 0 && (
                                <TableRow style={{ height: 100 }}>
                                    <TableCell colSpan={6}>
                                        <div className="d-flex justify-content-center align-items-center flex-wrap w-100">
                                            {loading && (<CircularProgress />)}
                                            {!loading && (
                                                <h5 className="fw-bolder text-muted">
                                                    Aucun investissement réalisé
                                                </h5>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'Tous', value: -1 }]}
                    labelRowsPerPage={<span>Projet par page</span>}
                    component="div"
                    count={projets.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: {
                            'aria-label': 'Enregistrement par page',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </Paper>
        </Box>
    );
}

const mapStateToProps = (state) => ({ user: state.auth.user })

const mapDispatchToProps = (dispatch) => {
    return {
        setProjetsData: (payload) => dispatch(projets(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjetList);