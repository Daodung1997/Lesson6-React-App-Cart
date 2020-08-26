// import * as types from '../constants/ActionTypes';

var initialState = [{
        id: 1,
        name: 'Iphone XS MAX',
        image: 'https://cdn.shopify.com/s/files/1/0808/0067/products/title_iphone_xi_pro_max_liquid_crystal_cr_03_500x@2x.progressive.jpg?v=1568229329',
        description: 'Sẩn phẩm do Apple sản suất',
        price: 500,
        rating: 4,
        inventory: 10,
    },
    {
        id: 2,
        name: 'Sam Sung Node 10 Pro',
        image: 'https://cdn.shopify.com/s/files/1/0808/0067/products/title_galaxy_note10_plus_liquid_crystal_aura_glow_03_1200x1200.jpg?v=1566932334',
        description: 'Sẩn phẩm do Sam Sung sản suất',
        price: 700,
        rating: 5,
        inventory: 20,
    },
    {
        id: 3,
        name: 'Redmi Note 9 Pro',
        image: 'https://www.gizmochina.com/wp-content/uploads/2020/03/Redmi-Note-9-Pro-concept-render.jpg',
        description: 'Sẩn phẩm do Xiaomi sản suất',
        price: 300,
        rating: 3,
        inventory: 10,
    },
    {
        id: 4,
        name: 'Iphone XS 11 Pro Max',
        image: 'https://tse4.mm.bing.net/th?id=OIP.5YJeyDl4nsDbRAcLNlHX5wHaHa&pid=Api&P=0&w=300&h=300',
        description: 'Sẩn phẩm do Apple sản suất',
        price: 900,
        rating: 5,
        inventory: 10,
    },
    {
        id: 5,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.movertix.com/media/catalog/product/cache/image/600x/a/p/apple-iphone-8-plus-64-gb-plata-IPH8PLUS64GBS.jpg',
        description: 'Sẩn phẩm do Apple sản suất',
        price: 600,
        rating: 1,
        inventory: 20,
    },
]

var products = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}
export default products;