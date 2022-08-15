import styled from "styled-components";
import background from "../../Imgs/background.png";
import MainImg from "../../Imgs/MainImg.png";

export default function Main() {
  return (
    <Container>
      <HeadTitle>ACCOUNT BOOK</HeadTitle>
      <Brand>By SimGuem</Brand>
      <Mainimg src={MainImg}></Mainimg>
      <Linked>
        <Monthly>Monthly</Monthly>
        <Weekly>Weekly</Weekly>
        <Daily>Daily</Daily>
      </Linked>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${background});
  background-size: cover;
  text-align: center;
`;

const HeadTitle = styled.div`
  font-family: "Cormorant Unicase", serif;
  font-size: 95px;
  margin-top: 35px;
`;

const Brand = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`;

const Mainimg = styled.img`
  width: 451px;
  height: auto;
  margin-top: 45px;
`;

const Linked = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Monthly = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  cursor: pointer;
  :hover {
    text-shadow: 3px 3px 5px #eed600;
  }
`;
const Weekly = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  margin: 0px 40px;
  cursor: pointer;
  :hover {
    text-shadow: 3px 3px 5px #58627d;
  }
`;
const Daily = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  cursor: pointer;
  :hover {
    text-shadow: 3px 3px 5px #e58f4e;
  }
`;
