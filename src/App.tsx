import {useState} from 'react'
import './App.css'
import {useAppModes} from "./hooks/useAppMode";
import {ModeName} from "./types/types";
import {SelectMode} from "./components/SelectMode";
import {FieldsWrapper} from "./components/FieldsWrapper";
import {HoveredFieldsWrapper} from "./components/HoveredFieldsWrapper";

function App() {
	const [selected, setSelected] = useState<ModeName | ''>('');
	const { modes, isError, isLoading } = useAppModes();

	if (isLoading) return 'Loading...'
	if (isError) return 'Some error, reload the page'

  return (
    <div className="App">
			<SelectMode
				setSelected={setSelected}
				selected={selected}
			/>
			{selected && <>
				<FieldsWrapper selectedMode={modes[selected]}/>
				<HoveredFieldsWrapper selectedMode={modes[selected]}/>
			</>}
    </div>
  )
}

export default App
