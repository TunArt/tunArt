import React from 'react'

const Itembid = () => {
  return (
    
    <div className="container">

		<header>

			<div className="header-main">
				<div className="language">
					<label>
						<svg className="icon icon-language">
							<use xlink:href="#icon-language"></use>
						</svg>
						<select className="js_language_selector">
							<option value="">Eng</option>
							<option value="">Tr</option>
							<option value="">Fr</option>
							<option value="">Nl</option>
						</select>
					</label>
				</div>

				<div className="logo">
					STEEL TABLE
				</div>

				<div className="account">
					<button type="button" name="button">
						<svg className="icon icon-user">
							<use xlink:href="#icon-user"></use>
						</svg>
						Account
					</button>
				</div>
			</div>

			<div className="navigation">
				<span className="nav-logo">LES JOURS DÉCO</span>

				<nav>
					<a href="#">Shop</a>
					<a href="#">Your creativity</a>
					<a href="#">Concept</a>
					<a href="#">Blog</a>
					<a href="#">Contact</a>
					<a href="#">Professional</a>
				</nav>

				<div className="navton">
					<a href="#">
						<svg className="icon icon-bag">
							<use xlink:href="#icon-bag"></use>
						</svg>
					</a>

					<a href="#">
						<svg className="icon icon-search">
							<use xlink:href="#icon-search"></use>
						</svg>
					</a>
				</div>
			</div>

		</header>

		<nav className="breadcrumb">
			<ol className="breadcrumb-content">
				<li className="breadcrumb-item"><a href="#">Home</a></li>
				<li className="breadcrumb-item"><a href="#">Tables Legs</a></li>
				<li className="breadcrumb-item active">The Rider - Steel table legs</li>
			</ol>
		</nav>

		<div className="product-main">

			<div className="product-content">

				<div className="product-media">
					<div className="product-image">
						<img className="active" src="https://images-na.ssl-images-amazon.com/images/I/81J7k2APs9L._AC_SL1500_.jpg" alt="...">
					</div>

					<div className="product-thumb">
						<div className="thumb-item">
							<img src="https://images-na.ssl-images-amazon.com/images/I/81J7k2APs9L._AC_SL1500_.jpg" alt="...">
						</div>
						<div class="thumb-item">
							<img src="https://images-na.ssl-images-amazon.com/images/I/81OX7mh54wL._AC_SL1500_.jpg" alt="...">
						</div>
						<div class="thumb-item">
							<img src="https://images-na.ssl-images-amazon.com/images/I/819F38EBG3L._AC_SL1500_.jpg" alt="...">
						</div>
						<div class="thumb-item">
							<img src="https://images-na.ssl-images-amazon.com/images/I/81J04QuVMVL._AC_SL1500_.jpg" alt="...">
						</div>
					</div>
				</div>

				<div className="product-desc">

					<div className="desc-header">
						<div className="rating">
							<svg className="icon icon-star rating">
								<use xlink:href="#icon-star"></use>
							</svg>
							<svg className="icon icon-star rating">
								<use xlink:href="#icon-star"></use>
							</svg>
							<svg className="icon icon-star rating">
								<use xlink:href="#icon-star"></use>
							</svg>
							<svg className="icon icon-star">
								<use xlink:href="#icon-star"></use>
							</svg>
							<svg className="icon icon-star">
								<use xlink:href="#icon-star"></use>
							</svg>
							<span>Favorite (9)</span>
						</div>

						<h1>THE RIDER - STEEL TABLE LEGS</h1>

						<div className="price">
							<span className="price-old">24.00 £ loc net</span>
							<span className="price-new">19.20 £ tac incl.</span>
							<span className="price-discount">-20%</span>
						</div>
					</div>

					<div className="desc-content">
						<span>
							<h4>Available in two sizes:</h4>
							<p>40cm and 71 cm</p>
						</span>
						<span>
							<h4>2 colors:</h4>
							<p>dark steel of matt black</p>
						</span>
						<span>
							<p>The price is for one leg</p>
						</span>
						<span className="mt-space">
							<p>All our legs are handmade, with love, in Montpellier, France!</p>
						</span>
					</div>

					<div className="product-type">
						<div className="item product-type-color">
							<label for="product-type-color">Color</label>
							<select id="product-type-color" name="color">
								<option>Any</option>
								<option selected>Dark Steel</option>
								<option>Matt Black</option>
							</select>
						</div>

						<div className="item product-type-size">
							<label for="product-type-size">Height</label>
							<select id="product-type-size" name="size">
								<option>Any</option>
								<option selected>40 cm</option>
								<option>50 cm</option>
							</select>
						</div>

						<div className="item product-type-qty">
							<label for="product-type-qty">Qty</label>
							<select id="product-type-qty" name="qty">
								<option selected>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>

					<div className="product-payment">
						<h4>Payment:</h4>
						<span>
							<img src="img/mastercard.svg" alt="">
						</span>
						<span>
							<img src="img/maestro.svg" alt="">
						</span>
					</div>

					<div className="product-payinfo">
						<div className="item">
							<span>
								<svg className="icon icon-credit-card">
									<use xlink:href="#icon-credit-card"></use>
								</svg>
							</span>
							<p>3x payment <br>free of change</p>
						</div>

						<div className="item">
							<span>
								<svg className="icon icon-easy-returns">
									<use xlink:href="#icon-easy-returns"></use>
								</svg>
							</span>
							<p>Easy Returns</p>
						</div>

						<div className="item">
							<span>
								<svg className="icon icon-free-delivery">
									<use xlink:href="#icon-free-delivery"></use>
								</svg>
							</span>
							<p>Free delivery <br>from £ 16g</p>
						</div>
					</div>

				</div>

			</div>

			<div className="product-footer">
				<div className="footer-inf">
					<div className="inf-image">
						<img src="https://images-na.ssl-images-amazon.com/images/I/81J7k2APs9L._AC_SL1500_.jpg" alt="...">
					</div>
					<div className="inf-title">
						<div className="inf-cat">
							<span>BEATIFUL</span>
							<span>SOLO</span>
							<span>DURABLE</span>
						</div>
						<h2>
							<a href="#">The Rider - Steel Table Legs</a>
						</h2>
					</div>
				</div>;

				<div className="footer-price">
					<div className="total-price">
						<span>Total Prices:</span>
						<div className="">19.20 £</div>
					</div>
					<button type="button" name="button">ADD TO CART</button>
				</div>
			</div>

		</div>

	</div>
  )
}

export default Itembid