import {FC, useMemo} from "react";
import {Mode} from "../types/types";
import {Field} from "./Field";
import useFieldsStore from "../store/fieldsStore";
import {HoveredField} from "./HoveredField";

interface FieldsWrapperProps {
		selectedMode: Mode
}

export const HoveredFieldsWrapper: FC<FieldsWrapperProps> = ({ selectedMode }) => {
	const { hoverFields } = useFieldsStore();
	
  return <div className={'hoveredWrapper'}>
		{Array.from(hoverFields).map((index) => <HoveredField
			key={index}
			index={index}
			fieldsRow={selectedMode.field}
		/>)}
	</div>
}