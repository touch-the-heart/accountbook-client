import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

export default function InputBox({ setData }) {
  const currentDate = new window.Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const td = `${year}-${month + 1}-${date}`;
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState(false);
  const inputForm = {
    category: category,
    contents: content,
    payment: payment,
    income: income,
    amount: Number(amount),
    date: td,
  };
  const InputPost = () => {
    axios.post("http://localhost:4000/account", inputForm);
    setData((prev) => [...prev, inputForm]);
  };
  return (
    <>
      <Container>
        <Date>
          일자
          <div>{td}</div>
        </Date>
        <Category>
          분류
          <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></input>
        </Category>
        <Content>
          내용
          <input
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></input>
        </Content>
        <Payment>
          결제수단
          <input
            onChange={(e) => {
              setPayment(e.target.value);
            }}
          ></input>
        </Payment>
        <Amount>
          금액
          <button
            onClick={() => {
              setIncome(true);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setIncome(false);
            }}
          >
            -
          </button>
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
        </Amount>
        <button
          onClick={() => {
            InputPost();
          }}
        >
          등록
        </button>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 188px;
  font-family: "Nanum Myeongjo", serif;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 1204px;
  height: 62px;
  box-shadow: 0px 3px 10px gray;
  border-radius: 0.5rem;
  z-index: 5;
`;

const Date = styled.span``;
const Category = styled.span``;
const Content = styled.span``;
const Payment = styled.span``;
const Amount = styled.span``;
