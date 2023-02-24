import {FC, useMemo} from "react";
import {Mode} from "../types/types";
import {Field} from "./Field";

interface FieldsWrapperProps {
		selectedMode: Mode;
}

export const FieldsWrapper: FC<FieldsWrapperProps> = ({ selectedMode }) => {

	const data = useMemo(() => {
		if (selectedMode) return new Array(selectedMode.field ** 2).fill().map((_, index) => ({ id: index }))
		else return []
	}, [selectedMode])
	
  return <div
			className={'wrapper'}
			style={{
				gridTemplateColumns: `repeat(${selectedMode.field}, 1fr)`,
				gridTemplateRows: `repeat(${selectedMode.field}, 1fr)`,
			}}
		>
		{data.map((item) => <Field key={item.id} id={item.id} />)}
	</div>
}
