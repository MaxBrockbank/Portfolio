import React from "react";
import anime from 'animejs';
class MB2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  animation(){
    anime({
      targets: '.p1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInQuad',
      duration: 10000,
      delay: function(el, i) { return i * 250 },
    });
  }
  componentDidMount(){
    this.animation();
  }
  render(){
    return (
      <div className="mbanimation2" id="numbaOne">
      <svg
        width="100vw"
        viewBox="-110 0 1180.737 130.153"
        xmlns="http://www.w3.org/2000/svg"
        className="mbsvg-parent"
      >
        <g
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize={20}
          stroke="#729c98"
          strokeWidth=".25mm"
          fill="#729c98"
          className="mbsvg"
        >
        <path
        className='p1'
          d="M0 71.401v-69.6h4l24.3 43 24.2-43h3.7v69.6H0zm3.7-62.7v59.1h48.8v-58.5L30 48.901h-3.5L3.7 8.701zM102.1.401l32.8 71.1H69.3l32.8-71.1zm0 8.8l-27 58.6h54l-27-58.6zM205.7 71.501h-59.1l27.3-34.8-27.3-34.8h59.1l-27.3 34.8 27.3 34.8zm-51.6-65.9l22 28.1 22.1-28.1h-44.1zm0 62.2h44.1l-22.1-28.1-22 28.1zM299.8 1.901H329a35.502 35.502 0 014.041.215q2.032.234 3.722.72a15.187 15.187 0 012.737 1.065 18.458 18.458 0 015.087 3.758 16.93 16.93 0 012.163 2.842 17.688 17.688 0 012.548 9.076 21.021 21.021 0 01.002.324q0 4.9-2.6 9.05t-7.1 6.55q5.4 1.9 9.1 6.6 3.7 4.7 3.7 10.6 0 5.2-2.65 9.55-2.65 4.35-7.05 6.85a17.914 17.914 0 01-3.581 1.462 21.024 21.024 0 01-1.319.338q-2.7.6-7.2.6h-30.8v-69.6zM409.2 46.801l17.7 24.7h-53.5v-69.6h27.1q6.61 0 11.373 1.789a20.258 20.258 0 012.827 1.311q5.4 3 8.4 8.2 3 5.2 3 11.5 0 7.8-4.8 13.95-4.8 6.15-12.1 8.15zm-8.6-41.2h-20.9l27.2 38q6.7-1.4 11.1-6.7 4.4-5.3 4.4-12.2 0-5.5-2.7-10t-7.6-6.9a18.565 18.565 0 00-4.021-1.425q-2.014-.478-4.391-.661a40.216 40.216 0 00-3.088-.114zm-23.5 42v20.2h42.8l-14.6-20.3-3.1.1h-25.1zm25.7-3.7l-25.7-35.9v35.9h25.7zM501.1 29.001v15.4q0 7.8-3.9 14.5t-10.55 10.6q-6.65 3.9-14.55 3.9t-14.55-3.9q-6.65-3.9-10.55-10.6-3.9-6.7-3.9-14.5v-15.4q0-7.8 3.9-14.5t10.55-10.6q6.65-3.9 14.55-3.9t14.55 3.9q6.65 3.9 10.55 10.6 3.9 6.7 3.9 14.5zm-18.3 15.4v-15.5a13.213 13.213 0 00-.616-4.112 11.147 11.147 0 00-2.384-4.088q-3-3.3-7.7-3.3a11.348 11.348 0 00-3.793.609 9.719 9.719 0 00-4.007 2.691 11.454 11.454 0 00-2.953 7 15.086 15.086 0 00-.047 1.2v15.5a12.761 12.761 0 00.84 4.689 11.748 11.748 0 002.16 3.511 9.803 9.803 0 007.17 3.385 13.066 13.066 0 00.63.015 10.571 10.571 0 004.033-.747 9.805 9.805 0 003.667-2.653 11.91 11.91 0 002.997-7.901 15.154 15.154 0 00.003-.299zM556.9 45.201h17.9a44.445 44.445 0 01.001.339q0 4.52-.927 8.347a23.748 23.748 0 01-6.574 11.764 25.189 25.189 0 01-11.727 6.316q-3.924.969-8.553 1.03a47.414 47.414 0 01-.62.004q-7.9 0-14.55-3.6t-10.55-10.2a28.09 28.09 0 01-3.7-11.406 35.176 35.176 0 01-.2-3.794v-14.6a32.94 32.94 0 011.058-8.495 27.744 27.744 0 012.692-6.605q3.75-6.6 10.3-10.25A29.128 29.128 0 01544.347.445 34.871 34.871 0 01546.1.401a39.372 39.372 0 018.464.857q7.431 1.635 12.386 6.393a23.9 23.9 0 016.572 11.558q.976 3.792 1.069 8.289a45.791 45.791 0 01.009.603h-18q-.1-5.1-2.75-7.9a8.478 8.478 0 00-3.875-2.299q-1.369-.399-3.017-.48a17.468 17.468 0 00-.858-.021 11.96 11.96 0 00-3.719.555 9.949 9.949 0 00-3.881 2.345 9.449 9.449 0 00-2.578 4.56q-.382 1.496-.418 3.27a18.285 18.285 0 00-.004.37v16.3q0 5.3 3.15 8.25a10.827 10.827 0 007.322 2.943 14.035 14.035 0 00.428.007q8.373 0 10.069-6.868a16.438 16.438 0 00.431-3.932zM650.1 1.901l-29 29 29 40.6h-56v-69.6h56zm-7.1 65.9l-24.5-34.3-20.7 20.7v13.6H643zM669.8 1.901H699a35.502 35.502 0 014.041.215q2.032.234 3.722.72a15.187 15.187 0 012.737 1.065 18.458 18.458 0 015.087 3.758 16.93 16.93 0 012.163 2.842 17.688 17.688 0 012.548 9.076 21.021 21.021 0 01.002.324q0 4.9-2.6 9.05t-7.1 6.55q5.4 1.9 9.1 6.6 3.7 4.7 3.7 10.6 0 5.2-2.65 9.55-2.65 4.35-7.05 6.85a17.914 17.914 0 01-3.581 1.462 21.024 21.024 0 01-1.319.338q-2.7.6-7.2.6h-30.8v-69.6zM768.1.401l32.8 71.1h-65.6l32.8-71.1zm0 8.8l-27 58.6h54l-27-58.6zM871.2 71.401H815v-69.6h3.9l48.6 47.3v-47.3h3.7v69.6zM946.1 1.901l-29 29 29 40.6h-56v-69.6h56zm-7.1 65.9l-24.5-34.3-20.7 20.7v13.6H939z"
          vectorEffect="non-scaling-stroke"
        />
        </g>
      </svg>
      </div>
    );
  }
}

export default MB2;
