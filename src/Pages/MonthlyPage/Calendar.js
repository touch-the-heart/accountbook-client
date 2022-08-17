import React, { useState } from "react";
import "react-calendar/dist/Calendar.css"; // css import
import styled from "styled-components";

export default function Calendar({ year, month }) {
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  const frontEmpties = firstDate.getDay();
  const items = lastDate.getDate();
  const lastEmpties = 7 - ((frontEmpties + items) % 7);
  const dateItems = [
    ...new Array(frontEmpties),
    ...new Array(items).fill(0).map((_, i) => `${(i + 1).toString()}`),
    ...new Array(lastEmpties),
  ];
  console.log(dateItems);
  console.log(year);
  console.log(month);
  console.log(firstDate.getFullYear());

  return (
    <Container>
      {dateItems.map((el, i) => {
        return (
          <div className="date" key={i}>
            {el ? el : " "}
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 300px;
  margin-bottom: 50px;
  width: 1204px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
  box-shadow: 0px 3px 10px gray;
  border-radius: 0.5rem;
  .date {
    font-family: "Nanum Myeongjo", serif;
    font-size: 13px;
    display: flex;
    justify-content: right;
    padding-right: 5px;
    padding-top: 150px;
    height: 172px;
    border: 1px solid lightgray;
  }
`;
