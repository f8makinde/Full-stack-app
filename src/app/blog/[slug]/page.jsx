import styles from "./singlePost.module.css"
import Image from "next/image"
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
       <Image src="https://images.pexels.com/photos/1475418/pexels-photo-1475418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
         <h1 className={styles.title}>Title</h1>
       <div className={styles.detail}>
        <Image className={styles.avatar} src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Terry Jefferson</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
       </div>
       <div className={styles.content}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus aut totam quis consequatur cupiditate porro nulla, quia sunt expedita nihil, minus iusto esse velit optio. Nulla quo aliquid temporibus!
       </div>
      </div>
    </div>
  )
}

export default SinglePostPage
