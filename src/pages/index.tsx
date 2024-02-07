import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout/public/public";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <Layout header>
      <h1>Main</h1>
    </Layout>
  );
}
