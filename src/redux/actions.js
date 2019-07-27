export const LOGO_DROPPED = 'LOGO_DROPPED'
export const logoDropped = ({id, type, top, left}) => ({
  type: LOGO_DROPPED,
  id,
  name: type,
  top,
  left,
})

export const LOGO_REMOVED = 'LOGO_REMOVED'
export const logoRemoved = (id, name) => ({
  type: LOGO_REMOVED,
  name,
  id,
})

export const LOGO_MOVED = 'LOGO_MOVED'
export const logoMoved = ({id, type, top, left}) => ({
  type: LOGO_MOVED,
  id,
  name: type,
  top,
  left,
})

export const LOGO_RESIZED = 'LOGO_RESIZED'
export const logoResized = ({id, name, size}) => ({
  type: LOGO_RESIZED,
  id,
  name,
  size,
})

export const TEXT_ADDED = 'TEXT_ADDED'
export const textAdded = ({id, color, text, fontFamily, textDecoration}) => ({
  type: TEXT_ADDED,
  id,
  color,
  text,
  fontFamily,
  textDecoration,
})

export const TEXT_MOVED = 'TEXT_MOVED'
export const textMoved = ({id, top, left}) => ({
  type: TEXT_MOVED,
  id,
  top,
  left,
})

export const TEXT_REMOVED = 'TEXT_REMOVED'
export const textRemoved = id => ({
  type: TEXT_REMOVED,
  id,
})

export const BACKGROUND_SELECTED = 'BACKGROUND_SELECTED'
export const backgroundSelected = url => ({
  type: BACKGROUND_SELECTED,
  url,
})

export const BACKGROUND_REMOVED = 'BACKGROUND_REMOVED'
export const backgroundRemoved = () => ({
  type: BACKGROUND_REMOVED,
})

export const RESET_STORE = 'RESET_STORE'
export const resetStore = () => ({
  type: RESET_STORE,
})

export const REDO = 'REDO'
export const redo = () => ({
  type: REDO,
})
export const UNDO = 'UNDO'
export const undo = () => ({
  type: UNDO,
})
