import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Card, Divider } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="title" content="Share beautiful flowcharts alongside detailed content "/>
        <meta name="description" content="Nodemap let's you create and easily share interactive flowcharts that contain detailed content, images and notes alongside"/>
        <meta name="keywords" content="flowcharts, content, resources, guides, visual"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <style>
          @import url({"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"});
        </style>
        <style>
        @import url({"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"});
        </style>
      </Head>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <img alt="" src={"/NodemapLogo.png"} className={styles.logo}></img>
          <a href='https://app.nodemap.io/signup'><Button variant='filled'>Launch app</Button></a>
        </nav>
        <div  className={styles.outer}>
          <div className={styles.container}>
            <img alt="" src={"/HeroImage.png"} className={styles.hero}></img>
            <div className={styles.heroText}>
              <h1 className={styles.xxLarge}>
                Share{" "}
                <span style={{ color: "#5E60CE" }}>interactive flowcharts</span>{" "}alongside{" "}
                <span style={{ color: "white", background:'#5E60CE', padding:'0vh 1vh', borderRadius:'5px'}}>detailed content</span>
              </h1>
              <p style={{ fontWeight: "normal" }}>
                Easily distribute interactive, beautiful and interesting versions of text resources without compromising on content.
              </p>
              <div className={styles.ctaGroup}>
                <a href='https://app.nodemap.io/signup'>
                  <Button className={styles.ctaButton} variant="contained">
                    get started
                  </Button>
                </a>
                <span > or try our{" "}
                  <a style={{ color: "#6930C3" }} href="https://app.nodemap.io/demo">demo</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.outer}>
              <div className={styles.NodemapInfoContainer}>
                  <div clasName={styles.NodemapInfoBlock}>
                    <h2 className={styles.NodemapInfoTitle}>What is Nodemap?</h2>
                    <p className={styles.NodemapInfoContent}>{"Nodemap combines flowcharts with a content section to turn them into interactive, all-in-one knowledge hubs, each of these creations is a 'Nodemap'. Usually flowchart nodes only contain short labels or titles... not anymore. "}</p>
                    <p className={styles.NodemapInfoContent}>{"You have a blank canvas for each node in your Nodemap where you can use text, links, images and videos to jam pack your Nodemap full of information in a simple, elegant way"}</p>
                    <p className={styles.NodemapInfoContent}>{"The best bit? You can share a copy of your creation with colleagues and clients with a simple link."}</p>
                  </div>
                  <div clasName={styles.NodemapInfoBlock}>
                    <h2 className={styles.NodemapInfoTitle}>Who uses Nodemap?</h2>
                    <p className={styles.NodemapInfoContent}>{"Visual storytellers, course creators and marketing strategists alike, Nodemappers are visual people that prefer videos, images and diagrams to boring pages of text."}</p>
                    <p className={styles.NodemapInfoContent}>{"They are creators at heart that love sharing knowledge with others and sometimes want to turn this into an income source of it's own."}</p>
                  </div>
              </div>
          </div>
          <div className={styles.ctaGroup} style={{flexDirection:'column', alignItems:'center', textAlign:'center', padding:'5vh 0vh'}}>
              <h1 style={{fontSize:'xx-large'}}>What people <span style={{fontStyle:'italic', fontFamily:'Permanent marker', margin:'0', color:'#6930C3', textTransform:'uppercase'}}>love</span> about Nodemap</h1>
          </div>
          <div className={styles.outer}>
            <div className={styles.cardsContainer}>
              <Card elevation={0} className={styles.card}>
                <h2>Create</h2>
                <p>You have full control over the layout and content of your Nodemap creations. Drag nodes around, use custom node images and embed video content to create something useful and beautiful.</p>
              </Card>
              <Card elevation={0} className={styles.card}>
                <h2>Share</h2>
                <p>Sharing your creations with clients, colleagues or an online audience? Just send over your Nodemap link. They will be able to view your resource and can import it into their collection to track progress and make additional notes.</p>
              </Card>
              <Card  elevation={0} className={styles.card}>
                <h2>Earn</h2>
                <p>You have the opportunity to password protect Nodemaps so that you can sell them. This puts money back into the hands of our creators who share their knowledge with others.</p>
              </Card>
            </div>
          </div>
          <div className={styles.ctaGroup} style={{flexDirection:'column', alignItems:'center', padding:'5vh 0vh'}}>
              <a href='https://app.nodemap.io/signup'>
                <Button className={styles.ctaButton} variant="contained">
                  get started
                </Button>
              </a>
              <span style={{margin:'1vh 0'}}> or try our{" "}
                <a style={{ color: "#6930C3" }} href="https://app.nodemap.io/demo">demo</a>
              </span>
          </div>
        </div>
        <div className={styles.bottomNav}>
          <div className={styles.bottomNavContainer}>
            <img alt="" src={"/NodemapLogo.png"} className={styles.logo}></img>
            <div className={styles.socials}>
              <SocialIcon className={styles.icon} bgColor='#6930C3'style={{height: '3vh', width: '3vh'}} url='https://twitter.com/nodemap'></SocialIcon>
              <SocialIcon className={styles.icon} bgColor='#6930C3'style={{height: '3vh', width: '3vh'}} url='mailto:hello@nodemap.io'></SocialIcon>
              <SocialIcon className={styles.icon} bgColor='#6930C3'style={{height: '3vh', width: '3vh'}} url='https://www.linkedin.com/company/nodemapio'></SocialIcon>
              <SocialIcon className={styles.icon} bgColor='#6930C3'style={{height: '3vh', width: '3vh'}} url='https://nodemap.medium.com/'></SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
