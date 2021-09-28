import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addProp } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    builder: '',
    price: '',
    phone: '',
    desc: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddEstateProp = () => {
    const [Prop, setProp] = useState(initialValue);
    const { name, builder, price, phone, desc } = Prop;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e:any) => {
        console.log(e.target.value);
        setProp({...Prop, [e.target.name]: e.target.value})
    }

    const addPropDetails = async() => {
        await addProp(Prop);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Property</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Builder</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='builder' value={builder} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='desc' value={desc} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addPropDetails()}>Add Property</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddEstateProp;