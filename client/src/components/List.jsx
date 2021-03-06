import React from "react";
import { Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

const List = ({ list, handleDelete }) => {
  return (
    <div className="list">
      {list.map((item) => (
        <div key={item._id} style={{ margin: ".5em" }}>
          <Card margin="normal">
            <h5>{item.name}</h5>
            <p> {item.description}</p>
            <Link to={`edit/${item._id}`}>
              <Button 
                margin="normal" 
                variant="contained">
                Edit
              </Button>
            </Link>
            <Button 
              onClick={() => handleDelete(item._id)}
              margin="normal" 
              variant="contained" 
              color="error">
              Delete
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default List;
