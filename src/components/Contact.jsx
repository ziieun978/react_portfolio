import React from 'react'

const Contact = () => {
  return (
    <section className='contact_section'>
      <div className='contact_wrapper'>
        <div className='contact_text'>
          <h2>감사합니다</h2>
        </div>
        <div className='contact_box'>
          <div className='contact_box_text'>
            <span className='label'>연락처</span>
            <span className='value'>010-6513-7691</span>
          </div>
          <div className='contact_box_text'>
            <span className='label'>이메일</span>
            <span className='value'>uzzz7899@gmail.com</span>
          </div>
          <div className='contact_box_text'>
            <span className='label'>Github</span>
            <span className='value'><a href='https://github.com/ziieun978' target='_blank' rel='noopener noreferrer'>@ziieun978</a></span>
            {/* a태그 target _blank= 링크가 새창에서 열리지만 보안에 취약함
             rel 추가  noopener - 새 탭이 원본 창의 객체 속성에 액세스 하는 것을 방지
                       noreferrer - 리퍼러 정보가 새 탭으로 전송되지 않도록 보장함 => 보안 취약점을 보완  */}
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Contact