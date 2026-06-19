import { useState } from 'react'
import './Home.css'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'

function Home() {
const [products, setProduct] = useState([
  {
      id: 13134, 
      ism: "Sariq devni minib",
      img: b1, // O'zgaruvchi nomi qo'shtirnoqsiz yoziladi
      desc: "Xudoyberdi To'xtaboyevning eng mashhur sarguzasht asari.",
      count: 0,
      narx: "45 000 so'm",
      like: false,
  }, 
  {
      id: 17425, 
      ism: "Ufq romani",
      img: b2,
      desc: "Said Ahmad qalamiga mansub o'zbek adabiyoti durdonasi.",
      count: 0,
      narx: "80 000 so'm",
      like: false,
  }, 
  {
      id: 12456, 
      ism: "Dunyoning ishlari",
      img: b3,
      desc: "O'tkir Hoshimovning eng ta'sirli va samimiy asari.",
      count: 0,
      narx: "35 000 so'm",
      like: false,
  },
  {
      id: 13342, 
      ism: "O'tkan kunlar",
      img: b4,
      desc: "Abdulla Qodiriy tomonidan yozilgan ilk o'zbek romani.",
      count: 0,
      narx: "55 000 so'm",
      like: false,
  }, 
  {
      id: 1345, 
      ism: "Yulduzli tunlar",
      img: b5,
      desc: "Pirimqul Qodirovning Bobur hayoti haqidagi tarixiy romani.",
      count: 0,
      narx: "75 000 so'm",
      like: false,
  }, 
  {
      id: 12436, 
      ism: "Ikki eshik orasi",
      img: b6,
      desc: "Urush davri va undan keyingi hayot fojialari haqida asar.",
      count: 0,
      narx: "65 000 so'm",
      like: false,
  } 
])

  const Counter = (id) => {
    setProduct(products.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const Counter2 = (id) => {
    setProduct(products.map(item =>
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handlelike = (id) =>{
    setProduct(
      products.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    )
  }

  return (
    <div className="card-wrapper">
      {products.map((event) => (
        <div className="card" key={event.id}>
          <div className="card-img">
            <span className="like" onClick={()=> handlelike(event.id)}>
              {event.like ? <i className="fa-solid fa-heart" style={{color: "red"}}></i> : <i className="fa-regular fa-heart"></i>}
            </span>
            <img src={event.img} alt={event.ism} />
          </div>
          <div className="card-body">
            <h1 className="book-title">{event.ism}</h1>
            <p className="book-desc">{event.desc}</p>
            <p className="book-price">{event.narx}</p>

            <div className="shop">
              <div className="selection">
                <button onClick={() => Counter2(event.id)} className="btn-minus">-</button>
                <span className="count-number">{event.count}</span>
                <button onClick={() => Counter(event.id)} className="btn-plus">+</button>
              </div>
              <button className="btn-cart">Savatga qo'shish</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home