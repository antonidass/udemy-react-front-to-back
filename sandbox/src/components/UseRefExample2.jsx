import { useState, useEffect, useRef } from "react";

export default function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef("");

  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      Renders <h1>{renders.current}</h1>
      <h1>Prev name {prevName.current}</h1>
      <input
        type="text"
        value={name}
        className="form-control mb-3"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
