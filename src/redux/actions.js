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
export const textAdded = () => ({
  type: TEXT_ADDED,
})

export const TEXT_MOVED = 'TEXT_MOVED'
export const textMoved = () => ({
  type: TEXT_MOVED,
})

export const TEXT_REMOVED = 'TEXT_REMOVED'
export const textRemoved = () => ({
  type: TEXT_REMOVED,
})

export const BACKGROUND_SELECTED = 'BACKGROUND_SELECTED'
export const backgroundSelected = () => ({
  type: BACKGROUND_SELECTED,
})

export const BACKGROUND_REMOVED = 'BACKGROUND_REMOVED'
export const backgroundRemoved = () => ({
  type: BACKGROUND_REMOVED,
})
