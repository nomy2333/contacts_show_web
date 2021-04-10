import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// function createData(cusId, name, username, email, phone, website,address,company) {
//   return {
//     cusId,
//     name,
//     username,
//     email,
//     phone,
//     website,
//     address:{
//         street,
//         suite,
//         city,
//         zipcode,
//         geo: {
//             lat,
//             lng
//       }
//     },
//     company:{
//         coname,
//         catchPhrase,
//         bs
//     }
//   };
// }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  console.log("22222222")
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.username}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Company
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>catchPhrase</TableCell>
                    <TableCell align="right">bs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.company.map((companyRow) => (
                    <TableRow key={companyRow.name}>
                      <TableCell component="th" scope="row">
                        {companyRow.name}
                      </TableCell>
                      <TableCell>{companyRow.catchPhrase}</TableCell>
                      <TableCell align="right">{companyRow.bs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <Typography variant="h6" gutterBottom component="div">
                Address
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>zipcode</TableCell>
                    <TableCell>street</TableCell>
                    <TableCell>suite</TableCell>
                    <TableCell>city</TableCell>
                    <TableCell align="right">geo.lat</TableCell>
                    <TableCell align="right">geo.lng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.address.map((addressRow) => (
                    <TableRow key={addressRow.zipcode}>
                      <TableCell component="th" scope="row">
                        {addressRow.zipcode}
                      </TableCell>
                      <TableCell>{addressRow.street}</TableCell>
                      <TableCell>{addressRow.suite}</TableCell>
                      <TableCell>{addressRow.city}</TableCell>
                      <TableCell align="right">{addressRow.geo.lat}</TableCell>
                      <TableCell align="right">{addressRow.geo.lng}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    cusId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    company: PropTypes.arrayOf(
      PropTypes.shape({
        coname: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }),
    ).isRequired,
    address: PropTypes.arrayOf(
        PropTypes.shape({
          zipcode: PropTypes.string.isRequired,
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }),
      ).isRequired,
  }).isRequired,
};



export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/* {console.log("333333")} */}
        {console.log("33333"+props)}
          {/* {props.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}