import React from "react";
import {Card} from "react-bootstrap";
import Style from './Card.css';

export default function card(props) {
  return (
    <div>
      <Card className={Style} >{props.children}</Card>
    </div>
  );
}
