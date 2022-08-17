import styled from "styled-components";

export default function DailyNav() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const monthItems = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return (
    <Nav>
      <div className="year">{year}</div>
      <div>
        <span className="currentmonth">{monthItems[month]}</span>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 207px;
  background-color: #58627d;
  text-align: center;
  font-family: "Nanum Myeongjo", serif;
  .year {
    margin-top: 35px;
    margin-bottom: 20px;
    font-size: 30px;
  }
  .currentmonth {
    margin: 0px 50px;
    font-weight: bold;
    color: #62afc8;
    font-size: 60px;
  }
`;
