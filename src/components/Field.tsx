import useFieldsStore from "../store/fieldsStore";
import {FC, useCallback} from "react";

interface FieldProps {
		id: number
}

export const Field: FC<FieldProps> = ({ id }) => {
	const { onHover, hoverFields, isHoverMode } = useFieldsStore()

	const onHoverField = useCallback(() => {
		if (isHoverMode) onHover(id)
		else return null
	}, [id, isHoverMode])

	return <div
		className={`field${hoverFields.has(id) ? ' hover' : ''}`}
		onMouseEnter={onHoverField}
	></div>
}