/* eslint-disable prettier/prettier */
import './HelloWorld.css';

function HelloWorld() {
  return (
    <div>
      <p>Hello World</p>
      <p>This is my first React Component!</p>
    </div>
  );
}
function HelloWorld2() {
  const value = 10;
  const classes = 'hello-world';
  return <p className={`${classes} ${value > 5 ? 'new-class' : 'false-class'}`}>HelloWorld2</p>;
}

function HelloWorld3() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello, World!</h1>
      <p>This is My first React Application</p>
    </div>
  );
}

function CaptionImage(props) {
  // const imgUrl = 'https://kkoma.net/web/product/big/201905/4aa48d0ebab9f50f9e3b47fb7b8af386.jpg'
  // const caption = '구름 이미지'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <img src={imgUrl} alt={caption}/>
            <p>{caption}</p> */}
      <img src={props.imgUrl} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}

const sampleVar = {
  greeting: 'Hello!!',
};
export { HelloWorld2, HelloWorld3, sampleVar, CaptionImage };
export default HelloWorld;
