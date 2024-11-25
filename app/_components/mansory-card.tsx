import React from "react";

interface Card {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const MasonryCards: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Export-Import Training",
      subtitle: "Learn strategies for international trade, regulations, and global market opportunities.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      href: "#",
    },
    {
      title: "Digital Marketing Workshop",
      subtitle: "Master social media, SEO, and content strategies to build a strong brand presence.",
      image: "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      href: "#",
    },
    {
      title: "Investment and Financial Management Training",
      subtitle: "Gain insights into smart investing, risk management, and financial planning.",
      image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      href: "#",
    },
    {
      title: "International Certifications",
      subtitle: "Programs that provide globally recognized skill validation.",
      image: "https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      href: "#",
    },
    {
      title: "Mentorship with Global Experts",
      subtitle: "Receive guidance directly from industry professionals abroad.",
      image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      href: "#",
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-12 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col-span-12 ${
              index === 0 ? "sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3 sm:self-end" : index === 1 ? "sm:col-span-5 md:col-span-4 lg:col-span-3 sm:self-end" : index === 2 ? "md:col-span-4" : "sm:col-span-6 md:col-span-4"
            }`}
          >
            <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href={card.href}>
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={card.image} alt={card.title} />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="bg-white rounded-lg p-4 dark:bg-neutral-800">
                  <div className="text-sm font-semibold text-gray-800 md:text-xl dark:text-neutral-200">{card.title}</div>
                  <div className="text-xs text-gray-600 mt-1 dark:text-neutral-400">{card.subtitle}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryCards;
