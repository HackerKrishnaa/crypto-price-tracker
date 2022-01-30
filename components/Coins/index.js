import styles from './Coins.module.css'

const Coins = ({name,id, rank, price, symbol, priceChange, marketcap, volume, image , }) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin} >
          <p className={styles.coin_rank}>#{rank}</p>
          <img src={image} alt={name} className={styles.coin_img}  />
          <h1 className={styles.coin_name}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>$ {price.toLocaleString()}</p>
          <p className={styles.coin_volume}>$ {volume.toLocaleString()}</p>
          {priceChange<0 ? (
              <p className={styles.coin_percent, styles.red}>
                {priceChange.toFixed(2)}
              </p>
          ):(
              <p className={styles.coin_percent, styles.green}>
                {priceChange.toFixed(2)}
              </p>
          )}
          <p className={styles.coin_marketcap}>MCap : $ {marketcap.toLocaleString()}</p>
        </div>

      </div>
    </div>
  )
};

export default Coins;
