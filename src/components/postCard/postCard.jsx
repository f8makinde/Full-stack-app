import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/1475418/pexels-photo-1475418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" fill className={styles.img} />
      </div>
      <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
