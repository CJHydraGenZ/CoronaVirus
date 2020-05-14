import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export function DataNegara({ data: { confirmed, deaths, recovered } }) {
    // console.log(Data);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <Typography variant="h5" >
                        konfirmasi: {confirmed.value}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <Typography variant="h5" >
                        Meninggal: {deaths.value}
                    </Typography>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <Typography variant="h5" >
                        Sembuh: {recovered.value}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}