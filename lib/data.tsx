export const incentives = [
  {
    name: "Free Shipping",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
];

export const Footer_Navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const FAQs = [
  {
    id: 1,
    question: "What are microgreens?",
    answer:
      "Microgreens are young, tender plants that are harvested just a few weeks after germination.",
  },
  {
    id: 1,
    question: "What are the benefits of microgreens?",
    answer:
      "Microgreens are high in nutrients, have antioxidant properties, promote healthy skin, aid in digestion, are low in calories, and are versatile in cooking",
  },
  {
    id: 1,
    question: "What nutrients do microgreens contain?",
    answer:
      "Microgreens are known to contain high levels of vitamins and minerals such as vitamin C, vitamin E, beta-carotene, iron, and calcium.",
  },
  {
    id: 1,
    question: "How do microgreens promote healthy skin?",
    answer:
      "Microgreens contain high levels of antioxidants and vitamins that can help to improve skin health.",
  },
  {
    id: 1,
    question: "How can I use microgreens in cooking?",
    answer:
      "Microgreens are very versatile and can be added to a variety of dishes such as salads, sandwiches, soups, and smoothies.",
  },
  {
    id: 1,
    question: "Are microgreens a good addition to a weight loss diet?",
    answer:
      "Yes, microgreens are low in calories and can be a great addition to a healthy diet for those looking to lose weight.",
  },
  // More questions...
];

export const Appbar_Navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Microgreens", href: "/microgreens" },
  { name: "FAQs", href: "/FAQs" },
  { name: "Contact", href: "/contact" },
];
export const product = {
  name: "Red Garnet Amaranth",
  href: "#",
  price: "$15 / 10 onz",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "microgreens", href: "/microgreens" },
    { id: 2, name: "product-name", href: "/microgreens/product-name" },
  ],
};
export const reviews = { average: 4, totalCount: 200 };

