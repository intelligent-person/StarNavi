import {create} from "zustand";

interface FieldsState {
	isHoverMode: boolean;
  hoverFields: Set<number>
  toggleHoverMode: () => void
  resetHover: () => void
  onHover: (index: number) => void
}

const useFieldsStore = create<FieldsState>((set) => ({
	isHoverMode: false,
  hoverFields: new Set<number>(),
	toggleHoverMode: () => set((state) => ({ isHoverMode: !state.isHoverMode })),
	resetHover: () => set(() => ({ hoverFields: new Set<number>() })),
  onHover: (index) => set((state) => {
		if (state.hoverFields.has(index)) {
			const copy = Object.assign(state.hoverFields)
			copy.delete(index)
			return { hoverFields: copy }
		} else {
			return { hoverFields: state.hoverFields.add(index) }
		}
	})
}))

export default useFieldsStore