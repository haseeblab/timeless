const header = document.createElement('template');

header.innerHTML = `
  <header class="text-gray-400 bg-black body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <div class="w-20 h-20 text-white p-2 rounded-full overflow-hidden bg-transparent">
                    <img src="images/image-removebg-preview (6).png" alt="Logo" class="w-full h-full object-cover" />
                </div>
                <span class="ml-3 text-xl">Timeless Elegance</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a href="bas.html" class="mr-5 hover:text-white">Home</a>
                <a  class="mr-5 hover:text-white"  onclick="scrollToShop()" href="bas.html#shop-now">Shop</a>
                <a class="mr-5 hover:text-white" onclick="scrollToUs()" href="bas.html#About" >About Us</a>
                <a class="mr-5 hover:text-white"  onclick="scrollToContact()" href="#Contact" >Contact</a>
            </nav>
         <a href="login.html"> <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0">Login Here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button></a>  
        </div>
    </header>
`;

document.body.insertBefore(header.content, document.body.firstChild);
// document.body.appendChild(header.content);
// document.body.appendChild(header.content);
    

// const header = document.getElementById("header-template").content.cloneNode(true);
// const footer = document.getElementById("footer-template").content.cloneNode(true);

// document.body.insertBefore(header, document.body.firstChild);
// document.body.appendChild(footer);
