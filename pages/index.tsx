import Container from "@components/Container";
import { getAllPosts } from "@lib/api";
import Head from "next/head";
import HiThere from "@components/SVGs/HiThere";
import IAmPijush from "@components/SVGs/IAmPijush";
import styles from "./styles.module.scss";
import { NextPage } from "next";

type PageProps = {};

const Index: NextPage<PageProps> = props => {
  return (
    <>
      <Head>
        <title>Pijush Barik</title>
      </Head>
      <Container>
        <Container fluid>
          <div className="my-24">
            <HiThere className={styles.hiThere} />
            <IAmPijush className={styles.iAmPijush} />
            <p className={styles.subtitle}>
              Helping people to make the world better through quality softwares.
            </p>
          </div>

          <div>
            <span className="font-serif text-5xl">Recent articles</span>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Index;
