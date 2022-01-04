import type { NextPage } from 'next'
import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

import logo from '../public/images/logo.png';
import cartItem1 from '../public/images/cartItem1.png'
import cartItem2 from '../public/images/cartItem2.png'
import cartItem3 from '../public/images/cartItem3.png'
import cartItem4 from '../public/images/cartItem4.png'
import aboutImg from '../public/images/aboutImg.jpeg';
import menu1 from '../public/images/menu-1.png';
import menu2 from '../public/images/menu-2.png';
import menu3 from '../public/images/menu-3.png';
import menu4 from '../public/images/menu-4.png';
import menu5 from '../public/images/menu-5.png';
import menu6 from '../public/images/menu-6.png';
import product1 from '../public/images/product-1.png'
import product2 from '../public/images/product-2.png'
import product3 from '../public/images/product-3.png'
import { 
    faSearch, 
    faShoppingCart,
    faBars,
    faTimes,
    faStar,
    faStarHalfAlt,
    faHeart,
    faEye
} from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
    
    const handleScroll = () => {}
    useEffect(() => {
        // navbar?.classList.remove('active');
        let navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.onscroll = () => {
                navbar?.classList.remove('active')
            }
        }
    }, []);
    


  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
            <Image src={logo} alt="" />
        </a>

        <nav className={styles.navbar} id='navbar'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#products">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
        </nav>

        <div className={styles.iconsNavbar}>
          {/* <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-bars" id="menu-btn"></div> */}
            {/* <div id ='search-btn'> */}
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faShoppingCart} color='#fff' />
                <FontAwesomeIcon icon={faBars} color='#fff' />
        </div>

        <div className={styles.searchForm}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box"> <FontAwesomeIcon icon={faSearch} /></label>
        </div>

        <div className={styles.cartItemsContainer}>
          <div className={styles.cartItem}>
              <span><FontAwesomeIcon icon={faTimes} /></span>
              <Image src={cartItem1} alt="" />
              <div className={styles.content}>
                  <h3>cart item 01</h3>
                  <div className={styles.price}>$15.99/-</div>
              </div>
          </div>
          <div className={styles.cartItem}>
          <span><FontAwesomeIcon icon={faTimes} /></span>
              <Image src={cartItem2} alt="" />
              <div className={styles.content}>
                  <h3>cart item 02</h3>
                  <div className={styles.price}>$15.99/-</div>
              </div>
          </div>
          <div className={styles.cartItem}>
          <span><FontAwesomeIcon icon={faTimes} /></span>
              <Image src={cartItem3} alt="" />
              <div className={styles.content}>
                  <h3>cart item 03</h3>
                  <div className={styles.price}>$15.99/-</div>
              </div>
          </div>
          <div className={styles.cartItem}>
          <span><FontAwesomeIcon icon={faTimes} /></span>
              <Image src={cartItem4} alt="" />
              <div className={styles.content}>
                  <h3>cart item 04</h3>
                  <div className={styles.price}>$15.99/-</div>
              </div>
          </div>
          <a href="#" className={styles.btn}>checkout now</a>
        </div>
      </header>

      <section className={styles.home} id="home">
        <div className={styles.content}>
            <h3>fresh coffee in the morning</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
            <a href="#" className={styles.btn}>get yours now</a>
        </div>
      </section>

      <section className={styles.about} id="about">
          <h1 className={styles.heading}> <span>about</span> us </h1>
          <div className={styles.row}>
              <div className={styles.image}>
                  <Image src={aboutImg} alt="" />
              </div>

              <div className={styles.content}>
                  <h3>what makes our coffee special?</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                  <a href="#" className={styles.btn}>learn more</a>
              </div>
          </div>
      </section>

      <section className={styles.menu} id="menu">
          <h1 className={styles.heading}> our <span>menu</span> </h1>
          <div className={styles.boxContainer}>
              <div className={styles.box}>
                  <Image src={menu1} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
              <div className={styles.box}>
                  <Image src={menu2} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
              <div className={styles.box}>
                  <Image src={menu3} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
              <div className={styles.box}>
                  <Image src={menu4} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
              <div className={styles.box}>
                <Image src={menu5} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
              <div className={styles.box}>
                  <Image src={menu6} alt="" />
                  <h3>tasty and healty</h3>
                  <div className={styles.price}>$15.99 <span>20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
              </div>
          </div>
      </section>

    <section className={styles.products} id="products">
        <h1 className={styles.heading}> our <span>products</span> </h1>
        <div className={styles.boxContainer}>
            <div className={styles.box}>
                <div className={styles.icons}>
                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faHeart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faEye} color='#fff' /></a>
                </div>
                <div className={styles.image}>
                    <Image src={product1} alt="" />
                </div>
                <div className={styles.content}>
                    <h3>fresh coffee</h3>
                    <div className={styles.stars}>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i> <FontAwesomeIcon icon={faStarHalfAlt} color='#fff' /></i>
                    </div>
                    <div className={styles.price}>$15.99 <span>$20.99</span></div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.icons}>
                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faHeart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faEye} color='#fff' /></a>
                </div>
                <div className={styles.image}>
                    <Image src={product2} alt="" />
                </div>
                <div className={styles.content}>
                    <h3>fresh coffee</h3>
                    <div className={styles.stars}>
                    <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i> <FontAwesomeIcon icon={faStarHalfAlt} color='#fff' /></i>
                    </div>
                    <div className={styles.price}>$15.99 <span>$20.99</span></div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.icons}>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faHeart} color='#fff' /></a>
                    <a href="#"><FontAwesomeIcon icon={faEye} color='#fff' /></a>
                </div>
                <div className={styles.image}>
                    <Image src={product3} alt="" />
                </div>
                <div className={styles.content}>
                    <h3>fresh coffee</h3>
                    <div className={styles.stars}>
                    <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i><FontAwesomeIcon icon={faStar} color='#fff' /></i>
                        <i> <FontAwesomeIcon icon={faStarHalfAlt} color='#fff' /></i>
                    </div>
                    <div className={styles.price}>$15.99 <span>$20.99</span></div>
                </div>
            </div>
        </div>
    </section>

    </>
    
  )
}

export default Home
