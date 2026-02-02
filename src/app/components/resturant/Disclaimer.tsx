const Disclaimer = () => {
  return (
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        <hr className="border-neutral-300" />
        
        <div className="py-12">
          <div className="text-center space-y-6">
            <p className="text-neutral-600">
              &nbsp;GF - gluten free | V - vegan<br />
              Ask your server which additional dishes can be adjusted to become vegan friendly.
            </p>
            
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong>*Eating raw or undercooked fish, shellfish or meat increases the risk of foodborne illness 
              especially if you have certain medical conditions. Please alert your server to any food allergies 
              before you order. There is risk associated with consuming raw oysters. If you have chronic illness 
              of the liver, stomach or blood or have immune disorders, you are at greater risk of serious illness 
              from raw oysters and should eat oysters fully cooked. If unsure of your risk, consult a physician. 
              20% service charge will be added for your convenience. 22% service charge will be added for parties 
              of 6 or more.</strong>
            </p>
            
            <p className="text-sm text-neutral-700">
              <strong>**Vegan milk alternatives available upon request.</strong>
            </p>
          </div>
        </div>

        <hr className="border-neutral-300" />
        
        {/* Schema.org Menu Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Menu",
              "name": "Dinner Menu",
              "inLanguage": "en",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Discover Verde NYC Experiences",
                  "description": "*5-course menu, chef's selection. requires whole table's participation",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Verde NYC Signature Tasting Menu*",
                      "description": "5-course menu, chef's selection. Requires whole table's participation.",
                      "offers": {
                        "@type": "Offer",
                        "price": "155",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Premium Chef's Tasting Menu*",
                      "description": "5-course menu, chef's premium selection. Requires whole table's participation.",
                      "offers": {
                        "@type": "Offer",
                        "price": "225",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Seafood Tower*",
                      "description": "Lobster, 1/2 dozen oysters, large prawns, madai crudo, tuna tartare, mixed sashimi. Add Petrossian caviar +185.",
                      "offers": {
                        "@type": "Offer",
                        "price": "185",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Petrossian Kaluga Caviar*",
                      "description": "California, egg à la russe, shallot, capers, crème fraîche, chives, blini. 30g 185 | 50g 305 | 125g 750 | 250g 1500.",
                      "offers": [
                        { "@type": "Offer", "price": "185", "priceCurrency": "USD", "name": "30g" },
                        { "@type": "Offer", "price": "305", "priceCurrency": "USD", "name": "50g" },
                        { "@type": "Offer", "price": "750", "priceCurrency": "USD", "name": "125g" },
                        { "@type": "Offer", "price": "1500", "priceCurrency": "USD", "name": "250g" }
                      ]
                    }
                  ]
                }
                // ... continue with all menu items
              ]
            })
          }}
        />
      </div>
    </div>
  )
}

export default Disclaimer