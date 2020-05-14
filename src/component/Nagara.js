import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import { FetchDataCountries } from './fetch';

export function Negara({ hdlChange }) {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const resultsData = async () => {
            setCountries(await FetchDataCountries())
        }
        resultsData()
    }, [setCountries])
    return (
        <FormControl>
            <NativeSelect defaultValue='' onChange={(e) => hdlChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}