import Container from "../components/container";
import Intro from "../components/intro";
import Board from "../components/board";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Wordle</title>
        </Head>
        <Container>
          <Intro />
          <Board />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
