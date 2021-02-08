import React from "react";
import "./style1.css";

function CollapsibleRow({ nameId }) {
  const user = [
    {
      name: "rohit",
      age: "20",
      email: "rohit@gmail.com",
    },
    {
      name: "deppak",
      age: "20",
      email: "deepak@gmail.com",
    },
    {
      name: "sandeep",
      age: "25",
      email: "sandeep@gmail.com",
    },
    {
      name: "keshav",
      age: "22",
      email: "keshavThakur@gmail.com",
    },
  ];

  const [userdata, setUserData] = React.useState(user);
  const [detaildata, setDetailData] = React.useState([]);

  React.useEffect(() => {
    console.log("first time on load", detaildata);
  });

  function toggleShown(nameindex) {
    const showdata = detaildata.slice();
    var index = showdata.indexOf(nameindex);
    showdata.pop(nameindex);
    if (index >= 0) {
      showdata.splice(index, 1);
      setDetailData(showdata);
    } else {
      showdata.push(nameindex);
      setDetailData(showdata);
    }
  }
  return (
    <div className="Main_Container">
      <div className="collapsible_Table">
        <div className="collapsible_Header">
          <h4>Image</h4>
          <h4>Name</h4>
          <h4>Email</h4>
        </div>

        {userdata.map((user, index) => {
          return (
            <div key={index} className="collapsible_rows">
              <div
                onClick={() => toggleShown(user.name)}
                className="collapsible_row"
              >
                <h6>{user.email}</h6>
                <h6>{user.name}</h6>
                <h6>{user.age}</h6>
              </div>
              {detaildata.includes(user.name) && (
                <div className="expandable_row">
                  {nameId === "Coffee" ? (
                    <h1>
                      {user.name} would like to drink {nameId}
                    </h1>
                  ) : nameId === "Tea" ? (
                    <h1>
                      {user.name} would like to drink {nameId}
                    </h1>
                  ) : (
                    <h1>{user.name} would like to drink tea.</h1>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CollapsibleRow;
