import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import InputBox from "../../Assets/InputBox";
import DailyNav from "./DailyNav";

export default function Daily() {
  const currentDate = new window.Date();
  const currentDateString = new window.Date().toDateString();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const td = `${year}-${month + 1}-${date}`;
  const [data, setData] = useState([]);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:4000/account").then((res) => {
      setData([...res.data]);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/account/${id}`);
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const minus = data.filter(
    (el) =>
      el.income === false &&
      new Date(el.date).toDateString() === currentDateString
  );
  console.log(minus);
  useEffect(() => {
    setTotalOutcome(() => {
      return minus.reduce((acc, cur) => {
        return (acc += cur.amount);
      }, 0);
    });

    setTotalIncome(() => {
      return plus.reduce((acc, cur) => {
        return (acc += cur.amount);
      }, 0);
    });
  }, [minus]);

  const plus = data.filter(
    (el) =>
      el.income === true &&
      new Date(el.date).toDateString() === currentDateString
  );

  return (
    <Container>
      <DailyNav />
      <InputBox setData={setData} />
      <Body>
        <div>지출</div>
        {minus.map((el, i) => {
          return (
            <div key={i}>
              {td}
              {el.category}
              {el.contents}
              {el.payment}
              {`-${el.amount}원`}
              <button>수정</button>
              <button
                onClick={() => {
                  handleDelete(el._id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
        <div>{`총지출 : ${totalOutcome}원`}</div>
        <br />
        <div>수입</div>
        {plus.map((el, i) => {
          return (
            <div key={i}>
              {td}
              {el.category}
              {el.contents}
              {el.payment}
              {`-${el.amount}원`}
              <button>수정</button>
              <button
                onClick={() => {
                  handleDelete(el._id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
        <div>{`총수입 : ${totalIncome}원`}</div>
        <div>{`총계 : ${totalIncome - totalOutcome}원`}</div>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  margin-top: 300px;
  width: 1204px;
  height: 700px;
  background-color: white;
  box-shadow: 0px 3px 10px gray;
  border-radius: 0.5rem;
`;
