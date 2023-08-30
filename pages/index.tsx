import type { NextPage } from 'next'
import Layout from "../components/Layout";
import styled from "styled-components"




export default function Home() {
  return (
    <div>
          <MainContainer>
         <Layout/>
       </MainContainer> 
    </div>
  );
}

const MainContainer = styled.div`
  background-color: rgb(15 23 42);
  margin: 0;
  padding: 0;
  height: 500px;
`;
