export const getOffset = (index, active, total) => {
  let offset = index - active;
  if (offset < -total / 2) offset += total;
  if (offset > total / 2) offset -= total;
  return offset;
};
