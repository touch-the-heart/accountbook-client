import styled from "styled-components";
import Nav from "../../Assets/Nav";
import { useState } from "react";
import Calendar from "./Calendar";

export default function Monthly() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <Container>
      <Nav
        bgColor={"#E4E2BC"}
        month={month}
        year={year}
        setMonth={setMonth}
        currentDate={currentDate}
      />
      <Week>
        <span>sun</span>
        <span>mon</span>
        <span>tue</span>
        <span>wed</span>
        <span>thu</span>
        <span>fri</span>
        <span>sat</span>
      </Week>
      <Calendar year={year} month={month} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  text-align: center;
`;

const Week = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 188px;
  width: 1204px;
  height: 62px;
  box-shadow: 0px 3px 10px gray;
  border-radius: 0.5rem;
  z-index: 5;
`;
