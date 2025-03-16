import React from 'react'
import Slider from '../Slider/Slider';
import Banner from '../../assets/banner.jpg'
import logoimg from '../../assets/logoimg.png'
import logo from '../../assets/logo.png';

function Home() {
  

const SportsData = [
  {
    id: "running",
    title: "Running",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/running_d_79c8219795.jpg",
      content:
      "Running is a sport that involves racing over a set distance at high speed, testing endurance and agility.",
  },
  {
    id: "badminton",
    title: "Badminton",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/golf_d_8f6a5ceae9.jpg",
    content:
      "Badminton is a racquet sport played with a shuttlecock, where players aim to hit it over a net into the opponent’s court.",
  },
  {
    id: "golf",
    title: "Golf",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/tennis_d_84458b28fe.jpg",
    content:
      "Golf is a precision club-and-ball sport where players aim to hit the ball into a series of holes in as few strokes as possible.",
  },
  {
    id: "cricket",
    title: "Cricket",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/football_d_6dd2ca489e.jpg",
    content:
      "Cricket is a bat-and-ball game played between two teams of eleven players, where runs are scored by hitting the ball and running between wickets.",
  },
  {
    id: "football",
    title: "Football",
    backgroundImage:
      "https://imgs.search.brave.com/HrGol-ykd5MMiwJFUBoKPLTfIus5Jh68faOICOWo_1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIy/MTgzMDU5L3Bob3Rv/L3RoZS1wZXJmZWN0/LXN0cmlrZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RWNG/UmJyZUtLcHZQeXF6/T3FuYlZIRXJ1OVlm/TDRsZklkTzRlVFdt/U0ppWT0",
    content:
      "Football, also known as soccer, is a team sport where players aim to score goals by kicking a ball into the opponent’s net.",
  },
  {
    id: "basketball",
    title: "Basketball",
    backgroundImage:
      "https://imgs.search.brave.com/HRcNKy-vO8h5GfKRdX6HDtZjU8uAAqFkSOfD92LPm9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dWxsLWxlbmd0aC1w/b3J0cmFpdC1iYXNr/ZXRiYWxsLXBsYXll/ci13aXRoLWJhbGxf/MTU1MDAzLTEyOTU1/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
    content:
      "Basketball is a fast-paced game where players score points by shooting a ball through the opposing team’s hoop.",
  },
];

const ShoesData = [
  {
    id: "Forum",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/08_originals_ss25_the_original_introduce_catlp_tc_forum_d_15a5c6de5e.jpg",
    content:
      "A classic basketball-inspired sneaker with a premium leather upper and an iconic ankle strap, offering both support and style.",
  },
  {
    id: "Campus",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/07_originals_ss25_the_original_introduce_catlp_tc_campus_d_0237f8c49b.jpg",
    content:
      "A timeless low-top sneaker, originally designed for basketball but now a streetwear staple, featuring a suede upper and classic 3-stripes.",
  },
  {
    id: "SL 72",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/05_originals_ss25_the_original_introduce_catlp_tc_sl_72_d_7348ac59c8.jpg",
    content:
      "A lightweight running shoe designed for speed and comfort, featuring a breathable nylon upper and a grippy rubber outsole.",
  },
  {
    id: "SAMBA",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/02_originals_ss25_the_original_introduce_catlp_tc_samba_d_1cb1fa7a9f.jpg",
    content:
      "An iconic sneaker with a leather upper and gum sole, originally designed for indoor soccer but now a lifestyle favorite worldwide.",
  },
  {
    id: "SUPERSTAR",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/04_originals_ss25_the_original_introduce_catlp_tc_superstar_d_0cdbe78cd0.jpg",
    content:
      "A legendary sneaker featuring its signature shell toe, originally a basketball shoe, now a cultural icon in street fashion.",
  },
  {
    id: "GAZELLE",
    title: "",
    backgroundImage:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/01_originals_ss25_the_original_introduce_catlp_tc_gazelle_d_e61f3a2d99.jpg",
    content:
      "A sleek, suede sneaker known for its minimalist design and versatility, making it a favorite for both casual wear and sports.",
  },
];

  return (
    <div className='-mt-1.5'>
      <div>
        <img src="https://live-production.wcms.abc-cdn.net.au/e4271c73ac8a9c49ed9b68f6b2098d0a?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=186&width=862&height=485" 
        alt="image" className='w-full'/>
      </div>

      <div>
        <h1 className='uppercase flex mb-[-30px] mt-24 ml-[150px]
        text-4xl font-serif text-[#242424]'>
          select your sport, find your gear, and get in the game!</h1>
      </div>

      <div>
        <Slider props={SportsData}/>

      </div>

      <div>
        <img src={Banner} className='w-full h-[700px]' alt="" />
      </div>

      <div>
        <h1 className='uppercase flex mb-[-30px] mt-24 ml-[150px]
        text-4xl font-serif text-[#242424]'>
          What's hot...</h1>
      </div>

      <div>
        <Slider props={ShoesData}/>
      </div>

      <div className='font-mono'>
        <div className='flex text-4xl  text-[#2424224] ml-36 mb-16'>
          <h3 className="">Popular right now</h3>
        </div>
        
        <div className='flex justify-between font-bold text-4xl ml-36 
        mr-36 mb-20 '>
            <h1 className='underline cursor-pointer underline-offset-8 hover:decoration-8'>running shoes</h1>
            <h1 className='underline cursor-pointer underline-offset-8 hover:decoration-8'>sneakers</h1>
            <h1 className='underline cursor-pointer underline-offset-8 hover:decoration-8'>formals</h1>
            <h1 className='underline cursor-pointer underline-offset-8 hover:decoration-8'>spezial</h1>            
        </div>
      </div>
      
      <div className='bg-[#131313] text-white pl-[410px] pr-[410px] pt-16 pb-16 items-center flex flex-col'>
        <div className='max-w-3xl text-center'>
          <h1 className='text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6'>Stories, styles and sportswear at <br /> 
          stepshark, since 2020</h1>
          
        </div>

        <div>
          <p className='text-base md:text-lg leading-relaxed text-gray-300
          text-left'>Sport keeps us fit. Keeps you mindful. Brings us together. 
            Through sport we have the power to change lives. Whether it 
            is through stories of inspiring athletes. Helping you to get 
            up and get moving. Sportswear featuring the latest 
            technologies, to up your performance. Beat your PB. 
            adidas offers a home to the runner, the basketball player, 
            the soccer kid, the fitness enthusiast. The weekend hiker 
            that loves to escape the city. The yoga teacher that spreads 
            the moves. The 3-Stripes are seen in the music scene. On stage, 
            at festivals. Our sports clothing keeps you focused before 
            that whistle blows. During the race. And at the finish lines. 
            We’re here to support creators. Improve their game. Their lives. 
            And change the world. <br />
            adidas is about more than sportswear and workout clothes. We 
            partner with the best in the industry to co-create. This way 
            we offer our fans the sports apparel and style that match 
            their athletic needs, while keeping sustainability in mind. 
            We’re here to support creators. Improve their game. Create 
            change. And we think about the impact we have on our world.
            </p>
        </div>
        <div>
          <img className='h-16' src={logoimg} alt="" />
        </div>
      </div>

    </div>
    
  )
}

export default Home;