import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: (
        <Image src="/icons/Group.png" alt="cart icon" width={60} height={60} />
      ),
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: (
        <Image src="/icons/warrenty.png" alt="warranty icon" width={60} height={60} />
      ),
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: (
        <Image src="/icons/shipping.png" alt="shipping icon" width={60} height={60} />
      ),
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: (
        <Image src="/icons/support.png" alt="support icon" width={60} height={60} />
      ),
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="bg-[#FAF3EA] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
