export const menuData = [
  {
    id: 'dinner',
    label: 'DINNER',
    specialNote: {
      title: 'Discover Mila Experiences',
      description: '*5-course menu, chef\'s selection. requires whole table\'s participation'
    },
    sections: [
      {
        id: 'experiences',
        title: 'Discover Verde NYC Experiences',
        items: [
          {
            name: 'Verde NYC SIGNATURE TASTING MENU*',
            description: '5-course menu, chef\'s selection. requires whole table\'s participation',
            price: '155 - per person'
          },
          {
            name: 'PREMIUM CHEF\'S TASTING MENU*',
            description: '5-course menu, chef\'s premium selection. requires whole table\'s participation',
            price: '225 - per person'
          },
          {
            name: 'SEAFOOD TOWER*',
            description: 'lobster, 1/2 dozen oysters, large prawns, madai crudo, tuna tartare, mixed sashimi',
            price: '185',
            addOn: 'add petrossian caviar 185'
          },
          {
            name: 'PETROSSIAN KALUGA CAVIAR*',
            description: 'california, egg à la russe, shallot, capers, crème fraîche, chives, blini',
            price: '30g 185 | 50G 305 | 125g 750 | 250G 1500'
          }
        ]
      },
      {
        id: 'tapas',
        title: 'Tapas | Shea',
        items: [
          {
            name: 'charred edamame',
            description: 'Verde spice, salt',
            dietary: ['V']
          },
          {
            name: 'blistered shishito peppers',
            description: 'tosazu miso, izak spice'
          },
          {
            name: 'chicken yakitori',
            description: 'fragrant teriyaki, spicy furikake, pickled fennel'
          },
          {
            name: 'wild fungi dumpling',
            description: 'duxelle mushroom, spinach, chili garlic ponzu',
            dietary: ['V']
          },
          {
            name: 'fried eggplant and zucchini chips',
            description: 'shiso tzatziki'
          },
          {
            name: 'salmon crispy rice*',
            description: 'serrano pepper, marinated ikura, katsuo furikake'
          },
          {
            name: 'spicy tuna crispy rice',
            description: 'smoked chili sauce, kizami wasabi, shiso*'
          },
          {
            name: 'grilled octopus skewer',
            description: 'romesco sauce, shiso chimichurri, fresno chili'
          },
          {
            name: 'caviar potato millefeuille',
            description: 'smoked wasabi, crème fraîche',
            dietary: ['GF'],
            addOn: 'vegan caviar 21 | brown trading royal caviar 29'
          },
          {
            name: 'wagyu beef tartare*',
            description: 'bone marrow, pickled mustard seeds, gaufrette potatoes',
            dietary: ['GF']
          }
        ]
      }
      // Add more sections as needed
    ]
  },
  {
    id: 'cocktail',
    label: 'COCKTAIL',
    sections: [
      {
        id: 'signature-cocktails',
        title: 'Signature Cocktails',
        items: [
          {
            name: 'UME BLOSSOM',
            description: 'bitter | herbaceous | tart - roku gin, umeshu, campari, fig infused vermouth',
            price: '21'
          },
          {
            name: 'SPRING IN OSAKA',
            description: 'mesmerizing | floral | aromatic - suntory toki japanese whisky, elderflower, lychee, cardamom, club soda',
            price: '21'
          },
          {
            name: 'BEACH WALK',
            description: 'tropical | transporting | vibrant - e11even vodka, japanese melon, coconut, peppercorn honey, pineapple, lemon, makrut lime leaf',
            price: '21'
          },
          {
            name: 'Verde G&T',
            description: 'velvety | effervescent | earthy - beefeater London dry gin, almond, lime, cucumber tonic',
            price: '22'
          }
        ]
      }
      // Add more sections as needed
    ]
  },
  {
    id: 'wine',
    label: 'WINE',
    sections: [] // Add wine sections
  },
  {
    id: 'dessert',
    label: 'DESSERT',
    sections: [] // Add dessert sections
  },
  {
    id: 'brunch',
    label: 'SUNDAY BRUNCH',
    sections: [] // Add brunch sections
  }
]