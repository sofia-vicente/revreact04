import s from './App.module.css'
import { Menu } from './components/menu'
import bannerImg from '.aa.webp'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>
          <div className={s.section1}>
            <div className={s.wrapImg}>
              <img className={s.imgSection1} src={aa.webp} alt="bannerImg" />

            </div>
            <div className={s.wrapText}>
              <h1 className={s.tituloSection1}>aaaa</h1>
              <p className={s.textSection1}>bbbbbb</p>
              <button className={s.btnSection1}>cccccc</button>
            </div>


          </div>
          <div className={s.section2}>
            <iframe className={s.vid} src="https://www.youtube.com/embed/AWb-Y9nXZkE?si=eFo3x5msjHsprGW6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
        </div>
    
    </>
  )
}

export default App

