import styled from "styled-components";

export default function Nav({ bgColor, year, setMonth, month }) {
  const firstDate = new Date(year, month, 1);
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
  console.log(firstDate.getMonth());
  return (
    <Navbar bgColor={bgColor}>
      <div className="year">{firstDate.getFullYear()}</div>
      <div>
        <span
          className="lastmonth"
          onClick={() => {
            setMonth(month - 1);
          }}
        >
          {"<"}
        </span>
        <span className="currentmonth">{monthItems[firstDate.getMonth()]}</span>
        <span
          className="nextmonth"
          onClick={() => {
            setMonth(month + 1);
          }}
        >
          {">"}
        </span>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 207px;
  background-color: ${(props) => props.bgColor};
  text-align: center;
  font-family: "Nanum Myeongjo", serif;
  .year {
    margin-top: 35px;
    margin-bottom: 20px;
    font-size: 30px;
  }
  .lastmonth {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
  .currentmonth {
    margin: 0px 50px;
    font-weight: bold;
    color: #62afc8;
    font-size: 60px;
  }
  .nextmonth {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
`;
