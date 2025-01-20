import style from './index.module.css';
import retroPC from './retroPC.png';

const Cooking = () => {
  return (
    <section
      className={style.cooking}
    >
      <img src={retroPC} />
      <div className={style.text}>
        <h3>BTW, something is brewing... <br/> Check back in a few weeks for a new revamped look!</h3>
        <br/>
        <p>Austin is working on a new revision of this website (<a href='austinkong.me'>austinkong.me</a>), be prepared for a surprise.</p>
      </div>
    </section>
  )
}

export default Cooking;