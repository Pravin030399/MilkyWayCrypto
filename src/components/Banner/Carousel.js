import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins, RetreivePrice } from '../../config/api'
import { CryptoState } from '../../CryptoContext'

const Carousel = () => {
  const [trending, setTrending] = useState([])
  const { currency, symbol } = CryptoState()

  const fetchTrendingCoins = async () => {
    const {
      data: { coins },
    } = await axios.get(TrendingCoins())
    console.log(currency)
    const price_data = await Promise.all(
      coins.map(async (coin) => {
        let name = coin['item']['id']
        let { data } = await axios.get(RetreivePrice(name, currency))
        return { ...coin['item'], ...data[name] }
      }),
    )

    setTrending(price_data)
    console.log(items)
  }

  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: '50%',
      display: 'flex',
      alignItems: 'center',
    },
    carouselItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'white',
    },
  }))

  const classes = useStyles()

  let items = trending.map((coin) => {
    let profit = coin[`${currency.toLowerCase()}_24h_change`]
    console.log(coin)
    console.log(profit)

    return (
      <Link className={classes.carouselItem} to={`/coins/${coin['id']}`}>
        <img
          src={coin?.large}
          alt={coin['id']}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {coin[currency.toLowerCase()]?.toFixed(2)}
        </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  }

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  )
}

export default Carousel
