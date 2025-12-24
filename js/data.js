var recipes = [
    {
        id: 1,
        name: "Paneer Bhurji",
        category: "Lunch",
        time: "20 min",
        ingredients: [
            "200g Paneer (crumbled)",
            "1 Onion (chopped)",
            "2 Tomatoes (chopped)",
            "1 Green Chili (chopped)",
            "1/2 tsp Turmeric Powder",
            "1 tsp Red Chili Powder",
            "Salt to taste",
            "2 tbsp Oil",
            "Fresh Coriander for garnish"
        ],
        steps: [
            "Heat oil in a pan over medium heat.",
            "Add chopped onions and saute until golden brown.",
            "Add green chili and tomatoes. Cook until tomatoes are soft.",
            "Add turmeric powder, red chili powder, and salt. Mix well.",
            "Add crumbled paneer and mix gently.",
            "Cook for 5 minutes, stirring occasionally.",
            "Garnish with fresh coriander and serve hot with roti."
        ]
    },

    {
        id: 2,
        name: "Masala Omelette",
        category: "Breakfast",
        time: "10 min",
        ingredients: [
            "2 Eggs",
            "1 small Onion (finely chopped)",
            "1 Green Chili (chopped)",
            "1/4 tsp Turmeric Powder",
            "Salt to taste",
            "1 tbsp Oil",
            "Fresh Coriander (chopped)"
        ],
        steps: [
            "Crack eggs into a bowl and beat well.",
            "Add onion, green chili, turmeric, salt, and coriander. Mix.",
            "Heat oil in a pan over medium heat.",
            "Pour the egg mixture into the pan.",
            "Cook until the bottom is set, then flip.",
            "Cook for another minute and serve hot."
        ]
    },

    {
        id: 3,
        name: "Vegetable Pulao",
        category: "Dinner",
        time: "35 min",
        ingredients: [
            "1 cup Basmati Rice",
            "1 cup Mixed Vegetables (carrot, peas, beans)",
            "1 Onion (sliced)",
            "2 cups Water",
            "1 Bay Leaf",
            "2-3 Cloves",
            "1/2 tsp Cumin Seeds",
            "Salt to taste",
            "2 tbsp Ghee"
        ],
        steps: [
            "Wash and soak rice for 20 minutes. Drain.",
            "Heat ghee in a pot. Add bay leaf, cloves, and cumin seeds.",
            "Add sliced onions and fry until light brown.",
            "Add mixed vegetables and saute for 2 minutes.",
            "Add rice and salt. Stir gently.",
            "Add water and bring to a boil.",
            "Cover and cook on low heat for 15 minutes.",
            "Fluff with a fork and serve hot."
        ]
    },

    {
        id: 4,
        name: "Samosa",
        category: "Snacks",
        time: "45 min",
        ingredients: [
            "2 cups All-Purpose Flour",
            "3 Potatoes (boiled and mashed)",
            "1/2 cup Green Peas",
            "1 tsp Cumin Seeds",
            "1 tsp Garam Masala",
            "1/2 tsp Red Chili Powder",
            "Salt to taste",
            "Oil for deep frying"
        ],
        steps: [
            "Make dough with flour, salt, and water. Rest for 20 minutes.",
            "Heat oil in a pan. Add cumin seeds.",
            "Add mashed potatoes, peas, and all spices. Mix well. Let it cool.",
            "Divide dough into balls. Roll each into an oval shape.",
            "Cut in half. Form a cone and fill with potato mixture.",
            "Seal the edges with water.",
            "Deep fry in hot oil until golden brown.",
            "Serve hot with green chutney."
        ]
    },

    {
        id: 5,
        name: "Gulab Jamun",
        category: "Dessert",
        time: "40 min",
        ingredients: [
            "1 cup Milk Powder",
            "1/4 cup All-Purpose Flour",
            "1/4 tsp Baking Soda",
            "2 tbsp Ghee",
            "Milk as needed",
            "1.5 cups Sugar",
            "1.5 cups Water",
            "2-3 Cardamom Pods",
            "Oil for frying"
        ],
        steps: [
            "Make sugar syrup by boiling sugar, water, and cardamom. Keep warm.",
            "Mix milk powder, flour, and baking soda in a bowl.",
            "Add ghee and mix. Add milk gradually to form soft dough.",
            "Make small smooth balls without cracks.",
            "Heat oil on low-medium heat.",
            "Fry balls slowly until deep brown, stirring gently.",
            "Soak fried balls in warm sugar syrup for 30 minutes.",
            "Serve warm or at room temperature."
        ]
    },

    {
        id: 6,
        name: "Aloo Paratha",
        category: "Breakfast",
        time: "30 min",
        ingredients: [
            "2 cups Whole Wheat Flour",
            "3 Potatoes (boiled and mashed)",
            "1 Green Chili (chopped)",
            "1/2 tsp Cumin Powder",
            "1/2 tsp Red Chili Powder",
            "Fresh Coriander (chopped)",
            "Salt to taste",
            "Ghee for cooking"
        ],
        steps: [
            "Make soft dough with flour, salt, and water. Rest for 15 minutes.",
            "Mix mashed potatoes with green chili, spices, coriander, and salt.",
            "Divide dough into balls. Roll one ball into a small circle.",
            "Place potato filling in center. Seal edges and flatten.",
            "Roll gently into a round paratha.",
            "Cook on hot tawa with ghee until golden on both sides.",
            "Serve hot with yogurt or pickle."
        ]
    },

    {
        id: 7,
        name: "Dal Tadka",
        category: "Dinner",
        time: "30 min",
        ingredients: [
            "1 cup Yellow Lentils (Toor Dal)",
            "3 cups Water",
            "1/2 tsp Turmeric Powder",
            "1 Onion (chopped)",
            "2 Tomatoes (chopped)",
            "3 Garlic Cloves (chopped)",
            "1 tsp Cumin Seeds",
            "2 Dry Red Chilies",
            "2 tbsp Ghee",
            "Salt to taste",
            "Fresh Coriander for garnish"
        ],
        steps: [
            "Wash dal and cook with water, turmeric, and salt until soft.",
            "Mash the dal lightly with a spoon.",
            "Heat ghee in a pan. Add cumin seeds and dry red chilies.",
            "Add garlic and fry until golden.",
            "Add onions and cook until brown.",
            "Add tomatoes and cook until soft.",
            "Pour this tadka over the cooked dal. Mix well.",
            "Garnish with coriander and serve with rice."
        ]
    },

    {
        id: 8,
        name: "Chana Chaat",
        category: "Snacks",
        time: "15 min",
        ingredients: [
            "1 can Chickpeas (drained)",
            "1 Onion (finely chopped)",
            "1 Tomato (chopped)",
            "1 Cucumber (chopped)",
            "1 Green Chili (chopped)",
            "1/2 tsp Chaat Masala",
            "1/2 tsp Cumin Powder",
            "Juice of 1 Lemon",
            "Salt to taste",
            "Fresh Coriander (chopped)"
        ],
        steps: [
            "Add chickpeas to a large bowl.",
            "Add chopped onion, tomato, cucumber, and green chili.",
            "Add chaat masala, cumin powder, and salt. Mix well.",
            "Squeeze lemon juice over the mixture.",
            "Add fresh coriander and toss everything together.",
            "Serve immediately as a healthy snack."
        ]
    },

    {
        id: 9,
        name: "Poha",
        category: "Breakfast",
        time: "15 min",
        ingredients: [
            "2 cups Flattened Rice (Poha)",
            "1 Onion (chopped)",
            "1 Potato (diced small)",
            "1/2 tsp Mustard Seeds",
            "8-10 Curry Leaves",
            "2 Green Chilies (chopped)",
            "1/2 tsp Turmeric Powder",
            "Salt to taste",
            "2 tbsp Oil",
            "Fresh Coriander and Lemon juice for garnish"
        ],
        steps: [
            "Rinse poha in water and drain. Set aside for 5 minutes.",
            "Heat oil in a pan. Add mustard seeds and let them splutter.",
            "Add curry leaves, green chilies, and diced potato.",
            "Cover and cook potato until soft.",
            "Add onions and saute until translucent.",
            "Add turmeric and salt. Mix well.",
            "Add the soaked poha and mix gently.",
            "Cook for 2-3 minutes. Garnish with coriander and lemon juice."
        ]
    },

    {
        id: 10,
        name: "Butter Chicken",
        category: "Dinner",
        time: "45 min",
        ingredients: [
            "500g Chicken (boneless, cubed)",
            "1 cup Tomato Puree",
            "1/2 cup Cream",
            "2 tbsp Butter",
            "1 Onion (chopped)",
            "1 tbsp Ginger-Garlic Paste",
            "1 tsp Red Chili Powder",
            "1 tsp Garam Masala",
            "1/2 tsp Turmeric",
            "Salt to taste",
            "Fresh Coriander for garnish"
        ],
        steps: [
            "Marinate chicken with turmeric, salt, and lemon juice for 15 minutes.",
            "Heat butter in a pan. Fry chicken until golden. Set aside.",
            "In the same pan, add onion and saute until brown.",
            "Add ginger-garlic paste and cook for 1 minute.",
            "Add tomato puree, red chili powder, and garam masala.",
            "Cook until oil separates from the masala.",
            "Add fried chicken and mix well. Cook for 10 minutes.",
            "Add cream, stir, and simmer for 5 minutes. Garnish and serve."
        ]
    },

    {
        id: 11,
        name: "Pakora",
        category: "Snacks",
        time: "25 min",
        ingredients: [
            "1 cup Gram Flour (Besan)",
            "1 Onion (sliced)",
            "1 Potato (sliced thin)",
            "1/2 cup Spinach leaves",
            "1/2 tsp Red Chili Powder",
            "1/4 tsp Turmeric",
            "1/2 tsp Ajwain (Carom Seeds)",
            "Salt to taste",
            "Water as needed",
            "Oil for deep frying"
        ],
        steps: [
            "Mix gram flour, red chili, turmeric, ajwain, and salt.",
            "Add water gradually to make a thick batter.",
            "Add sliced onion, potato, and spinach. Mix well.",
            "Heat oil in a deep pan.",
            "Drop spoonfuls of batter into hot oil.",
            "Fry until golden brown on all sides.",
            "Drain on paper towels and serve hot with chutney."
        ]
    },
    {
        id: 12,
        name: "Kheer",
        category: "Dessert",
        time: "40 min",
        ingredients: [
            "1/4 cup Rice",
            "1 liter Full Cream Milk",
            "1/2 cup Sugar",
            "10-12 Cashews (chopped)",
            "10-12 Raisins",
            "1/4 tsp Cardamom Powder",
            "Few Saffron strands (optional)"
        ],
        steps: [
            "Wash rice and soak for 20 minutes.",
            "Boil milk in a heavy bottom pan, stirring occasionally.",
            "Add soaked rice and cook on low heat for 25 minutes.",
            "Stir frequently to prevent sticking.",
            "When rice is fully cooked and milk thickens, add sugar.",
            "Add cashews, raisins, cardamom, and saffron.",
            "Cook for 5 more minutes. Serve warm or chilled."
        ]
    },
    {
        id: 13,
        name: "Chole",
        category: "Lunch",
        time: "40 min",
        ingredients: [
            "2 cups Chickpeas (soaked overnight)",
            "2 Onions (chopped)",
            "2 Tomatoes (pureed)",
            "1 tbsp Ginger-Garlic Paste",
            "2 tsp Chole Masala",
            "1 tsp Red Chili Powder",
            "1/2 tsp Turmeric",
            "Salt to taste",
            "2 tbsp Oil",
            "Fresh Coriander for garnish"
        ],
        steps: [
            "Pressure cook chickpeas with salt until soft. Drain and save water.",
            "Heat oil in a pan. Add onions and fry until golden.",
            "Add ginger-garlic paste and saute for 1 minute.",
            "Add tomato puree and cook until oil separates.",
            "Add all spices and cook for 2 minutes.",
            "Add cooked chickpeas and some reserved water.",
            "Simmer for 15 minutes. Garnish with coriander.",
            "Serve hot with bhature or rice."
        ]
    },
    {
        id: 14,
        name: "Upma",
        category: "Breakfast",
        time: "20 min",
        ingredients: [
            "1 cup Semolina (Rava)",
            "1 Onion (chopped)",
            "1 Green Chili (chopped)",
            "1/2 tsp Mustard Seeds",
            "1/2 tsp Urad Dal",
            "10 Curry Leaves",
            "2.5 cups Water",
            "Salt to taste",
            "2 tbsp Ghee",
            "Cashews for garnish"
        ],
        steps: [
            "Dry roast semolina until light golden. Set aside.",
            "Heat ghee in a pan. Add mustard seeds and urad dal.",
            "When they splutter, add curry leaves, cashews, and green chili.",
            "Add onion and saute until translucent.",
            "Add water and salt. Bring to a boil.",
            "Slowly add roasted semolina while stirring continuously.",
            "Mix well to avoid lumps. Cover and cook for 3 minutes.",
            "Fluff with a fork and serve hot."
        ]
    },
    {
        id: 15,
        name: "French Toast",
        category: "Breakfast",
        time: "15 min",
        ingredients: [
            "4 Bread slices",
            "2 Eggs",
            "1/4 cup Milk",
            "1/2 tsp Cinnamon Powder",
            "2 tbsp Sugar",
            "2 tbsp Butter",
            "Honey or Maple Syrup for serving"
        ],
        steps: [
            "Whisk eggs, milk, cinnamon, and sugar in a bowl.",
            "Heat butter in a pan over medium heat.",
            "Dip each bread slice in the egg mixture, coating both sides.",
            "Place on the pan and cook until golden brown.",
            "Flip and cook the other side.",
            "Serve warm with honey or maple syrup and fresh fruits."
        ]
    },
    {
        id: 16,
        name: "Veg Fried Rice",
        category: "Lunch",
        time: "25 min",
        ingredients: [
            "2 cups Cooked Rice (cooled)",
            "1 cup Mixed Vegetables (carrot, beans, peas, corn)",
            "2 Eggs",
            "3 tbsp Soy Sauce",
            "1 tbsp Vinegar",
            "4 cloves Garlic (minced)",
            "2 Spring Onions (chopped)",
            "Salt and Pepper to taste",
            "3 tbsp Oil"
        ],
        steps: [
            "Heat 1 tbsp oil. Scramble eggs and set aside.",
            "Heat remaining oil. Add garlic and saute until fragrant.",
            "Add mixed vegetables and stir-fry for 3 minutes.",
            "Add cooled rice and mix well.",
            "Add soy sauce, vinegar, salt, and pepper.",
            "Toss everything on high heat for 2-3 minutes.",
            "Add scrambled eggs and spring onions. Mix well.",
            "Serve hot."
        ]
    },
    {
        id: 17,
        name: "Dahi Vada",
        category: "Snacks",
        time: "35 min",
        ingredients: [
            "1 cup Urad Dal (soaked 4 hours)",
            "1 cup Yogurt (whisked)",
            "1/2 tsp Cumin Powder",
            "1/2 tsp Red Chili Powder",
            "1/4 tsp Black Salt",
            "Salt to taste",
            "Tamarind Chutney",
            "Green Chutney",
            "Oil for frying"
        ],
        steps: [
            "Grind soaked dal to a fluffy batter. Add salt.",
            "Heat oil. Drop spoonfuls of batter and fry until golden.",
            "Soak fried vadas in warm water for 15 minutes.",
            "Gently squeeze out water and place in a dish.",
            "Pour whisked yogurt over the vadas.",
            "Sprinkle cumin powder, chili powder, and black salt.",
            "Drizzle tamarind and green chutney on top.",
            "Chill for 30 minutes before serving."
        ]
    },
    {
        id: 18,
        name: "Mango Lassi",
        category: "Dessert",
        time: "5 min",
        ingredients: [
            "1 cup Mango Pulp (fresh or canned)",
            "1 cup Yogurt",
            "1/2 cup Milk",
            "3 tbsp Sugar",
            "1/4 tsp Cardamom Powder",
            "Ice cubes"
        ],
        steps: [
            "Add mango pulp, yogurt, and milk to a blender.",
            "Add sugar and cardamom powder.",
            "Blend until smooth and frothy.",
            "Add ice cubes and blend briefly.",
            "Pour into glasses and serve chilled.",
            "Garnish with a slice of mango if desired."
        ]
    },
    {
        id: 19,
        name: "Egg Curry",
        category: "Dinner",
        time: "30 min",
        ingredients: [
            "6 Eggs (hard boiled)",
            "2 Onions (sliced)",
            "2 Tomatoes (pureed)",
            "1 tbsp Ginger-Garlic Paste",
            "1 tsp Red Chili Powder",
            "1/2 tsp Turmeric",
            "1 tsp Garam Masala",
            "1/2 cup Water",
            "Salt to taste",
            "3 tbsp Oil",
            "Fresh Coriander for garnish"
        ],
        steps: [
            "Make slits on boiled eggs and set aside.",
            "Heat oil in a pan. Fry eggs lightly until golden. Remove.",
            "In the same oil, add onions and fry until brown.",
            "Add ginger-garlic paste and saute for 1 minute.",
            "Add tomato puree, turmeric, and red chili powder.",
            "Cook until oil separates from the masala.",
            "Add water and salt. Bring to a simmer.",
            "Add fried eggs and garam masala. Cook for 5 minutes.",
            "Garnish with coriander and serve with rice or roti."
        ]
    },
    {
        id: 20,
        name: "Fruit Salad",
        category: "Dessert",
        time: "10 min",
        ingredients: [
            "1 Apple (cubed)",
            "1 Banana (sliced)",
            "1 cup Grapes",
            "1 Orange (segmented)",
            "1/2 cup Pomegranate seeds",
            "2 tbsp Honey",
            "1 tbsp Lemon Juice",
            "Pinch of Black Salt"
        ],
        steps: [
            "Wash and prepare all fruits.",
            "Cut apple into cubes, slice banana, segment orange.",
            "Add all fruits to a large bowl.",
            "Drizzle honey and lemon juice over fruits.",
            "Add a pinch of black salt for flavor.",
            "Toss gently to combine.",
            "Serve immediately or chill for 10 minutes."
        ]

    }


];
