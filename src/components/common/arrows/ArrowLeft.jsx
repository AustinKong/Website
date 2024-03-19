import style from './index.module.css'

const ArrowLeft = ({ text }) => {
  return (
    <aside 
      className={style.arrowLeft}
    >
      <p
        className={style.rightAlign}
      >
        {text}
      </p>
      <svg
        className={style.rightAlign}
        viewBox='0 0 28 8'
      >
        <path
          d="M0.646457 3.64706C0.451195 3.84232 0.451195 4.1589 0.646457 4.35416L3.82844 7.53614C4.0237 7.73141 4.34028 7.73141 4.53554 7.53614C4.7308 7.34088 4.7308 7.0243 4.53554 6.82904L1.70712 4.00061L4.53554 1.17218C4.7308 0.976922 4.7308 0.66034 4.53554 0.465078C4.34028 0.269816 4.0237 0.269816 3.82844 0.465078L0.646457 3.64706ZM29 3.50061L1.00001 3.50061V4.50061L29 4.50061V3.50061Z"
          fill="var(--white)"
        />
      </svg>
    </aside>
  )
}

export default ArrowLeft