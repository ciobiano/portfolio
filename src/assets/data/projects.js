import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import DcpImg from '../images/dcp.jpg';
import CovidTrackerImg from '../images/CovidTracker.png';
import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Discovery Circle Professionals',
    desc: 'This a a consultant website built with HTML, CSS & JAVASCRIPT',
    img: DcpImg,
  },
  {
    id: uuidv4(),
    name: 'Covid Tracker',
    desc:
      'An app to help people to get an overview of the Covid situation in their  city.',
    img: CovidTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
