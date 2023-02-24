import {FC} from "react";

interface HoveredFieldProps {
	index: number;
	fieldsRow: number;
}

export const HoveredField: FC<HoveredFieldProps> = ({ index, fieldsRow }) => {
  return <div className={'hoveredField'}>
		row{' '}
		<strong>{Math.ceil((index + 1) / fieldsRow)}</strong>{' '}
		column{' '}
		<strong>{((index + 1) % fieldsRow) || fieldsRow}</strong>
	</div>
}