export const microgreens = [
  {
    id: 0,
    Image: "cerled-cress.png",
    Microgreen: "Red Garnet Amaranth",
    Flavour: "Mild sweet earthy flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre.",
    Colour: "Red / Magenta",
    Price: "$15 / 1oz pack",
  },
  {
    id: 1,
    Image: "detroit-red-beet.png",
    Microgreen: "Micro Arugula",
    Flavour: "Strong pepper, mild buttery and cabbage-like flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B, C and E, Calcium, Iron, Magnesium, Niacin, Phosphorus, Potassium, Antioxidants, All Essential Amino Acids, Protein: 20-25%",
    Colour: "Deep Green",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 2,
    Image: "micro-arugula.png",
    Microgreen: "Detroit Red Beet",
    Flavour: "Sweet mix of root beets and spinach flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B, C, E, and K, the minerals calcium, iron, magnesium, manganese, potassium, zinc, as well as antioxidants.",
    Colour: "Vibrant Red Stems wiht neon green leaves",
    Price: "$15 / 1oz pack",
  },
  {
    id: 3,
    Image: "micro-brocolli.png",
    Microgreen: "Micro Brocolli",
    Flavour: "Fresh, mild broccoli or cabbage flavor",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Sulforaphane (cancer-fighting compound), vitamins C, A, E, and K, protein, calcium, potassium, iron, glucosinolates, carotenoids, chlorophyll, essential minerals, and phenolic compounds.",
    Colour: "Thin white stem with shades of green on top",
    Price: "$12 / 1.5oz pack",
  },
  {
    id: 4,
    Image: "micro-carrot.png",
    Microgreen: "Red Acre Cabbage",
    Flavour: "Strong broccoli flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins C, K, and E, beta-carotenes, calcium, magnesium, potassium, phosphorus, folate, choline, sodium, and iron.",
    Colour: "green leaves with violet to red highlights",
    Price: "$12 / 1.5oz pack",
  },
  {
    id: 5,
    Image: "micro-cilantro.png",
    Microgreen: "Micro Carrot",
    Flavour: "Mild sweet carrot flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B complex, D, and E, calcium, iron, magnesium, potassium, and phosphorus.",
    Colour: "Green",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 6,
    Image: "micro-dill.png",
    Microgreen: "Micro Cilantro",
    Flavour: "Pungent citrusy flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamin A, C, E and vitamin K, as well as riboflavin, niacin, vitamin B6, folate, pantothenic acid, calcium, iron, magnesium, phosphorus, potassium, copper and manganese and fibre.",
    Colour: "Green",
    Price: "$15 / 1oz pack",
  },
  {
    id: 7,
    Image: "micro-radish.png",
    Microgreen: "Curled Cress",
    Flavour: "Peppery, Tangy, Mellows with Age",
    Varieties: "There are no varieties for this product.",
    Nutrients: "Vitamins B, C & K, Folic Acid & fibre.",
    Colour: "Light Green",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 8,
    Image: "micro-dill.png",
    Microgreen: "Micro Dill",
    Flavour: "Slightly lemony, sweet, and bitter flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Folate (vitamin B11), vitamin B6 (pyridoxine), riboflavin (vitamin B-2), vitamin-C and A, calcium, iron and manganese.",
    Colour: "Green",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 9,
    Image: "popcorn-shoots.png",
    Microgreen: "Popcorn Shoots",
    Flavour: "Sweet corn flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients: "Vitamins A, B, C, & E, Calcium, Magnesium and Chlorophyll.",
    Colour: "Bright Yellow",
    Price: "$16 / 2oz pack",
  },
  {
    id: 10,
    Image: "red-russian-kale.png",
    Microgreen: "Red Russian Kale",
    Flavour: "Mild, sweet and nutty flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B, C, E and K, Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Beta Carotene, Chlorophyll, Amino Acids, Antioxidants, Protein: 30-35%",
    Colour: "Assorted red & pink stems with dark green leaves",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 11,
    Image: "nasturtium.png",
    Microgreen: "Nasturtium",
    Flavour: "Spicy, similar to mustard and wasabi",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "The leaves are high in vitamin C (supports a strong immune system), iron and other minerals and the flowers are plentiful in vitamins B1, B2, B3 and also contain manganese, iron, phosphorus and calcium.",
    Colour: "Multi-color stems, Pink – yellow",
    Price: "$25 / 1oz pack",
  },
  {
    id: 12,
    Image: "red-tatsoi-mustard.png",
    Microgreen: "Red Tatsoi Mustard",
    Flavour: "Mild flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients: "Antioxidants, fiber, Vitamins A,C, E, and K.",
    Colour: "Dark green spoon-shaped leaves",
    Price: "$12 / 1.5oz pack",
  },
  {
    id: 13,
    Image: "pea-shoots.png",
    Microgreen: "Pea Shoots",
    Flavour: "Sweet, pea flavour. Crunchy and succulent",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "38 minerals, Vitamins A, B, C, E, and K, Folic acid, thiamine, riboflavin, calcium, iron, magnesium, niacin, phosphorus, potassium, and chlorophyll, all essential Amino Acids, 26% Protein",
    Colour: "Green",
    Price: "$16 / 2oz pack",
  },
  {
    id: 14,
    Image: "micro-radish.png",
    Microgreen: "Micro Radish",
    Flavour: "Spicy & floral with a hint of sweetness. Crunch and succulent",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B, C, E and K, Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Beta Carotene, Chlorophyll, Amino Acids, Antioxidants, Protein: 30-35%",
    Colour: "Vibrant Pink Stem with Deep Green Top",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 15,
    Image: "sunny-box.png",
    Microgreen: "Mild Micro Mix",
    Flavour: "Mild pepper flavour",
    Varieties:
      "Broccoli, kale, purple vienna kohlrabi, arugula, red acre cabbage",
    Nutrients:
      "Vitamins A and C, Calcium, Iron, Magnesium, Phosphorus, Potassium, Zinc, Amino Acids, thiamin, riboflavin, niacin, vitamin B6, pantothenic acid, and small traces of sodium, zinc and copper. Contains oxalic acid which can be harmful in high dosages, but it would require an enormous amount of sorrel to be consumed on a daily basis before it becomes threatening.",
    Colour: "Green with Purple & Red Highlights",
    Price: "$12 / 1.5oz pack",
  },
  {
    id: 16,
    Image: "rainbow-micro-mix.png",
    Microgreen: "Rainbow Micro Mix",
    Flavour: "Spicy & savory with hints of green freshness",
    Varieties: "Colourful array of amaranth, mustard, arugula, and broccoli.",
    Nutrients:
      "Vitamins A, B, C, E, & K, folic acid, niacin, potassium, iron, phosphorus, pantothenic acid, calcium, magnesium, zinc, carotenes",
    Colour: "Wonderful mixture of deep red and various green shades",
    Price: "$15 / 1.5oz pack",
  },
  {
    id: 17,
    Image: "sunny-box.png",
    Microgreen: "Spicy Micro Mix",
    Flavour: "Spicy peppery flavour",
    Varieties:
      "Broccoli, kale, purple vienna kohlrabi, arugula, red acre cabbage, southern giant mustard",
    Nutrients:
      "Vitamins A, B-complex, C, and K, antioxidants, fiber, iron, potassium, copper, calcium, and phosphorus.",
    Colour: "Green with Purple & Red Highlights",
    Price: "$12 / 1.5oz pack",
  },
  {
    id: 18,
    Image: "red-viened-sorrel.png",
    Microgreen: "Red Viened Sorrel",
    Flavour: "Delightful Lemony Tang",
    Varieties: "There are no varieties for this product.",
    Nutrients: "Vitamins A & C, Manganese, Copper and Iron.",
    Colour: "Bright Green",
    Price: "$25 / 1oz pack",
  },
  {
    id: 19,
    Image: "sunfolower-shoot.png",
    Microgreen: "Sunflower Shoots",
    Flavour: "Crunchy, nutty, sunflower seed flavour",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B complex, D, and E, calcium, iron, zinc, folate, magnesium, potassium, phosphorus, and 25% protein.",
    Colour: "Green",
    Price: "$16 / 2oz pack",
  },
  {
    id: 20,
    Image: "wheatmix.png",
    Microgreen: "Wheatgrass",
    Flavour: "Sugary sweet with mild and bittery aftertaste",
    Varieties: "There are no varieties for this product.",
    Nutrients:
      "Vitamins A, B6, C, E, & K, Potassium, Thiamin, Riboflavin, Niacin, Pentothenic Acid, Iron, Zinc, Copper, Manganese and Selenium.",
    Colour: "Green",
    Price: "$12 / 1.5oz pack",
  },
];
