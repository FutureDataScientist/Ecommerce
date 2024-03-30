import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {


  const addToCartHandler=()=>{}
  return (
    <div className="home">
      <section></section>

      <h1>Latest Products
        <Link to="/search" className="findmore" >
          More
        </Link>
      </h1>

      <main>
        <ProductCard 
        productId="adasdasd"
         name="Macbook" 
         price={4545} 
         stock={435}
         handler={addToCartHandler}
         photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg"
         />
         <ProductCard
         productId="mmmssdfgfa"
         name="T-shirt"
         price={345}
         stock={231}
         handler={addToCartHandler}
         photo="https://m.media-amazon.com/images/I/61vmBRBEvsL._SX679_.jpg"
         
         />
         <ProductCard
         productId="mmmssdfafa"
         name="Iphone"
         price={3450000}
         stock={231}
         handler={addToCartHandler}
         photo="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX466_.jpg"
         
         />
         <ProductCard
         productId="mmdssdfafa"
         name="HeadPhone"
         price={34500}
         stock={231}
         handler={addToCartHandler}
         photo="https://m.media-amazon.com/images/I/71UndyehtzL._SL1500_.jpg"
         
         />
      </main>
      
      </div>
  )
}

export default Home