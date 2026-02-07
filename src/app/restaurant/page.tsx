'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function RestaurantPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const menuTabs = ['DINNER', 'COCKTAIL', 'WINE', 'DESSERT', 'SUNDAY BRUNCH'];

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="restaurant-page">
        {/* Gallery Section */}
        <section id="restaurant-gallery" className="restaurant-gallery-section">
          <div className="gallery-slideshow">
            <Image
              src="/images/RA_Verde_Main1_RV6_250317.jpg"
              alt="Verde NYC Restaurant"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              priority
            />
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="our-philosophy-mila" className="philosophy-section">
          <div className="parallax-background texture-bg">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
              alt="verde-nyc-texture"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="philosophy-content">
            <h1 style={{color: 'var(--verde-heading)'}}><em>Mediterranean Excellence in the Heart of Meatpacking</em></h1>
            <h1 style={{color: 'var(--verde-heading)'}}>Welcome to Verde NYC – where culinary artistry meets celebration.</h1>
            
            <div className="philosophy-text" style={{color: 'var(--verde-text)'}}>
              <p>Indulge in a symphony of flavors inspired by the elegance of Paris and the vibrant spirit of the Mediterranean. At <Link href="https://verde-nyc.com/">Verde NYC</Link>, every dish is a masterpiece, crafted with creativity and precision to ignite your senses and elevate your dining journey.</p>
              <p>Our culinary experts bring together the finest Mediterranean ingredients with innovative techniques, creating an unforgettable gastronomic experience. From lunch to late-night dining, Verde offers an atmosphere where sophistication meets celebration.</p>
              <p>Dishes are designed to be shared, encouraging connection and conversation in an energetic setting that transforms throughout the day—from refined lunch service to vibrant evening celebrations.</p>
            </div>

            <div className="button-center">
              <Link 
                href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
                className="btn btn-primary text-[#8E402F] border-[#8E402F] hover:bg-[#8E402F] hover:text-white"
                target="_blank"
              >
                RESERVE YOUR TABLE
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu-page" className="menu-section">
          <h1 style={{ textAlign: 'center' }}>MENU</h1>

          {/* Tab Controls */}
          <div className="menu-tabs">
            <div className="tab-controls">
              {menuTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Dinner Tab */}
              {activeTab === 0 && (
                <div className="tab-panel dinner-menu">
                  <h3 style={{ textAlign: 'center' }}>dinner</h3>
                  <h2 style={{ textAlign: 'center' }}>Menu</h2>
                  <h3 style={{ textAlign: 'center' }}><strong>Discover Verde NYC Experiences</strong></h3>

                  <div className="menu-experiences">
                    <div className="experience-row">
                      <div className="experience-item">
                        <p>VERDE SIGNATURE TASTING MENU*<br/>5-course menu, chef&apos;s selection 155 - per person requires whole table&apos;s participation</p>
                      </div>
                      <div className="experience-item">
                        <p>PREMIUM CHEF&apos;S TASTING MENU*<br/>5-course menu, chef&apos;s premium selection 225 - per person requires whole table&apos;s participation</p>
                      </div>
                      <div className="experience-item">
                        <p>SEAFOOD TOWER*<br/>lobster, 1/2 dozen oysters, large prawns, madai crudo, tuna tartare, mixed sashimi 185 | add petrossian caviar 185</p>
                      </div>
                    </div>
                  </div>

                  <p style={{ textAlign: 'center' }}>PETROSSIAN KALUGA CAVIAR*<br/>california, egg à la russe, shallot, capers, crème fraîche, chives, blini 30g 185 | 50G 305 | 125g 750 | 250G 1500</p>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Tapas | Shea</strong></h3>
                  <div className="menu-items">
                    <p>charred edamame, Verde spice, salt 11 <strong>(V)</strong></p>
                    <p>blistered shishito peppers, tosazu miso, izak spice 14</p>
                    <p><strong>chicken yakitori,</strong> fragrant teriyaki, spicy furikake, pickled fennel 22</p>
                    <p>wild fungi dumpling, duxelle mushroom, spinach, chili garlic ponzu 28 <strong>(V)</strong></p>
                    <p>fried eggplant and zucchini chips, shiso tzatziki 21</p>
                    <p>salmon crispy rice, serrano pepper, marinated ikura, katsuo furikake* 24</p>
                    <p>spicy tuna crispy rice smoked chili sauce, kizami wasabi, shiso* 26</p>
                    <p>grilled octopus skewer, romesco sauce, shiso chimichurri, fresno chili 38</p>
                    <p>caviar potato millefeuille, smoked wasabi, crème fraîche <strong>(GF)</strong><br/>vegan caviar 21 | brown trading royal caviar 29</p>
                    <p>wagyu beef tartare, bone marrow, pickled mustard seeds, gaufrette potatoes* 35 <strong>(GF)</strong></p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Mediterrasian Raw Bar</strong></h3>
                  <div className="menu-items">
                    <p>madai sashimi, jalapeño dressing, kumquat, orange marmalade, rakyo* 28 <strong>(GF)</strong></p>
                    <p>hamachi crudo, avocado coulis, lime caviar* 25 <strong>(GF)</strong></p>
                    <p><strong>seabream carpaccio, piquillo, yuzu, capers, arbequina olive oil</strong>* 32 (GF)</p>
                    <p>1/2 dozen oysters, tosazu, apple serrano salsa, Japanese mignonette* 30 <strong>(GF)</strong></p>
                    <p>tuna tartare, roasted fennel-tofu aïoli, avocado miso* 32 <strong>(GF)</strong></p>
                    <p>rainbow carpaccio, zucchini, watermelon radish, beets, basil aioli, sunchoke* 25 <strong>(GF) (V)</strong></p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Salads</strong></h3>
                  <div className="menu-items">
                    <p><strong>Verde house salad,</strong> purple ninja radish, baby golden beet, avocado, tomato, pumpkin seed 20 (V)</p>
                    <p>japanese seaweed salad, pickled cucumber, wakame, ponzu, nori crisp 22 (GF) (V)</p>
                    <p>spinach salad, spicy sesame dressing, furikake 19 (GF) (V)</p>
                    <p>snow crab salad, cucumber, avocado, orange, honey ponzu dressing 30</p>
                    <p>beetroot tartare, apple, avocado, jalapeño, sesame ponzu, lotus chips* 20 (GF) (V)</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Signatures</strong></h3>
                  <div className="menu-items">
                    <p>&apos;shawarma&apos; wagyu gyoza, shichimi ponzu 34</p>
                    <p>truffle cream spaghetti, parmesan cheese, chives, shaved black truffle 58 | add brown trading royal caviar 35</p>
                    <p>seasonal mushroom hotpot, shaved truffle, arbequina olive oil 60 <strong>(GF)</strong></p>
                    <p>maine lobster tempura, smoked jalapeño aioli, truffle tosazu, lettuce wraps 85</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Water</strong></h3>
                  <div className="menu-items">
                    <p>seared salmon, hokkaido corn purée, piquillo-shiso coulis 38</p>
                    <p>grilled madagascan shrimp, spicy miso butter, fennel salad* (3 pieces) 59</p>
                    <p>marinated chilean seabass, green curry, chili, kaffir lime, herb salad 53 (GF)</p>
                    <p><strong>king crab lobster rice hot pot,</strong> bouillabaisse, mushrooms, bonito, nori 90 | +2oz A5 wagyu MP | +japanese uni 25 | +ikura 10 (GF)</p>
                    <p>mediterrasian black cod, spicy miso, kinome 56 <strong>(GF)</strong></p>
                    <p>2lb grilled whole branzino, shiso chimichurri, kalamata olive, herb salad 85</p>
                    <p>2lb grilled whole dover sole, yuzu kosho butter, Verde spice, miso pumpkin vinegar, espelette 125 <strong>(GF)</strong></p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Earth</strong></h3>
                  <div className="menu-items">
                    <p>spicy chipotle lamb chops, shiso yoghurt, basil, crispy furikake 42</p>
                    <p>free range young chicken, Mediterranean marinade, basil jalapeño sauce 42 <strong>(GF)</strong></p>
                    <p>wagyu skirt steak, pickled cabbage, basil crisp 80 (GF)</p>
                    <p><strong>7oz creekstone beef tenderloin,</strong> creamy ponzu, micro green salad 70</p>
                    <p>14oz prime ribeye, yuzu kosho, rosemary marinade 110</p>
                    <p>32oz Australian wagyu tomahawk, onion jus 275</p>
                    <p>Japanese A5 striploin wagyu Kagoshima Prefecture - daily selection (2oz minimum) MP</p>
                    <p>koji dry aged 30-day Châtel Farms Angus - 30oz USDA prime bone-in porterhouse 350 | 30oz USDA prime boneless ribeye 375</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Vegetables</strong></h3>
                  <div className="menu-items">
                    <p>grilled sweet corn, Verde spice, spicy feta sauce 16</p>
                    <p>broccolini, miso-tahini, sesame 16 <strong>(GF)</strong></p>
                    <p>crispy brussels sprouts, honey-soy balsamic glaze 16 (GF)</p>
                    <p>grilled purple artichoke, shiso verde, sunchoke crisp 24 <strong>(GF)</strong></p>
                    <p>seasonal wild mushrooms, truffle ponzu butter, shaved truffle 29 <strong>(GF)</strong></p>
                    <p>wasabi mashed potato, smoked cream, shiso, micro herbs 16 <strong>(GF)</strong></p>
                    <p>crispy cauliflower tempura, pickled fennel, cucumber, fresh herbs, tobanjan sauce 21 (V)</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Sushi</strong></h3>
                  <div className="menu-items">
                    <p>SAMPLERS<br/>nigiri sampler* (6pc) 45 | omakase* (12pc) 80<br/>sashimi sampler* 65 | tasting* 95 | omakase* 130</p>
                  </div>

                  <div className="menu-items">
                    <p>SIGNATURE NIGIRI (2PC)<br/>wagyu*, a5 kagoshima, shaved black truffle, fresh wasabi 45<br/>chu toro*, bluefin tuna, royal caviar 42<br/>o toro*, foie gras, eel sauce, gold flake 45</p>
                  </div>

                  <div className="menu-items">
                    <p>MAKI<br/>eggplant, garlic miso butter, micro shiso 16<br/>beetroot, red and gold beets, sriracha, cucumber, avocado 18 (GF) <strong>(V)</strong><br/>salmon avocado, sundried tomato relish, asparagus, evoo, micro arugula* 18 <strong>(GF)</strong><br/>spicy hamachi, avocado, serrano pepper, provence salt, yuzu aïoli* 21<br/>spicy tuna, tobiko, chili oil, avocado* 22<br/>crispy shrimp, sashimi trio, spicy mentaiko* 27<br/>truffle scallop, shaved black truffle* 31 <strong>(GF)</strong><br/>A5 wagyu &apos;aburi&apos; maki, toro, foie gras, unagi sauce, orange* 45</p>
                  </div>
                </div>
              )}

              {/* Cocktail Tab */}
              {activeTab === 1 && (
                <div className="tab-panel cocktail-menu">
                  <h3 style={{ textAlign: 'center' }}>cocktail</h3>
                  <h2 style={{ textAlign: 'center' }}>Menu</h2>

                  <h3 style={{ textAlign: 'center' }}><strong>signature cocktails</strong></h3>

                  <div className="cocktail-grid">
                    <div className="cocktail-column">
                      <p>UME BLOSSOM 21<br/>bitter | herbaceous | tart<br/>roku gin, umeshu, campari, fig infused vermouth</p>
                      <p>SPRING IN OSAKA 21<br/>mesmerizing | floral | aromatic<br/>suntory toki japanese whisky, elderflower, lychee, cardamom, club soda</p>
                      <p>BEACH WALK 21<br/>tropical | transporting | vibrant<br/>e11even vodka, japanese melon, coconut, peppercorn honey, pineapple, lemon, makrut lime leaf</p>
                      <p>VERDE G&amp;T 22<br/>velvety | effervescent | earthy<br/>beefeater London dry gin, almond, lime, cucumber tonic</p>
                    </div>
                    <div className="cocktail-column">
                      <p>VERDE PALOMA 23<br/>floral | bright | refreshing<br/>maestro dobel diamante tequila, del maguey vida mezcal, elderflower, grapefruit, sparkling water</p>
                      <p>MARGARITA VERDE 21<br/>botanical | citrus | spicy<br/>hornitos plata, cointreau, cilantro, peppers, passion fruit, lime juice</p>
                      <p>NATSU MORI 21<br/>vibrant | tart | herbaceous<br/>código tequila reposado, shiso, mint, pineapple, lemon</p>
                      <p>AFTER HOURS 22<br/>velvety | herbaceous | luscious<br/>jefferson&apos;s straight bourbon, hennessy vs, coffee, chocolate, cherry, almond, mint</p>
                    </div>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>TableSide Mixology Experiences</strong></h3>
                  <div className="menu-items">
                    <p>SMOKE &amp; MIRRORS 50<br/>elegant | stirred | smoked<br/>alfred giraud french &apos;heritage&apos; whisky, hibiki harmony, demerara, black walnut bitters</p>
                    <p>IMPERIAL SPRITZ 60<br/>opulent | crisp | spiced<br/>belvedere 10, moët &amp; chandon, apple &amp; spice cordial, cardamom orange bitters</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Zero-Proof cocktails</strong></h3>
                  <div className="menu-items">
                    <p>LONGEVITY 16<br/>restorative | crisp | effervescent<br/>almond, lime, cucumber tonic</p>
                    <p>HEIR OF THE GOD 16<br/>hydrating | tropical | spicy</p>
                    <p>GOLDEN GROVE 21<br/>tropical | light | soothing<br/>turmeric, ginger, milk thistle, seedlip grove, root blend, pandan, coconut milk, lemon</p>
                  </div>
                </div>
              )}

              {/* Wine Tab */}
              {activeTab === 2 && (
                <div className="tab-panel wine-menu">
                  <h3 style={{ textAlign: 'center' }}>wine</h3>
                  <h2 style={{ textAlign: 'center' }}>Menu</h2>
                  <div className="button-center">
                    <Link 
                      href="/s/MILA_3F-Wine-Menu-012326.pdf"
                      className="btn "
                      target="_blank"
                    >
                      download menu
                    </Link>
                  </div>
                </div>
              )}

              {/* Dessert Tab */}
              {activeTab === 3 && (
                <div className="tab-panel dessert-menu">
                  <h3 style={{ textAlign: 'center' }}>Dessert</h3>
                  <h2 style={{ textAlign: 'center' }}>Menu</h2>

                  <div className="dessert-grid">
                    <div className="dessert-column">
                      <p>MATCHA SOFT SERVE TOWER 58 (GF) (V)<br/>caramelized puff rice, candied lemon, shiso oil</p>
                      <p>MOLTEN CHOCOLATE LAVA CAKE 21<br/>miso ice cream</p>
                      <p>RASPBERRY CHEESECAKE 18<br/>black sesame opaline, almond crumble</p>
                      <p>TIRAMISŌ 28<br/>miso sponge, candied mikan, hazelnut, mascarpone</p>
                      <p>MANJARI CHOCOLATE MOUSSE PARFAIT 40<br/>salted caramel, banana coulis</p>
                    </div>
                    <div className="dessert-column">
                      <p>EXOTIC VACHERIN 18<br/>coconut espuma, passion fruit-mango coulis, vanilla cream</p>
                      <p>VEGAN CHOCOLATE MOUSSE 18 (GF) (V)<br/>orange marmalade, coconut sorbet</p>
                      <p>YUZU BLOSSOM PANNA COTTA 19 (GF)<br/>mango coulis, sudachi zest, mirliton</p>
                      <p>CHEF&apos;S DESSERT PLATTER 100</p>
                      <p>HOMEMADE ICE CREAM &amp; SORBET DAILY SELECTION 16</p>
                    </div>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Coffee by Illy</strong></h3>
                  <div className="menu-items">
                    <p>ESPRESSO CLASSICO - MEDIUM ROAST 7<br/>a smooth flavor with delicate notes of caramel, orange blossom, and jasmine with a sweet aftertaste</p>
                    <p>DECAFFEINATED ESPRESSO - DARK ROAST 7<br/>a smooth taste, with notes of caramel, chocolate and toasted bread, followed by a sweet finish</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Tea by palais des thés</strong></h3>
                  <div className="menu-items">
                    <p>PARIS FOR YOU - BY DAY 6<br/>floral green tea with notes of rose, raspberry, and lychee</p>
                    <p>GENMAICHA YAMA 6<br/>traditional japanese tea with roasted brown rice</p>
                    <p>EARLY GREY QUEEN BLEND 6<br/>an earl grey delicately flavored with bergamot</p>
                    <p>L&apos;HERBORISTE n°74 6<br/>chamomile tea | caffeine free<br/>a calming blend of limeflower, chamomile and orange blossom</p>
                    <p>INFUSION DE MENTHE 6<br/>mint tea | caffeine free<br/>herbal tea made from peppermint leaves</p>
                  </div>
                </div>
              )}

              {/* Sunday Brunch Tab */}
              {activeTab === 4 && (
                <div className="tab-panel brunch-menu">
                  <h3 style={{ textAlign: 'center' }}>SUNDAY <Link href="/miami-brunch">brunch</Link></h3>
                  <h2 style={{ textAlign: 'center' }}>Menu</h2>
                  <h2 style={{ textAlign: 'center' }}><strong>Pick Your Package</strong></h2>

                  <h3 style={{ textAlign: 'center' }}><strong>non-alcoholic package</strong></h3>
                  <div className="menu-items">
                    <p><strong>VIRGIN 95</strong><br/>Longevity: almond, lime, cucumber tonic<br/>Heir of the god: passionfruit, pineapple, ginger, lemon</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>champagne &amp; rosé packages</strong></h3>
                  <div className="menu-items">
                    <p>RÉSERVE 125<br/>Renard-Barnier, &quot;Cuvée Spéciale&quot;, Villevenard NV<br/>Domaine des Féraud, &quot;Prestige,&quot; Côtes de Provence</p>
                    <p>MILLÉSIME 170<br/>Perrier Jouet Blasón, Rosé NV<br/>Château Sainte Marguerite, &quot;Fantastique&quot;, Côtes de Provence</p>
                    <p>IMPÉRIAL 320<br/>Dom Pérignon, Brut<br/>Château d&apos;Esclans, &apos;Garrus&apos; Rosé, Côtes de Provence</p>
                  </div>

                  <hr className="menu-divider" />

                  <h3 style={{ textAlign: 'center' }}><strong>Buffet Experience</strong></h3>
                  <h3 style={{ textAlign: 'center' }}><strong>stations</strong></h3>
                  <div className="menu-items">
                    <p>FRUIT &amp; PASTRY<br/>tropical fruits | freshly baked croissants | artisanal bread &amp; bagels | flavored yogurts</p>
                    <p>CHARCUTERIE &amp; CHEESE<br/>cured meats | flavorful cheeses</p>
                    <p>5J JAMÓN CARVING<br/>selection of meats carved to perfection</p>
                    <p>SALAD<br/>greek | potato | poached tuna | chicken | tomato | caesar</p>
                    <p>MEZZE<br/>hummus with fried chickpeas | tzatziki | micro cilantro | eggplant caviar</p>
                    <p>RAW BAR<br/>fresh oysters* | octopus ceviche* | white fish ceviche* | florida pink shrimp* | sashimi*</p>
                    <p>MAKI<br/>spicy tuna* | salmon avocado* | spicy yellowtail* | vegetable roll</p>
                    <p>HOT MEAT<br/>leg of lamb | whole smoked chicken | Verde roasted salmon | new york steak</p>
                    <p>ORGANIC EGG<br/>customize your own omelet or savor organic eggs cooked to your preference</p>
                    <p>ROBATA<br/>lamb kofte | chicken kushiyaki | grilled fresh vegetables</p>
                    <p>DESSERT<br/>chef-selected desserts | waffles | sorbets</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section id="gf-v-disclaimer" className="disclaimer-section">
          <hr className="section-divider" />
          <div className="disclaimer-content">
            <p>GF - gluten free | V - vegan<br/>Ask your server which additional dishes can be adjusted to become vegan friendly.</p>
            <p><strong>*Eating raw or undercooked fish, shellfish or meat increases the risk of foodborne illness especially if you have certain medical conditions. Please alert your server to any food allergies before you order. There is risk associated with consuming raw oysters. If you have chronic illness of the liver, stomach or blood or have immune disorders, you are at greater risk of serious illness from raw oysters and should eat oysters fully cooked. If unsure of your risk, consult a physician. 20% service charge will be added for your convenience. 22% service charge will be added for parties of 6 or more.</strong></p>
            <p><strong>**Vegan milk alternatives available upon request.</strong></p>
          </div>
          <hr className="section-divider" />
        </section>

        {/* Food Gallery Section */}
        <section id="food-gallery" className="food-gallery-section">
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_Main2_RV6_250317.jpg"
                alt="Verde NYC Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_Main3_RV6_250317.jpg"
                alt="Verde NYC Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_Bar_RV6_250317.jpg"
                alt="Verde NYC Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_Bar2_RV6_250317.jpg"
                alt="MediterrAsian Black Cod"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_interior_Lobby_290325.jpeg"
                alt="Verde NYC Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/RA_Verde_interior_Main_4_290325.jpeg"
                alt="Verde NYC Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#restaurant-gallery" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>New Gallery</span></div>
            </a>
            <a href="#our-philosophy-mila" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>our philosophy</span></div>
            </a>
            <a href="#menu-page" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Menu</span></div>
            </a>
            <a href="#gf-v-disclaimer" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>GF / V disclaimer</span></div>
            </a>
            <a href="#food-gallery" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>food gallery</span></div>
            </a>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
