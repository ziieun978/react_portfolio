import React, { forwardRef, useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import brimg from '../assets/img/br_crou.jpg'

const Inst = forwardRef((props, ref) => {
  const [scrollY, setScrollY] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll)},[]);

  return (
    <section className="intro_section" id="inst" ref={ref}>
      {/* <img src={brimg} alt='brimg' className='brimg' /> */}
      <div className="inst_wrapper">
        <div className="inst_title">
          안녕하세요 
          <h2 className='highlight'>
            <Typewriter
              words={[
                ' ',
                '작은 것부터 차근히 배우며',
                '사용자를 먼저 생각하는',
                '백지은입니다'
              ]}
              loop = {1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
              onLoopDone={() => setDone(true)}
            />
        </h2>
        </div>
        <div className="inst_content">
          <div>변화에 유연하게, 화면 속 사용자 경험을 진지하게 고민하는,</div>
          <div>
             신입 프론트엔드 개발자 백지은입니다. <br />
             끊임없이 배우고 성장하며 더 나은 인터페이스를 만들어가고자 합니다.
          </div>
        </div>
      </div>
    </section>
  );

});


export default Inst