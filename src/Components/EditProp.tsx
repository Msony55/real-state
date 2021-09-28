import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getProps, editProp } from '../Service/api';


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditProp = () => {
    const [Prop, setProp] = useState<any>({
        name: '',
        builder: '',
        price: '',
        phone: '',
        desc:''
      });
    const { name, builder, price, phone, desc } = Prop;
    const { id } = useParams<Record<any, any | undefined>>();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadPropDetails();
    }, []);

    const loadPropDetails = async() => {
      const response = await getProps(id);
        setProp(response);
    }

    const editPropDetails = async() => {
        // setProp({...Prop, [e.target.name]: e.target.value})
        const response = await editProp(id);
        history.push('/all');
    }

    const onValueChange = (e:any) => {
        console.log(e.target.value);
        setProp({...Prop, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Builder</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='builder' value={builder} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Price' value={price} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='desc' value={desc} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editPropDetails()}>Edit Property</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditProp;
