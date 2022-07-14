import styles from './Postlist.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const Postlist = () =>{
	return (
		<div className={styles.postList}>
			<h1 className={styles.postListTitle}>Создай свой пост</h1>
			<form>
				<Input placeholder='Название поста' />
				<Input placeholder='Описание поста' />
				<Button>Создать пост</Button>
			</form>
		</div>
	)
}

export default Postlist