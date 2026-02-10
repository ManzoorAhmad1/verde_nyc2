
import React from 'react';
import { VENUES } from './constant';

const VenueGrid: React.FC = () => {
  return (
    <div>
      <section className=" bg pt-8 pb-4 px-6" style={{ backgroundImage: "url('/mila-miami-texture.png')" }}>
        <div className="w-full mt-20">
          <h3 className="section-title font-bold">A YEEELS GROUP DESTINATION — Paris | Saint-Tropez | Dubai | Sardinia | New York</h3>
          <h2 className="section-heading font-normal">Where Parisian Craft Meets New York Soul</h2>

          <p className="section-text mb-8">
            Verde NYC is the latest jewel in the Yeeels Group crown—an international hospitality collective celebrated for curating unforgettable culinary destinations across Europe, the Middle East, and now, in the heart of Manhattan.
          </p>
          <p className="section-text mb-8">
            Verde brings Parisian soul to New York's vibrant streets. Here, French culinary tradition is reimagined with contemporary elegance—each dish reflects precision, passion, and the art of celebration.
          </p>
          <p className="section-text mb-8">
            Step into a world of intimate charm and metropolitan energy, where every moment is crafted for connection and savor. From thoughtfully designed tasting journeys to vibrant lounge evenings and exclusive dining experiences, Verde invites you to dine beyond the expected.
          </p>
          <p className="section-text mb-16 italic">
            Paris on the plate. New York in the room
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VENUES.map((venue: any) => (
            <a
              key={venue.id}
              href={venue.link}
              className="group relative block aspect-[16/9] overflow-hidden"
            >
              <img
                src={venue.image}
                alt={venue.title}
                className="venue-image-smooth w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 opacity-100 group-hover:bg-red-950/80 transition-all">
                <h3 className="text-2xl lg:text-3xl font-playfair uppercase tracking-[0.1em] mb-4">
                  {venue.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-2xl">
                  {venue.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VenueGrid;
