

const initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836628988322696_ip7-plus-vang-1.png',
        description: 'Sản phẩm được apple sản xuất',
        price: 500,
        inventory: 10,
        rateting: 4
    },

    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'https://cdn1.vienthonga.vn/image/2017/12/2/galaxy-s7-edge-2.jpg',
        description: 'Sản phẩm được samsung sản xuất',
        price: 400,
        inventory: 30,
        rateting: 3
    },

    {
        id: 3,
        name: 'Oppo F1S',
        image: 'https://i0.wp.com/gizmologi.id/wp-content/uploads/2017/03/oppo-f1s-600x600.jpg',
        description: 'Sản phẩm được china sản xuất',
        price: 450,
        inventory: 15,
        rateting: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state]
    }
}

export default products;