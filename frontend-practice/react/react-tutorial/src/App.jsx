/* eslint-disable prettier/prettier */
import { useState } from 'react';

import { HelloWorld2, HelloWorld3, CaptionImage } from './components/HelloWorld';
import MyButton1, { MyButton2 } from './components/MyButton';
import BlinkComponent from './components/BlinkComponent';
import CountComponent from './components/CountComponent';
import CBlinkComponent from './components/CBlinkComponent';
import OnChangeInput, { ForbiddenWords, SumOfNums } from './components/OnChangeInput';
import { BringUserInfo, OnAndOff, StopWatch, Timer } from './components/AdditionalPractice';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {/* <div>
        <OnChangeInput/>
        <SumOfNums/>
        <ForbiddenWords />
      </div> */}
      <div>
        <OnAndOff />
        <BringUserInfo />
        <StopWatch />
        <Timer />
      </div>
      {/* <div>
        <HelloWorld3/>
        <HelloWorld2/>
        <CaptionImage
          imgUrl='https://kkoma.net/web/product/big/201905/4aa48d0ebab9f50f9e3b47fb7b8af386.jpg'
          caption='구름 이미지'
        />
      </div>
      <div>
        <MyButton1
          title='네이버로 이동'
          color='green'
          clickUrl='https://www.naver.com'
          style={{fontSize: '1.2em'}}
          className='sample'
        />
        <MyButton2
          title='네이버로 이동'
          color='green'
          clickUrl='https://www.naver.com'
          style={{fontSize: '1.2em'}}
          className='sample'
        />
      </div>
      <div>
        <BlinkComponent text='This is Blink Component'/>
        <CountComponent />
      </div>
      <div>
        <CBlinkComponent text='This is for CreateRef'/>
      </div> */}
    </>
  );
}

export default App;
