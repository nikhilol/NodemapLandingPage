import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Card, Divider } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import {UseCaseCard} from './Components/UseCaseCard' 

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="title" content="Share beautiful flowcharts alongside detailed content "/>
        <meta name="description" content="Nodemap let's you create and easily share interactive flowcharts that contain detailed content, images, videos and notes alongside"/>
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
        <script dangerouslySetInnerHTML={{__html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2689815,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}>
        </script>
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
                Create content packed flowcharts to share with clients and co-workers to demonstrate step by step processes and boost engagement. 
              </p>
              <div className={styles.ctaGroup}>
                <a href='https://app.nodemap.io/signup'>
                  <Button className={styles.ctaButton} variant="contained">
                    get access
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
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{background:'#F8F8FB', height:'auto', margin:'5vh 0', position:'relative', width:'70%', backgroundImage:`url(/static/Section1.png)`, backgroundRepeat:'no-repeat', backgroundPosition:'top right'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <h1 style={{fontSize:'8vw', marginBottom:'0'}}>A new type of resource</h1>
                <p style={{width:'70%', fontSize:'large'}}>{"Usually flowcharts only contain short labels... not anymore. You have a blank canvas for each node where you can use text, links, images and videos to jam pack your Nodemap full of information. Create an online knowledge hub with easy to follow, interactive content."}</p>
              </div>
            </div>
            <div style={{background:'#F8F8FB', height:'auto', margin:'5vh 0', position:'relative', width:'70%', backgroundImage:'url(/static/Section2.png)', backgroundRepeat:'no-repeat', backgroundSize:'60%', backgroundPosition:'left bottom'}}>
              <div style={{display:'flex', flexDirection:'column', textAlign:'right', alignItems:'flex-end'}}>
                <h1 style={{fontSize:'8vw', marginBottom:'0'}}>Embed all types of content</h1>
                <p style={{width:'60%', marginBottom:'20vh', fontSize:'large'}}>{"Bring together information from anywhere into the content section of each node. It's now quick and easy for your viewer to see which content is most relevant to where they are!"}</p>
              </div>
            </div>
            <div style={{background:'#F8F8FB', height:'auto', margin:'5vh 0', position:'relative', width:'70%', backgroundImage:'url(/static/Section3.png)', backgroundRepeat:'no-repeat', backgroundSize:'40%', backgroundPosition:'right bottom'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <h1 style={{fontSize:'8vw', marginBottom:'0'}}>Take things step by step</h1>
                <p style={{width:'50%', fontSize:'large'}}>Break down processes, tasks, and strategies into easy to follow steps for clients and colleagues.</p>
              </div>
            </div>
          </div>
          <div className={styles.ctaGroup} style={{flexDirection:'column', alignItems:'center', textAlign:'center', padding:'0vh 0vh', marginTop:'20vh'}}>
              <h1 style={{fontSize:'xx-large'}}>What people use Nodemap for</h1>
          </div>
          <div className={styles.outer}>
            <div className={styles.UseCaseContainer}>
              <UseCaseCard  Title={'To-dos'} description1={'Plan tasks'} description2={'Track progress'} description3={'Clarify your path'}/>
              <UseCaseCard  Title={'Strategy  planning'} description1={'Plan visually'} description2={'Share strategies with your team'} description3={'Create a roadmap for a client'}/>
              <UseCaseCard  Title={'Product roadmaps'} description1={'Share your progress with users'} description2={'Live updates'} description3={'Users can track your progress'}/>
              <UseCaseCard  Title={'Online courses'} description1={'Create visual knowledge hubs'} description2={'Sell your Nodemap online'} description3={'Students can track their progress'}/>
              <UseCaseCard  Title={'Process visualisation'} description1={'Share processes with new hires'} description2={'Create reference material'} description3={'Optimise'}/>
              <UseCaseCard  Title={'Brainstorming'} description1={'Write notes quickly'} description2={'Document thought trails'} description3={'Multimedia idea aids'}/>
            </div>
          </div>
          <div className={styles.ctaGroup} style={{flexDirection:'column', alignItems:'center', textAlign:'center', padding:'5vh 0vh'}}>
              <h1 style={{fontSize:'xx-large'}}>What people <span style={{fontStyle:'italic', fontFamily:'Permanent marker', margin:'0', color:'#6930C3', textTransform:'uppercase'}}>love</span> about Nodemap</h1>
          </div>
          <div className={styles.outer}>
            <div className={styles.cardsContainer}>
              <Card elevation={0} className={styles.card}>
                <h2>Create</h2>
                <p>You have full control over the layout and content of your creations. Drag nodes around, use custom images and embed different types of content.</p>
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
                  get access
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