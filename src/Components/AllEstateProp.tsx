import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getProps, deleteProp } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllEstateProp = () => {
    const [Props, setProps] = useState<any>([]);
    const classes = useStyles();

    useEffect(() => {
        getAllProp();
    }, []);

    const deletePropData = async (id:any) => {
        await deleteProp(id);
        getAllProp();
    }

    const getAllProp = async () => {
        let response = await getProps();
        console.log(response);
        setProps(response);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Name</TableCell>
                    <TableCell>Builder</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Phone no.</TableCell>
                    <TableCell>Descricption</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Props.map((prop:any) => (
                    <TableRow className={classes.row} key={prop._id}>
                        <TableCell>{prop._id}</TableCell>
                        <TableCell>{prop.name}</TableCell>
                        <TableCell>{prop.builder}</TableCell>
                        <TableCell>{prop.price}</TableCell>
                        <TableCell>{prop.phone}</TableCell>
                        <TableCell>{prop.desc}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${prop._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deletePropData(prop._id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllEstateProp;