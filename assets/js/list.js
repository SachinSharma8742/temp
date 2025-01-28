const itemCategories = {
    // Fruits
    'apple': { color: '#ffcccb', emoji: '🍎', type: 'Fruits' },
    'banana': { color: '#fff700', emoji: '🍌', type: 'Fruits' },
    'orange': { color: '#ffa500', emoji: '🍊', type: 'Fruits' },
    'grape': { color: '#6f2da8', emoji: '🍇', type: 'Fruits' },
    'strawberry': { color: '#ff99ac', emoji: '🍓', type: 'Fruits' },
    'mango': { color: '#ffd700', emoji: '🥭', type: 'Fruits' },
    'watermelon': { color: '#ff69b4', emoji: '🍉', type: 'Fruits' },
    'pineapple': { color: '#ffff00', emoji: '🍍', type: 'Fruits' },
    'guava': { color: '#90ee90', emoji: '🍐', type: 'Fruits' },
    'papaya': { color: '#ffb3b3', emoji: '🍈', type: 'Fruits' },
    'lichi': { color: '#ffcccb', emoji: '🔴', type: 'Fruits' },
    'grapes': { color: '#6f2da8', emoji: '🍇', type: 'Fruits' },
    'avocado': { color: '#98fb98', emoji: '🥑', type: 'Fruits' },
    'blueberry': { color: '#8a2be2', emoji: '🫐', type: 'Fruits' },
    'peach': { color: '#ffdab9', emoji: '🍑', type: 'Fruits' },

    // Vegetables
    'carrot': { color: '#ffa07a', emoji: '🥕', type: 'Vegetables' },
    'broccoli': { color: '#90ee90', emoji: '🥦', type: 'Vegetables' },
    'tomato': { color: '#ff6347', emoji: '🍅', type: 'Vegetables' },
    'potato': { color: '#deb887', emoji: '🥔', type: 'Vegetables' },
    'onion': { color: '#f5deb3', emoji: '🧅', type: 'Vegetables' },
    'cauliflower': { color: '#ffff00', emoji: '🥦', type: 'Vegetables' },
    'spinach': { color: '#008000', emoji: '🥬', type: 'Vegetables' },
    'ladyfinger': { color: '#7cfc00', emoji: '🍆', type: 'Vegetables' },
    'ginger': { color: '#ffd700', emoji: '生姜', type: 'Vegetables' },
    'garlic': { color: '#ffff00', emoji: '🧄', type: 'Vegetables' },
    'brinjal': { color: '#7cfc00', emoji: '🍆', type: 'Vegetables' },
    'okra': { color: '#7cfc00', emoji: '🟢', type: 'Vegetables' },
    'zucchini': { color: '#32cd32', emoji: '🥒', type: 'Vegetables' },
    'beetroot': { color: '#8b0000', emoji: '🔴', type: 'Vegetables' },
    'peas': { color: '#90ee90', emoji: '🟢', type: 'Vegetables' },

    // Dairy
    'milk': { color: '#f0f8ff', emoji: '🥛', type: 'Dairy' },
    'cheese': { color: '#ffd700', emoji: '🧀', type: 'Dairy' },
    'yogurt': { color: '#fff5ee', emoji: '🥛', type: 'Dairy' },
    'butter': { color: '#fffacd', emoji: '🧈', type: 'Dairy' },
    'ghee': { color: '#ffd700', emoji: '🟡', type: 'Dairy' },
    'paneer': { color: '#fff8dc', emoji: '🧀', type: 'Dairy' },
    'curd': { color: '#fff5ee', emoji: '🍶', type: 'Dairy' },
    'ice cream': { color: '#f5f5dc', emoji: '🍦', type: 'Dairy' },
    'cream': { color: '#fffaf0', emoji: '🥛', type: 'Dairy' },

    // Meat & Proteins
    'chicken': { color: '#ffe4c4', emoji: '🍗', type: 'Meat & Proteins' },
    'beef': { color: '#cd853f', emoji: '🥩', type: 'Meat & Proteins' },
    'fish': { color: '#b0e0e6', emoji: '🐟', type: 'Meat & Proteins' },
    'egg': { color: '#fff5ee', emoji: '🥚', type: 'Meat & Proteins' },
    'mutton': { color: '#cd853f', emoji: '🐑', type: 'Meat & Proteins' },
    'lentils': { color: '#90ee90', emoji: '🟢', type: 'Meat & Proteins' },
    'tofu': { color: '#fff8dc', emoji: '◻️', type: 'Meat & Proteins' },
    'pork': { color: '#ffc0cb', emoji: '🐖', type: 'Meat & Proteins' },
    'shrimp': { color: '#ff6347', emoji: '🍤', type: 'Meat & Proteins' },

    // Grains
    'bread': { color: '#deb887', emoji: '🍞', type: 'Grains' },
    'rice': { color: '#f5f5dc', emoji: '🍚', type: 'Grains' },
    'pasta': { color: '#ffe4b5', emoji: '🍝', type: 'Grains' },
    'wheat': { color: '#f5deb3', emoji: '🌾', type: 'Grains' },
    'flour': { color: '#f5f5dc', emoji: '⚪', type: 'Grains' },
    'maize': { color: '#ffd700', emoji: '🟡', type: 'Grains' },
    'barley': { color: '#deb887', emoji: '🌾', type: 'Grains' },
    'quinoa': { color: '#f5deb3', emoji: '⚪', type: 'Grains' },

    // Beverages
    'water': { color: '#e0ffff', emoji: '💧', type: 'Beverages' },
    'juice': { color: '#ffa07a', emoji: '🧃', type: 'Beverages' },
    'coffee': { color: '#8b4513', emoji: '☕', type: 'Beverages' },
    'tea': { color: '#8b4513', emoji: '🍵', type: 'Beverages' },
    'lassi': { color: '#fff5ee', emoji: '🥛', type: 'Beverages' },
    'chai': { color: '#8b4513', emoji: '☕', type: 'Beverages' },
    'sherbet': { color: '#e0ffff', emoji: '🔵', type: 'Beverages' },
    'smoothie': { color: '#ff69b4', emoji: '🥤', type: 'Beverages' },
    'soda': { color: '#e0ffff', emoji: '🥤', type: 'Beverages' },

    // Snacks
    'chips': { color: '#f0e68c', emoji: '🥨', type: 'Snacks' },
    'cookie': { color: '#d2691e', emoji: '🍪', type: 'Snacks' },
    'candy': { color: '#ff69b4', emoji: '🍬', type: 'Snacks' },
    'poha': { color: '#f5f5dc', emoji: '⚪', type: 'Snacks' },
    'samosa': { color: '#ffe4b5', emoji: '🥟', type: 'Snacks' },
    'pakora': { color: '#ffe4b5', emoji: '🟢', type: 'Snacks' },
    'gulab jamun': { color: '#ff69b4', emoji: '⚪', type: 'Snacks' },
    'ladoo': { color: '#ffd700', emoji: '🟡', type: 'Snacks' },
    'jalebi': { color: '#ffd700', emoji: '🟡', type: 'Snacks' },
    'bhaji': { color: '#7cfc00', emoji: '🟢', type: 'Snacks' },
    'popcorn': { color: '#fffacd', emoji: '🍿', type: 'Snacks' },
    'cake': { color: '#ffe4e1', emoji: '🍰', type: 'Snacks' },

    // Spices
    'turmeric': { color: '#ffd700', emoji: '🟡', type: 'Spices' },
    'chilli': { color: '#ff0000', emoji: '🌶️', type: 'Spices' },
    'coriander': { color: '#008000', emoji: '🟢', type: 'Spices' },
    'cumin': { color: '#8b4513', emoji: '⚫', type: 'Spices' },
    'garam masala': { color: '#8b4513', emoji: '⚫', type: 'Spices' },
    'ginger-garlic paste': { color: '#ffd700', emoji: '🟡', type: 'Spices' },
    'black pepper': { color: '#000000', emoji: '⚫', type: 'Spices' },
    'cardamom': { color: '#8fbc8f', emoji: '🟢', type: 'Spices' },

    // Dry Fruits
    'almonds': { color: '#f5deb3', emoji: '⚪', type: 'Dry Fruits' },
    'cashews': { color: '#fff8dc', emoji: '⚪', type: 'Dry Fruits' },
    'raisins': { color: '#8b4513', emoji: '⚫', type: 'Dry Fruits' },
    'walnuts': { color: '#d2691e', emoji: '⚪', type: 'Dry Fruits' },
    'pistachios': { color: '#98fb98', emoji: '⚪', type: 'Dry Fruits' }
};
