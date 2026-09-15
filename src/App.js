import React, {useEffect, useState} from "react"

import Header from "./components/Header"
import MainBlock from "./components/MainBlock"
import WorkBlock from "./components/WorkBlock"
import PictureBlock from "./components/PictureBlock"
import AboutmeBlock from "./components/AboutmeBlock"
import PriceBlock  from "./components/PriceBlock"
import ReviewsBlock from "./components/ReviewsBlock"
import ContactsBlock from "./components/ContactsBlock"


import Footer from "./components/Footer"
import Image from "./components/Image"


import 'animate.css';
import WithScrollAnimation from "./components/WithScrollAnimationComponent";
import ScrollToTopButton from "./components/ScrollToTopButton";

const AnimatedWorkBlock = WithScrollAnimation(WorkBlock, {
  'animate__fadeInLeft animate__delay-0.5s animate__slow': ['.animate1'],
  'animate__fadeIn': ['.animate2']
} );

const AnimatedPictureBlock = WithScrollAnimation(PictureBlock, {
  'animate__fadeIn animate__delay-0.5s animate__slow': ['.animate1']
})

const AnimatedAboutmeBlock = WithScrollAnimation(AboutmeBlock, {
  'animate__fadeInLeft animate__delay-0.5s animate__slow': ['.animate1'],
  'animate__fadeInUpBig animate__slow': ['.animate2'],
  'animate__fadeIn animate__delay-0.5s animate__slow': ['.animate3'],
  'animate__fadeIn animate__delay-0.5s animate__slow': ['.animate4']
} );

const AnimatedPriceBlock = WithScrollAnimation(PriceBlock, {
  'animate__fadeInLeft animate__delay-0.5s animate__slow': ['.animate1'],
  'animate__fadeIn': ['.animate2']
});

const AnimatedContactsBlock = WithScrollAnimation(ContactsBlock, {
  'animate__fadeInLeft animate__delay-0.5s animate__slow': ['.animate1'],
  'animate__fadeIn': ['.animate2']
});

const App = () => {
  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => setState(res.express))
      .catch(err => console.log(err));
      document.title = 'Chasm.ink';
  }, []);



  return (
    
    <div className="name">
      <Header title="" />
      <MainBlock title="" />
      <AnimatedAboutmeBlock title="" />
      <AnimatedWorkBlock title="" />
      <AnimatedPictureBlock />   
      <AnimatedPriceBlock title="" />
      <AnimatedContactsBlock title="" />
      {state}
      <ScrollToTopButton />
    </div>
  );
};

export default App;