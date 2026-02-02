import Image from 'next/image'
import HeroGallery from '../components/resturant/HeroGallery'
import Philosophy from '../components/resturant/Philosophy'
import FoodGallery from '../components/resturant/FoodGallery'
import MenuTabs from '../components/resturant/MenuTabs'
import Disclaimer from '../components/resturant/Disclaimer'

export default function RestaurantPage() {
  return (
    <main className="min-h-screen">
      <HeroGallery />
      <Philosophy />
      <FoodGallery />
      <MenuTabs />
      <Disclaimer />
    </main>
  )
}
