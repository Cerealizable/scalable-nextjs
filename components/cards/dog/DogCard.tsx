import styles from './DogCard.module.css';

export interface IDogCard {
  sampleTextProp: string;
}

const DogCard: React.FC<IDogCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default DogCard;
