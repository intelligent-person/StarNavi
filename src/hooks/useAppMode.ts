import {useEffect, useState} from "react";
import {Mode} from "../types/types";

interface ModesT {
		[name: string]: Mode
}

export const useAppModes = () => {
	const [modes, setModes] = useState<ModesT>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	
	useEffect(() => {
		setIsLoading(true);
		fetch('http://demo7919674.mockable.io', {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		  },
		})
   .then(response => response.json())
   .then((response: Mode[]) => setModes(response.reduce((acc,curr)=> ({...acc, [curr.name]: curr}),{})))
   .catch(() => setIsError(true))
	 .finally(() => setIsLoading(false))
	}, [])

	return {
		modes,
		isLoading,
		isError
	} as const
}