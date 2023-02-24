import useFieldsStore from "../store/fieldsStore";
import {ChangeEvent, Dispatch, FC, SetStateAction, useCallback} from "react";
import {ModeName} from "../types/types";

interface SelectProps {
  selected: ModeName | ''
  setSelected: Dispatch<SetStateAction<"" | ModeName>>
}

export const SelectMode: FC<SelectProps> = ({ selected, setSelected }) => {
  const { resetHover, toggleHoverMode, isHoverMode } = useFieldsStore()
  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    resetHover();
    setSelected(event.target.value as ModeName);
  }, []);

  return <>
    <select value={selected} onChange={handleChange}>
      <option disabled={true} value="">
	--Choose and option--
      </option>
      <option value="Easy">Easy</option>
      <option value="Normal">Normal</option>
      <option value="Hard">Hard</option>
    </select>
    {selected && 
      <button
	onClick={toggleHoverMode}
      >{isHoverMode ? 'Stop' : 'Start'}</button>
    }
  </>
}
