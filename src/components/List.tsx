import { useState } from "react";

interface Props {
  data: string[];
  onSelect?: (item: string) => void;
}

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number, item: string) => {
    setIndex(i);
    onSelect?.(item);
  };
  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => handleClick(i, item)}
          className={`list-group-item ${index == i ? "active" : ""}`}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
