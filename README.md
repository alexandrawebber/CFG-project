<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="/script.js" defer></script>
    <title>Order Up your favourite dish from a local restaurant!</title>
</head>
<body>
    <nav> 
        <ul id="nav_bar">
            <li class="nav-links" id="gmail"><a href="#">Sign Up</a></li>
            <li class="nav-links"><a href="#">Login</a></li>
        </ul>
      </nav>
      <div class="logo">
        <a href="link"><img src="https://i.ibb.co/vJ4R8H7/icon.png"></a>
      </div>
      <div class="search_box">
        <h1>food near you</h1>
        <input type="text" id="form-search" placeholder="Enter Delivery Address">
      </div>
      <div class="buttons">
        <button>Find Food</button>
        <button>Find Discounts</button>
      </div>

      <section id="slider">
      <div class="carousel" data-carousel>
        <div class="carousel__filters">
          <button class="carousel__filter active" data-filter="all">All</button>
          <button class="carousel__filter" data-filter="meat">Meat</button>
          <button class="carousel__filter" data-filter="seafood">Seafood</button>
          <button class="carousel__filter" data-filter="vegan">Vegan</button>
        </div>
        <button class="carousel__button carousel__button--prev" data-carousel-button="prev">&#8678;</button>
       <div class="carousel__track-container">
        <ul class="carousel__track" data-slides>
          <li class="carousel__slide" data-active data-filter="meat">
          <img class="carousel__img" src="https://i.ibb.co/phv96k5/eiliv-aceron-u-Bigm8w-Mp-A-unsplash.jpg" alt="food 1">
          <div class="img__desc">
            <h3>BurgerVerse</h3>
            <p>The burger restaurant with a modern and eclectic decor, offering high-quality burgers made with locally sourced ingredients, creative and unique options, and a range of sides, beverages, and customizable toppings.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="vegan">
          <img class="carousel__img" src="https://i.ibb.co/TtQNX1G/eiliv-aceron-Zu-IDLSz3-XLg-unsplash.jpg" alt="food 3">
          <div class="img__desc">
            <h3>Nourish</h3>
            <p>Nourish is a health-focused restaurant that offers a delicious and diverse menu of nutrient-dense meals made with fresh, locally-sourced ingredients, catering to a variety of dietary needs and preferences, all with the goal of providing nourishment and vitality to their customers. </p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="vegan">
          <img class="carousel__img" src="https://i.ibb.co/hVhjs9t/ella-olsson-yb6bm-66-Jdk-unsplash.jpg" alt="food 4">
          <div class="img__desc">
            <h3>The Pantry</h3>
            <p>Slice House is a modern pizzeria that serves up delicious slices and pies with a variety of toppings, made with fresh ingredients and cooked to perfection in a wood-fired oven, creating a crispy crust and a flavour that is sure to satisfy</p>
            </div>
        </li>
        <li class="carousel__slide">
          <img class="carousel__img" src="https://i.ibb.co/YDwKFVB/joseph-gonzalez-fdl-ZBWIP0a-M-unsplash.jpg" alt="food 5">
      
          <div class="img__desc">
            <h3>Eggs&Toast</h3>
            <p>Eggs&Toast is a cozy and inviting brunch cafe that offers a simple yet delicious menu featuring classic breakfast dishes like eggs benedict, pancakes, waffles, and of course, toast, served with fresh coffee, tea, and juices, making it the perfect spot for a relaxing morning meal.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="seafood">
          <img class="carousel__img" src="https://i.ibb.co/qdzwk9n/carissa-gan-KSXvrq-KUxnc-unsplash.jpg" alt="food 6">
          <div class="img__desc">
            <h3>Mango Tree</h3>
            <p>Mango Tree is a vibrant and colorful pan-Asian restaurant that serves up a diverse and flavorful menu, featuring authentic dishes from various regions of Asia, made with fresh and high-quality ingredients, all in a lively and inviting atmosphere.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="vegan">
          <img class="carousel__img" src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="food 7">
          <div class="img__desc">
            <h3>Mediterranean Grill</h3>
            <p>Mediterranean Grill is a vibrant Greek restaurant that offers a diverse menu of delicious Mediterranean dishes, including flavourful kebabs, gyros, fresh salads, and homemade dips, all made with high-quality ingredients.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="meat">
          <img class="carousel__img" src="https://i.ibb.co/D5YML6T/eaters-collective-12e-HC6-Fx-Pyg-unsplash.jpg" alt="food 8">
          <div class="img__desc">
            <h3>Nonna's Kitchen</h3>
            <p>Nonna's Kitchen is an authentic Italian restaurant serving up delicious homemade pastas and other classic Italian dishes made with traditional family recipes, using fresh ingredients and authentic cooking techniques, all to bring a taste of Italy to their customers.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="meat">
          <img class="carousel__img" src="https://i.ibb.co/r0P9rtH/chad-montano-Mq-T0asuo-Ic-U-unsplash.jpg" alt="food 9">
          <div class="img__desc">
            <h3>Slice House</h3>
            <p>Slice House is a modern pizzeria that serves up delicious slices and pies with a variety of toppings, made with fresh ingredients and cooked to perfection in a wood-fired oven, creating a crispy crust and a flavour that is sure to satisfy.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="vegan">
          <img class="carousel__img" src="https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="food 10">
          <div class="img__desc">
            <h3>GreenBite</h3>
            <p>A trendy vegan restaurant that offers a plant-based menu with an emphasis on fresh, organic, and locally sourced ingredients, serving dishes that are healthy, flavourful, and visually stunning, perfect for health-conscious foodies</p>
            </div>
        </li>
       <li class="carousel__slide" data-filter="meat">
          <img class="carousel__img" src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="food 11">
          <div class="img__desc">
            <h3>The Ivory</h3>
            <p>A luxurious meat-focused restaurant that serves the finest cuts of beef, expertly prepared and cooked to perfection. With an elegant and sophisticated atmosphere, The Steakhouse offers a dining experience that is both indulgent and refined, showcasing the art and craftsmanship of steakhouse cuisine.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="vegan">
          <img class="carousel__img" src="https://images.unsplash.com/photo-1484325881845-65073528922e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="food 12">
          <div class="img__desc">
            <h3>Trattoria</h3>
            <p>Trattoria is an Italian restaurant that offers a cozy and casual atmosphere reminiscent of a traditional Italian eatery, serving classic pasta dishes, pizza, antipasti, and other regional specialties, all made with high-quality ingredients and served with a selection of Italian wines and desserts.</p>
            </div>
        </li>
        <li class="carousel__slide" data-filter="seafood"> 
        <img class="carousel__img" src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="food 13">
        <div class="img__desc">
          <h3>The Dish</h3>
          <p>A high-end seafood restaurant that specializes in fresh, locally sourced salmon dishes. With a coastal and chic ambiance, the restaurant offers a unique dining experience that showcases the best of traditional and modern seafood cuisine.</p>
          </div>
        </li>
      </ul>
    </div>
      <button class="carousel__button carousel__button--next" data-carousel-button="next">&#8680;</button>

      </div>
    </div>
  </section>

      <footer>
        <ul>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
    </footer>


</body>
</html>
