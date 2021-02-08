import React from "react";
import "./style.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CollapsibleRow from "./CollapsibleRow";

function ValueSeletor() {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState();

  const drinks = ["Select Filter", "Coffee", "Tea"];

  function passValue(name) {
    setValue(name);
    toggleShow();
  }

  function toggleShow() {
    if (expanded == false) {
      setExpanded(true);
    } else if (value) {
      setExpanded(false);
    } else {
      setExpanded(false);
    }
  }

  console.log(expanded);
  console.log(value);

  return (
    <div className="main_container">
      <div onClick={() => toggleShow()} className="selection_view">
        {value ? <h1>{value}</h1> : <h1>select filters</h1>}
        <ArrowDropDownIcon />
      </div>
      {expanded && (
        <div className="selection_Values">
          {drinks.map((item, index) => (
            <div onClick={() => passValue(item)} key={index} className="values">
              <h6>{item}</h6>
            </div>
          ))}
        </div>
      )}

      <CollapsibleRow nameId={value} />
    </div>
  );
}

export default ValueSeletor;
