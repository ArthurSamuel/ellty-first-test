import { useState } from "react";
import "./App.css";
import Selector from "./component/Selector";
import Button from "./component/button";

function App() {
  const [allChecked, setAllChecked] = useState<undefined | boolean>(undefined);
  const [checked, setChecked] = useState<undefined | boolean[]>(
    Array(6).fill(undefined)
  );

  const handleOnChange = (index: number) => {
    setChecked((prev) =>
      prev?.map((item, indexItem) => {
        if (index === indexItem) {
          item = !item;
        }
        return item;
      })
    );
  };

  const handleOnChangeAll = () => {
    setChecked((prev) =>
      prev?.map((item) => {
        item = !allChecked;
        return item;
      })
    );
    setAllChecked((prev) => !prev);
  };

  return (
    <div className="card">
      <Selector
        checked={allChecked}
        label="All pages"
        onChange={() => handleOnChangeAll()}
      />
      <div className="gutter">
        <div className="line"></div>
      </div>
      <div className="wrapper">
        {checked?.map((item, index) => (
          <Selector
            key={index}
            checked={item}
            label={`Page ${index + 1}`}
            onChange={() => handleOnChange(index)}
          />
        ))}
      </div>
      <div className="gutter">
        <div className="line"></div>
      </div>
      <div className="buttonContainer">
        <Button />
      </div>
    </div>
  );
}

export default App;
