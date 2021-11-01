import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material"
import { useState } from "react";

const useStyles = makeStyles(() => ({
    newProductHeader: {
        textAlign: "center",
    },
    formControl: {
        margin: "20px 0",
    },
      
    formControlLabel: {
        display: "block",
    }
      
}))



export default function Products(): JSX.Element {
    const classes = useStyles();
    const [name, setName] = useState('');

    const createProduct = async () => {
        const rawResponse = await fetch('/api/product', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        });
        const content = await rawResponse.json();
        console.log(content);
    }

    return (
        <div>
          <Typography className="newProductHeader">New Product</Typography>
          <form>
            <div className={classes.formControl}>
                <label className={classes.formControl}>Name</label>
                <input
                    type='text'
                    placeholder='Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button onClick={createProduct}>Add</button>    
          </form>  
        </div>
    )
}