import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { FetchDataGlobal, FetchDataCountries } from './fetch';

import Container from '@material-ui/core/Container';

import { Negara } from './Nagara';
import { DataNegara } from './DataNegara'

export function DashBoard() {
	// FetchDataIndonesia
	const [Data, setData] = useState([])
	const [negara, setNegara] = useState('')
	useEffect(() => {
		const resultsData = async () => {
			setData(await FetchDataGlobal())

		}
		resultsData()
	}, [])
	async function hdlChange(negara) {
		setData(await FetchDataGlobal(negara))
		setNegara(negara)
	}
	if (!Data.confirmed) {
		return 'Loading'
	}
	return (
		<>
			<AppBar position="static">
				<h2>{negara.toLocaleUpperCase() || 'GLOBAL'}</h2>
			</AppBar>
			<Container maxWidth="lg">
				<DataNegara data={Data} />
				<Negara hdlChange={hdlChange} />
			</Container>
		</>
	)
}