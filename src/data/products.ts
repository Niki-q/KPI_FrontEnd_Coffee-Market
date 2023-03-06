import {CMBProduct, CProductLine, TabProduct} from "../models";

export const coffee_products: CProductLine[] = [
    {
        prod1:    {
            id: 'p1',
            title: 'REVO Morning',
            price: 99.000,
            description: 'đắng, hậu ngọt, hương hoa',
            image: 'IMG/Coffee/image1.png'
        },
        prod2:    {
            id: 'p2',
            title: 'REVO Origin',
            price: 139.000,
            description: 'hậu ngọt, ít đắng, vị chua dâu',
            image: 'IMG/Coffee/image2.png'
        }
    },
    {
        prod1:    {
            id: 'p3',
            title: 'REVO Everyday',
            price: 85.000,
            description: 'cân bằng, hậu đắng, vị chocolate',
            image: 'IMG/Coffee/image3.png'
        },
        prod2:    {
            id: 'p4',
            title: 'REVO Đậm Đà',
            price: 75.000,
            description: 'đậm đà, đắng, truyền thống',
            image: 'IMG/Coffee/image4.png'
        },
    },
    {
        prod1:    {
            id: 'p5',
            title: 'REVO Morning',
            price: 99.000,
            description: 'đắng, hậu ngọt, hương hoa',
            image: 'IMG/Coffee/image1.png'
        },
        prod2:    {
            id: 'p6',
            title: 'REVO Origin',
            price: 139.000,
            description: 'hậu ngọt, ít đắng, vị chua dâu',
            image: 'IMG/Coffee/image2.png'
        }
    },
    {
        prod1:    {
            id: 'p7',
            title: 'REVO Everyday',
            price: 85.000,
            description: 'cân bằng, hậu đắng, vị chocolate',
            image: 'IMG/Coffee/image3.png'
        },
        prod2:    {
            id: 'p8',
            title: 'REVO Đậm Đà',
            price: 75.000,
            description: 'đậm đà, đắng, truyền thống',
            image: 'IMG/Coffee/image4.png'
        },
    },
]

export const combo_products:CMBProduct[] = [
    {
        id:'c1',
        title: 'Combo Revo Đậm Đà',
        description:'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
        image:'IMG/Combo/image1.png',
        price:147.000,
        old_price:155.000
    },
    {
        id:'c2',
        title: 'Combo Revo Everyday',
        description:'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
        image:'IMG/Combo/image2.png',
        price:156.000,
        old_price:165.000
    },
    {
        id:'c3',
        title: 'Combo Revo Honey',
        description:'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
        image:'IMG/Combo/image3.png',
        price:260.000,
        old_price:275.000
    },
    {
        id:'c4',
        title: 'Combo Revo Đậm Đà',
        description:'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
        image:'IMG/Combo/image1.png',
        price:147.000,
        old_price:155.000
    },
    {
        id:'c5',
        title: 'Combo Revo Everyday',
        description:'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...',
        image:'IMG/Combo/image2.png',
        price:156.000,
        old_price:165.000
    },
    {
        id:'c6',
        title: 'Combo Revo Honey',
        description:'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...',
        image:'IMG/Combo/image3.png',
        price:260.000,
        old_price:275.000
    }
]

export const tab_products: TabProduct[] = [
    {
        id:1,
        title: 'Giftset "Cà phê phin Việt Nam"',
        description:'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn. ',
        image:'IMG/Giftset/1.png',
        price:285.000,

        svg:{
            first:{
                path:'./svg/1_1.svg',
                text: {
                    description:'Loại hạt',
                    sub_title:'Fine Robusta Blend'
                }
            },
            second:{
                path:'./svg/1_2.svg',
                text:{
                    description:'Độ cao',
                    sub_title:'700 - 800m'
                }
            }
        }
    },
    {
        id:2,
        title: 'Giftset "Cà phê phin Việt Nam"',
        description:'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn. ',
        image:'IMG/Giftset/2.jpg',
        price:285.000,

        svg:{
            first:{
                path:'./svg/1_1.svg',
                text: {
                    description:'Loại hạt',
                    sub_title:'Fine Robusta Blend'
                }
            },
            second:{
                path:'./svg/1_2.svg',
                text:{
                    description:'Độ cao',
                    sub_title:'700 - 800m'
                }
            }
        }
    },
    {
        id:3,
        title: 'Giftset "Cà phê phin Việt Nam"',
        description:'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn. ',
        image:'IMG/Giftset/3.jpg',
        price:285.000,

        svg:{
            first:{
                path:'./svg/1_1.svg',
                text: {
                    description:'Loại hạt',
                    sub_title:'Fine Robusta Blend'
                }
            },
            second:{
                path:'./svg/1_2.svg',
                text:{
                    description:'Độ cao',
                    sub_title:'700 - 800m'
                }
            }
        }
    }
]