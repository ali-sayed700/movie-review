import { memo } from "react";

const Genre = ({ name }: { name: string }) => {
  return (
    <span className="text-secondary border rounded py-1 px-2 ">{name}</span>
  );
};

export default memo(Genre);
