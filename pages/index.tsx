import type { NextPage } from 'next'
import Layout from "../components/Layout";
import {MainContainer} from "./style";



export default function Home() {
  return (
    <div>
          <MainContainer>
         <Layout/>
       </MainContainer> 
     
    </div>
  );
}