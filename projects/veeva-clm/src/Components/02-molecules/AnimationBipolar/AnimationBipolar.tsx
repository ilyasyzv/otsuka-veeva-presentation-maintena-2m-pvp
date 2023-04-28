import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimationBipolar.scss';
import contentImg from './img/content.png';
import angleImg from './img/angle.png';
import row1Img from './img/row1.png';
import row2Img from './img/row2.png';
import row3Img from './img/row3.png';
import row4Img from './img/row4.png';

const AnimationBipolar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentImgRef = useRef<HTMLImageElement>(null);
  const angleImgRef = useRef<HTMLDivElement>(null);
  const rowImg1Ref = useRef<HTMLImageElement>(null);
  const rowImg2Ref = useRef<HTMLImageElement>(null);
  const rowImg3Ref = useRef<HTMLImageElement>(null);
  const rowImg4Ref = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({})
        .fromTo(
          contentImgRef.current,
          { scale: 0, x: '50%' },
          { scale: 1, duration: 1 },
        )
        .to(contentImgRef.current, { x: 0, duration: 0.5 })
        .fromTo(
          angleImgRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1 },
        )
        .fromTo(
          rowImg1Ref.current,
          { opacity: 0, x: '-100%' },
          { opacity: 1, x: 0, duration: 1 },
        )
        .fromTo(
          rowImg2Ref.current,
          { opacity: 0, x: '-100%' },
          { opacity: 1, x: 0, duration: 1, className: 'flicker' },
        )
        .fromTo(
          rowImg3Ref.current,
          { opacity: 0, x: '-100%' },
          { opacity: 1, x: 0, duration: 1, className: 'flicker' },
        )
        .fromTo(
          rowImg4Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='animation-container'>
      <div className='animation-content-container' ref={containerRef}>
        <div className='content-container'>
          <img ref={contentImgRef} src={contentImg} alt='Bipolar disorder' />
        </div>
        <div className='descripton-container'>
          <div className='img-container img-container-1'>
            <img src={row1Img} ref={rowImg1Ref} />
          </div>
          <div className='img-container img-container-2'>
            <img src={row2Img} ref={rowImg2Ref} />
          </div>
          <div className='img-container img-container-3'>
            <img src={row3Img} ref={rowImg3Ref} />
          </div>
          <div className='img-container img-container-4'>
            <img src={row4Img} ref={rowImg4Ref} />
          </div>
        </div>
        <div className='img-angle-container' ref={angleImgRef}>
          <img src={angleImg} className='img-angle' />
        </div>
      </div>
    </div>
  );
};

export default AnimationBipolar;
