import React from 'react'
import styles from './transition.module.scss'


const Index = () => {

    return (
        <div className="">
            <h2>Css Transition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque odio quos vel necessitatibus recusandae commodi corporis, ab ea excepturi quaerat illum tempore distinctio impedit? Dolores, aut non! Excepturi ut eligendi eum quis, assumenda sit temporibus perferendis. Sed architecto nostrum optio eum sequi veritatis impedit quam perferendis nemo eveniet? Nobis ipsum maxime quas nihil inventore mollitia enim alias quo aut impedit, eius quod repellendus ea consequatur suscipit velit doloribus perspiciatis reiciendis quae, animi magni! Nulla minus quisquam magni explicabo possimus illum eaque facere quidem laudantium atque tempora ullam, cupiditate odit corrupti maiores voluptas error nemo doloremque vitae! Explicabo, atque minima!</p>

            <div className={styles['box-container']}>
                <div className={styles.box}>A</div>
                <div className={styles.box}>B</div>
                <div className={styles.box}>C</div>
                <div className={styles.box}>D</div>
                <div className={styles.box}>E</div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque odio quos vel necessitatibus recusandae commodi corporis, ab ea excepturi quaerat illum tempore distinctio impedit? Dolores, aut non! Excepturi ut eligendi eum quis, assumenda sit temporibus perferendis. Sed architecto nostrum optio eum sequi veritatis impedit quam perferendis nemo eveniet? Nobis ipsum maxime quas nihil inventore mollitia enim alias quo aut impedit, eius quod repellendus ea consequatur suscipit velit doloribus perspiciatis reiciendis quae, animi magni! Nulla minus quisquam magni explicabo possimus illum eaque facere quidem laudantium atque tempora ullam, cupiditate odit corrupti maiores voluptas error nemo doloremque vitae! Explicabo, atque minima!</p>
        </div>
    )
}

export default Index