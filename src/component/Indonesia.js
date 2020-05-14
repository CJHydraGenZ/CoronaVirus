import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { FetchDataIndonesia } from './fetch';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
export function Indonesia() {
    // FetchDataIndonesia
    const [Data, setData] = useState([])
    useEffect(() => {
        const resultsData = async () => {
            console.log(await FetchDataIndonesia());
            setData(await FetchDataIndonesia())
        }
        resultsData()
    }, [])
    return (
        <>
            <AppBar position="static">
                <h2>Indonesia</h2>
            </AppBar>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <Typography variant="h5" >
                                konfirmasi: {Data.konfirmasi}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <Typography variant="h5" >
                                Meninggal: {Data.meninggal}
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <Typography variant="h5" >
                                Sembuh: {Data.sembuh}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}