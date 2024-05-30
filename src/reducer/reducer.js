import {
    ADD_TO_ORDER,
    DELETE_ORDER,
    SET_CURRENT_ITEMS,
    TOGGLE_SHOW_FULL_ITEM,
    SET_FULL_ITEM,
    CHOOSE_CATEGORY, 
    TOGGLE_CART
}  from '../actions/actions';


const initialState = {
    items: [
        {
            id: 1,
            title: "Apple iPhone 14",
            img: 'Iphone14Pro.webp',
            desc: "Смартфон с 6.1-дюймовым OLED-дисплеем, процессором A15 Bionic и тройной камерой 12 МП.",
            category: "Смартфони",
            price: "89999"
        },
        {
        id: 2,
        title: "Samsung Galaxy S21",
        img: "Samsung Galaxy S21.avif",
        desc: "Смартфон с 6.2-дюймовым AMOLED-дисплеем, процессором Exynos 2100 и тройной камерой 64 МП.",
        category: "Смартфони",
        price: "79999"
        },
        {
        id: 3,
        title: "Sony WH-1000XM4",
        img: "Sony WH-1000XM4.png",
        desc: "Беспроводные наушники с активным шумоподавлением, поддержкой LDAC и автономностью до 30 часов.",
        category: "Навушники",
        price: "29999"
        },
        {
        id: 4,
        title: "Apple MacBook Air M1",
        img: "Apple MacBook Air M1.webp",
        desc: "Ноутбук с 13.3-дюймовым Retina-дисплеем, процессором Apple M1 и автономностью до 18 часов.",
        category: "Ноутбуки",
        price: "99999"
        },
        {
        id: 5,
        title: "Samsung Galaxy Tab S7",
        img: "Samsung Galaxy Tab S7.png",
        desc: "Планшет с 11-дюймовым TFT-дисплеем, процессором Snapdragon 865+ и поддержкой S Pen.",
        category: "Планшети",
        price: "59999"
        },
        {
        id: 6,
        title: "Samsung Galaxy S23",
        img: "Samsung Galaxy S23.png",
        desc: "Смартфон с 6.6-дюймовым AMOLED-дисплеем, процессором Exynos 3100 и тройной камерой 94 МП.",
        category: "Смартфони",
        price: "93999"
        },
        {
            id: 7,
            title: "Apple iPhone 15 Pro",
            img: "Apple iPhone 15 Pro.png",
            desc: "Смартфон с 6.1-дюймовым OLED-дисплеем, процессором A19 Bionic и тройной камерой 24 МП.",
            category: "Смартфони",
            price: "129999"
        },
        {
            id: 8,
            title: "Samsung Galaxy Tab S8",
            img: "Samsung Galaxy Tab S8.avif",
            desc: "Планшет оснащен 11-дюймовым TFT-экраном с разрешением 2560x1600 пикселей",
            category: "Планшети",
            price: "84399"
        },
        {
        id: 9,
        title: "Apple MacBook Air M3",
        img: "Apple MacBook Air M3.webp",
        desc: "Ноутбук с 13.3-дюймовым Retina-дисплеем, процессором Apple M1 и автономностью до 18 часов.",
        category: "Ноутбуки",
        price: "155500"
        },

    ],
    orders: [],
    currentItems: [],
    showFullItem: false,
    fullItem: null,
    isCartOpen: false,
    selectedCategory: 'All'
}

initialState.currentItems = [...initialState.items];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(item => item.id !== action.payload)
            };
        case SET_CURRENT_ITEMS:
            return {
                ...state, 
                currentItems: action.payload
            };
        case TOGGLE_SHOW_FULL_ITEM: 
            return {
                ...state,
                showFullItem: !state.showFullItem
            };  
        case SET_FULL_ITEM: 
            return {
                ...state, 
                fullItem: action.payload
            };
        case CHOOSE_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
                currentItems: action.payload === 'All' ? state.items : state.items.filter(item => item.category === action.payload)
            };
        case TOGGLE_CART:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            };
        default: 
            return state;
    }
};

export default reducer