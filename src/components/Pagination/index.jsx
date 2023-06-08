import styles from '../../styles/Adhyay.module.css'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize) // 100/10

  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <span className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination