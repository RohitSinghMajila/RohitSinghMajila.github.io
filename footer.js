
class MyFooter extends HTMLElement {
        connectedCallback() {
              this.innerHTML ='

                    <footer class="text-gray-600 body-font footer-bg">
                          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                              <a href="index.html" class="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0">
                                 <img src="images/nameLogo4.png" alt="content">
                              </a>
                              <p class="mt-2 text-sm text-gray-500 footerPara">Quick Links to all my projects.</p>
                            </div>
                            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Python</h2>
                                <nav class="list-none mb-10">
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">Bike Sharing Analysis</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">Sentiment Recommender System</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">Movie recommender System</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                </nav>
                              </div>
                              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Powe BI / Tableau</h2>
                                <nav class="list-none mb-10">
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">Airline Survey Analysis</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">US Wine Statistics</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                </nav>
                              </div>
                              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SQL</h2>
                                <nav class="list-none mb-10">
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fitness App Usage Analysis</a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                </nav>
                              </div>

                            <!--
                              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Excel</h2>
                                <nav class="list-none mb-10">
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                  <li>
                                    <a class="text-gray-600 hover:text-gray-800"></a>
                                  </li>
                                </nav>
                              </div>
                            -->
                            </div>
                          </div>
                          <div class="bg-gray-100">
                            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                              <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Rohit Singh Majila</p>
                              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a class="text-gray-500">
                                   <a href="https://www.linkedin.com/in/rohit-singh-majila/" target="_blank" rel="noopener noreferrer" class="linkedin-icon-small"></a>
                                   <a href="https://github.com/RohitSinghMajila" target="_blank" rel="noopener noreferrer" class="github-icon-small"></a>
                                </a>
                              </span>
                            </div>
                          </div>
                    </footer>
              '
        }
}

customElements.define('my-footer', MyFooter)