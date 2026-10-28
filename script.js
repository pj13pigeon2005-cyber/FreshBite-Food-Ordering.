const foodItems = [
 {id:1,name:"Garden Margherita",category:"Pizza",diet:"Veg",price:249,rating:4.9,time:"25 min",tag:"Bestseller",restaurant:"Oven & Olive",desc:"Classic tomato, mozzarella, basil and a crisp golden crust.",img:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85"},
 {id:2,name:"Smoky BBQ Burger",category:"Burgers",diet:"Non-Veg",price:289,rating:4.8,time:"30 min",tag:"Popular",restaurant:"The Burger Yard",desc:"Grilled patty, smoky BBQ sauce, lettuce and house pickles.",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"},
 {id:3,name:"Rainbow Buddha Bowl",category:"Healthy",diet:"Vegan",price:229,rating:4.9,time:"20 min",tag:"Fresh pick",restaurant:"Green Fork",desc:"Quinoa, avocado, crunchy greens and a lemon-tahini drizzle.",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"},
 {id:4,name:"Creamy Truffle Pasta",category:"Asian",diet:"Veg",price:319,rating:4.7,time:"25 min",tag:"Chef's pick",restaurant:"Pasta Stories",desc:"Silky cream sauce, mushrooms, parmesan and fresh herbs.",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85"},
 {id:5,name:"Crispy Chicken Bao",category:"Asian",diet:"Non-Veg",price:269,rating:4.8,time:"22 min",tag:"Must try",restaurant:"Little Wok",desc:"Fluffy bao buns with crispy chicken and a tangy slaw.",img:"https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85"},
 {id:6,name:"Avocado Toast",category:"Healthy",diet:"Vegan",price:199,rating:4.6,time:"15 min",tag:"Light bite",restaurant:"Green Fork",desc:"Sourdough toast, smashed avocado, seeds and chilli flakes.",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=85"},
 {id:7,name:"Double Cheese Pizza",category:"Pizza",diet:"Veg",price:299,rating:4.8,time:"28 min",tag:"Cheesy fave",restaurant:"Oven & Olive",desc:"A golden crust loaded with mozzarella and rich tomato sauce.",img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85"},
 {id:8,name:"Chocolate Lava Cake",category:"Desserts",diet:"Veg",price:159,rating:5.0,time:"18 min",tag:"Sweet treat",restaurant:"Sugar Cloud",desc:"Warm chocolate cake with a gooey centre and cocoa dust.",img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85"},
 {id:9,name:"Spicy Chicken Bowl",category:"Asian",diet:"Non-Veg",price:279,rating:4.7,time:"25 min",tag:"Full of flavour",restaurant:"Little Wok",desc:"Steamed rice, tender chicken, sesame and spicy house sauce.",img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"},
 {id:10,name:"Falafel Power Wrap",category:"Healthy",diet:"Vegan",price:189,rating:4.6,time:"18 min",tag:"Plant powered",restaurant:"Green Fork",desc:"Crispy falafel, cucumber, tomato and creamy hummus.",img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=85"},
 {id:11,name:"Classic Smash Burger",category:"Burgers",diet:"Non-Veg",price:259,rating:4.8,time:"24 min",tag:"Fan favourite",restaurant:"The Burger Yard",desc:"Juicy smashed patty, melted cheese and a toasted bun.",img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85"},
 {id:12,name:"Berry Cheesecake",category:"Desserts",diet:"Veg",price:179,rating:4.9,time:"20 min",tag:"Sweet treat",restaurant:"Sugar Cloud",desc:"Creamy cheesecake topped with a bright mixed berry compote.",img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=85"}
];
let cart = [];
let wishlist = new Set();
let activeCategory = "All";
let activeDiet = "All";
let searchTerm = "";
let couponApplied = false;
let toastTimer;
const $ = id => document.getElementById(id);
const money = n => "₹" + Math.round(n).toLocaleString("en-IN");
const overlay = $("overlay");
const cartDrawer = $("cartDrawer");
const checkoutModal = $("checkoutModal");
const accountModal = $("accountModal");
const orderModal = $("orderModal");

function showToast(message){
 const toast=$("toast"); toast.textContent=message; toast.classList.add("show");
 clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function openLayer(layer){closeLayers(false);overlay.classList.remove("hidden");layer.classList.remove("hidden");document.body.style.overflow="hidden";}
function closeLayers(hideOverlay=true){[cartDrawer,checkoutModal,accountModal,orderModal].forEach(x=>x.classList.add("hidden"));if(hideOverlay)overlay.classList.add("hidden");document.body.style.overflow="";}
function filteredItems(){
 return foodItems.filter(item=>(activeCategory==="All"||item.category===activeCategory)&&(activeDiet==="All"||item.diet===activeDiet)&&(item.name+" "+item.desc+" "+item.restaurant).toLowerCase().includes(searchTerm.toLowerCase()));
}
function renderFoods(){
 const items=filteredItems();
 $("resultsCount").textContent=`${items.length} delicious ${items.length===1?"dish":"dishes"}`;
 $("foodGrid").innerHTML=items.map(item=>`<article class="food-card">
  <div class="food-image-wrap"><img class="food-image" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/fff0e6/f46b3f?text=FreshBite'">
  <span class="food-tag ${item.diet==="Non-Veg"?"non-veg":"veg"}">${item.tag}</span>
  <button class="wish-toggle ${wishlist.has(item.id)?"active":""}" data-wish="${item.id}" aria-label="${wishlist.has(item.id)?"Remove from":"Add to"} wishlist">${wishlist.has(item.id)?"♥":"♡"}</button></div>
  <div class="food-info"><div class="food-meta"><span>${item.restaurant}</span><span class="rating">★ ${item.rating}</span></div><h3>${item.name}</h3><p>${item.desc}</p><div class="food-bottom"><span class="food-price">${money(item.price)} <small>· ${item.time}</small></span><button class="add-btn" data-add="${item.id}" aria-label="Add ${item.name} to cart">+</button></div></div></article>`).join("");
 $("emptyState").classList.toggle("hidden",items.length!==0);
 $("foodGrid").classList.toggle("hidden",items.length===0);
}
function addToCart(id){
 const item=foodItems.find(x=>x.id===Number(id)); if(!item)return;
 const existing=cart.find(x=>x.id===item.id);
 if(existing)existing.qty++;else cart.push({...item,qty:1});
 renderCart();showToast(`${item.name} added to your basket`);
}
function changeQty(id,delta){
 const item=cart.find(x=>x.id===Number(id));if(!item)return;
 item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==item.id);
 renderCart();
}
function subtotal(){return cart.reduce((sum,item)=>sum+item.price*item.qty,0)}
function discount(){return couponApplied?subtotal()*.10:0}
function deliveryFee(){return subtotal()===0||subtotal()>=499?0:39}
function total(){return Math.max(0,subtotal()-discount()+deliveryFee())}
function renderCart(){
 const count=cart.reduce((sum,item)=>sum+item.qty,0);
 $("cartCount").textContent=count;$("drawerItemCount").textContent=`(${count})`;
 if(!cart.length){$("cartItems").innerHTML=`<div class="cart-empty"><span>🛍️</span><h3>Your basket is taking a nap</h3><p>Add something delicious and it’ll wake right up.</p><button class="btn btn-primary" id="emptyBrowseBtn">Explore menu →</button></div>`;$("cartSummary").innerHTML="";return;}
 $("cartItems").innerHTML=cart.map(item=>`<div class="cart-line"><img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/120x120/fff0e6/f46b3f?text=Food'"><div><h4>${item.name}</h4><small>${money(item.price)} each</small><div class="qty-control"><button data-qty="${item.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${item.id}" data-delta="1" aria-label="Increase quantity">+</button></div></div><span class="line-price">${money(item.price*item.qty)}</span></div>`).join("");
 $("cartSummary").innerHTML=`<div class="summary-row"><span>Subtotal</span><strong>${money(subtotal())}</strong></div><div class="summary-row"><span>Delivery</span><strong>${deliveryFee()===0?"FREE":money(deliveryFee())}</strong></div>${couponApplied?`<div class="summary-row"><span>FRESH10 discount</span><strong>−${money(discount())}</strong></div>`:""}<div class="summary-row total"><span>Total</span><strong>${money(total())}</strong></div><button class="btn btn-primary" id="checkoutBtn">Continue to checkout <span>→</span></button><p class="cart-tip">${subtotal()>=499?"You unlocked free delivery!":"Free delivery on orders over ₹499."}</p>`;
}
function showCart(){renderCart();openLayer(cartDrawer);}
function updateCheckoutTotal(){
 $("checkoutTotal").innerHTML=`<div class="summary-row"><span>Subtotal</span><strong>${money(subtotal())}</strong></div><div class="summary-row"><span>Delivery</span><strong>${deliveryFee()===0?"FREE":money(deliveryFee())}</strong></div>${couponApplied?`<div class="summary-row"><span>FRESH10 discount</span><strong>−${money(discount())}</strong></div>`:""}<div class="summary-row total"><span>Order total</span><strong>${money(total())}</strong></div>`;
}
function startCheckout(){if(!cart.length){showToast("Add a dish before checking out.");return;}couponApplied=false;$("couponInput").value="";updateCheckoutTotal();openLayer(checkoutModal);}
function applyCoupon(){
 const code=$("couponInput").value.trim().toUpperCase();
 if(code==="FRESH10"){couponApplied=true;updateCheckoutTotal();renderCart();showToast("FRESH10 applied — 10% off your food subtotal!");}
 else{couponApplied=false;updateCheckoutTotal();renderCart();showToast("That code isn’t valid. Try FRESH10.");}
}
function toggleWish(id){
 id=Number(id);if(wishlist.has(id)){wishlist.delete(id);showToast("Removed from your wishlist");}else{wishlist.add(id);showToast("Saved to your wishlist ♥");}
 renderFoods();
}
function openWishlist(){
 const items=foodItems.filter(item=>wishlist.has(item.id));
 if(!items.length){showToast("Your wishlist is empty — tap ♡ on a dish to save it.");return;}
 activeCategory="All";activeDiet="All";searchTerm="";
 $("searchInput").value="";document.querySelectorAll(".category-card").forEach(b=>b.classList.toggle("selected",b.dataset.category==="All"));
 document.querySelectorAll(".filter-pill").forEach(b=>b.classList.toggle("active",b.dataset.diet==="All"));
 $("foodGrid").innerHTML=items.map(item=>`<article class="food-card"><div class="food-image-wrap"><img class="food-image" src="${item.img}" alt="${item.name}"><button class="wish-toggle active" data-wish="${item.id}" aria-label="Remove from wishlist">♥</button></div><div class="food-info"><div class="food-meta"><span>${item.restaurant}</span><span class="rating">★ ${item.rating}</span></div><h3>${item.name}</h3><p>${item.desc}</p><div class="food-bottom"><span class="food-price">${money(item.price)}</span><button class="add-btn" data-add="${item.id}">+</button></div></div></article>`).join("");
 $("resultsCount").textContent=`${items.length} saved ${items.length===1?"dish":"dishes"}`;$("emptyState").classList.add("hidden");$("foodGrid").classList.remove("hidden");
 document.querySelector("#menu").scrollIntoView({behavior:"smooth"});showToast("Showing your wishlist");
}
document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return;}
 const wish=e.target.closest("[data-wish]");if(wish){toggleWish(wish.dataset.wish);return;}
 const qty=e.target.closest("[data-qty]");if(qty){changeQty(qty.dataset.qty,Number(qty.dataset.delta));return;}
 const category=e.target.closest("[data-category]");if(category){activeCategory=category.dataset.category;document.querySelectorAll(".category-card").forEach(b=>b.classList.toggle("selected",b===category));renderFoods();document.querySelector("#menu").scrollIntoView({behavior:"smooth"});return;}
 const diet=e.target.closest("[data-diet]");if(diet){activeDiet=diet.dataset.diet;document.querySelectorAll(".filter-pill").forEach(b=>b.classList.toggle("active",b===diet));renderFoods();return;}
 if(e.target.closest("#cartBtn")){showCart();return;}
 if(e.target.closest("#checkoutBtn")){startCheckout();return;}
 if(e.target.closest("#emptyBrowseBtn")){closeLayers();document.querySelector("#menu").scrollIntoView({behavior:"smooth"});return;}
 if(e.target.closest("#accountBtn")){openLayer(accountModal);return;}
 if(e.target.closest("#wishlistBtn")){openWishlist();return;}
 if(e.target.closest("[data-close]")){closeLayers();return;}
 if(e.target===overlay){closeLayers();return;}
 if(e.target.closest("#couponBtn")||e.target.closest("#applyCouponBtn")){if(e.target.closest("#applyCouponBtn")){showCart();$("couponInput").value="FRESH10";startCheckout();$("couponInput").value="FRESH10";applyCoupon();}else applyCoupon();return;}
 if(e.target.closest("#resetFilters")){activeCategory="All";activeDiet="All";searchTerm="";$("searchInput").value="";document.querySelectorAll(".category-card").forEach(b=>b.classList.toggle("selected",b.dataset.category==="All"));document.querySelectorAll(".filter-pill").forEach(b=>b.classList.toggle("active",b.dataset.diet==="All"));renderFoods();return;}
 if(e.target.closest("#finishOrderBtn")){closeLayers();document.querySelector("#home").scrollIntoView({behavior:"smooth"});return;}
});
$("searchInput").addEventListener("input",e=>{searchTerm=e.target.value;renderFoods()});
$("mobileMenuBtn").addEventListener("click",()=>$("mobileNav").classList.toggle("open"));
$("mobileNav").addEventListener("click",e=>{if(e.target.closest("a"))$("mobileNav").classList.remove("open")});
$("accountForm").addEventListener("submit",e=>{e.preventDefault();const name=new FormData(e.currentTarget).get("accountName").trim();closeLayers();showToast(`Welcome, ${name}! Demo sign-in successful.`);e.currentTarget.reset()});
$("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.length){closeLayers();showToast("Your basket is empty.");return;}
 const data=new FormData(e.currentTarget);const name=String(data.get("name")).trim();const orderId="FB"+Math.floor(10000+Math.random()*90000);
 $("orderMessage").textContent=`Thanks ${name}! Your demo order ${orderId} totals ${money(total())}. Estimated delivery: ${data.get("deliveryTime")}.`;
 cart=[];couponApplied=false;renderCart();e.currentTarget.reset();openLayer(orderModal);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLayers()});
renderFoods();renderCart();
