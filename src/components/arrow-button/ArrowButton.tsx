import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';

import styles from './ArrowButton.module.scss';

type OnClick = () => void;

export type ArrowButtonProps = {
	onClick: OnClick;
	isOpen?: boolean;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	return (
		<div
			onClick={props.onClick}
			role='button'
			aria-label={
				props.isOpen
					? 'Закрыть форму параметров статьи'
					: 'Открыть форму параметров статьи'
			}
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: props.isOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: props.isOpen })}
			/>
		</div>
	);
};
