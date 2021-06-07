import React from 'react';
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

function createData(rowlist) {
  const addrlist = Object.values(rowlist[4]);
  const conlist = Object.values(rowlist[7]);
  return {
    id: rowlist[0],
    name: rowlist[1],
    username: rowlist[2],
    email: rowlist[3],
    phone: rowlist[5],
    website: rowlist[6],
    address: {
      street: addrlist[0],
      suite: addrlist[1],
      city: addrlist[2],
      zipcode: addrlist[3],
      geolat: Object.values(addrlist[4])[0],
      geolng: Object.values(addrlist[4])[1],

    },
    company: {
      name: conlist[0],
      catchPhrase: conlist[1],
      bs: conlist[2],
    },
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const rowValue = Object.values(row);

  const eachContact = createData(rowValue);

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {eachContact.name}
        </TableCell>

        <TableCell align="right">{eachContact.id}</TableCell>
        <TableCell align="right">{eachContact.username}</TableCell>
        <TableCell align="right">{eachContact.email}</TableCell>
        <TableCell align="right">{eachContact.phone}</TableCell>
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
                    <TableCell>bs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow align="right">
                    <TableCell component="th" scope="row">{eachContact.company.name}</TableCell>
                    <TableCell>{eachContact.company.catchPhrase}</TableCell>
                    <TableCell>{eachContact.company.bs}</TableCell>
                  </TableRow>

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

                  <TableRow align="right">
                    <TableCell component="th" scope="row">
                      {eachContact.address.zipcode}
                    </TableCell>
                    <TableCell>{eachContact.address.street}</TableCell>
                    <TableCell>{eachContact.address.suite}</TableCell>
                    <TableCell>{eachContact.address.city}</TableCell>
                    <TableCell align="right">{eachContact.address.geolat}</TableCell>
                    <TableCell align="right">{eachContact.address.geolng}</TableCell>
                  </TableRow>

                </TableBody>
              </Table>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable({ Rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>NAME</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {Rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
