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

export default function Users(): JSX.Element {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');

    const createUser = async () => {
        const rawResponse = await fetch('/api/user', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, userType})
        });
        const content = await rawResponse.json();
    }

    return (
        <div>
          <Typography className="newProductHeader">New User</Typography>
          <form>
            <div className={classes.formControl}>
                <label className={classes.formControl}>Name</label>
                <input
                    type='text'
                    placeholder='Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={classes.formControl}>
                <label className={classes.formControl}>Email</label>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={classes.formControl}>
                <label className={classes.formControl}>Email</label>
                <input
                    type='text'
                    placeholder='User Type'
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                />
            </div>
            <button onClick={createUser}>Add</button>    
          </form>  
        </div>
    )
}