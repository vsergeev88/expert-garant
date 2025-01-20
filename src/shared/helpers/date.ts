export const randomDate = ({ start, end }: { start: Date; end: Date }) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
