import type { NextPage } from 'next'
import Layout from "../components/Layout";
import {MainContainer} from "./style";


const Home: NextPage = () => {
  return (
       <MainContainer>
         <Layout/>
       </MainContainer> 
  )
}

export default Home
