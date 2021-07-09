const apartments = [
    {
        id: 1,
        img: { uri: "https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png" },
        title: "The GalaxyHome",
        type: "Căn Hộ",
        area: "30m2",
        people: "5 Người",
        bedroom: "2 Phòng Ngủ",
        price: "400.000",
        priceInt: 400000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 2,
        img: { uri: "https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg" },
        title: "HaNoi Home 3",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "350.000",
        priceInt: 350000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 3,
        img: { uri: "https://cdn.luxstay.com/users/381488/BBYXdXYezsh8ebtEMuR-Gb7K.jpg" },
        title: "Joi Homestay",
        type: "Studio",
        area: "20m2",
        people: "4 Người",
        bedroom: "2 Phòng Ngủ",
        price: "450.000",
        priceInt: 450000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 4,
        img: { uri: "https://cdn.luxstay.com/users/398916/HYxfB2sJhfzBcAaClc9cZLCt.jpg" },
        title: "Best Studio Phan Kế Bình",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "480.000",
        priceInt: 480000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 5,
        img: { uri: "https://cdn.luxstay.com/users/419998/xNdGXrwocu0jC0Xq_WaTAl6x.jpg" },
        title: "Neko Tây Hồ",
        type: "Căn Hộ",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "550.000",
        priceInt: 550000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 6,
        img: { uri: "https://cdn.luxstay.com/users/47608/X2Swqa-wSRPhevvzwSevj1aF.jpg" },
        title: "Korhan Apartment 1",
        type: "Khách sạn",
        area: "25m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "460.000",
        priceInt: 460000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 7,
        img: { uri: "https://cdn.luxstay.com/users/407757/BXSWxc8JJfPItWkkKpNpwqMf.jpg" },
        title: "Lii's Homestay",
        type: "Homestay",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "1.200.000",
        priceInt: 1200000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 8,
        img: { uri: "https://cdn.luxstay.com/users/37752/AQ6iIGB9J_kOuNEpqQuGV6Uk.jpg" },
        title: "Paradise Home",
        type: "Căn Hộ",
        area: "35m2",
        people: "5 Người",
        bedroom: "2 Phòng Ngủ",
        price: "1.000.000",
        priceInt: 1000000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 9,
        img: { uri: "https://cdn.luxstay.com/rooms/31040/large/room_31040_347_1566980827.jpg" },
        title: "Luxury 1BR",
        type: "Chung Cư",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "1.100.000",
        priceInt: 1100000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 10,
        img: { uri: "https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png" },
        title: "The GalaxyHome",
        type: "Căn Hộ",
        area: "30m2",
        people: "5 Người",
        bedroom: "2 Phòng Ngủ",
        price: "400.000",
        priceInt: 400000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 11,
        img: { uri: "https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg" },
        title: "HaNoi Home 3",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "350.000",
        priceInt: 350000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 12,
        img: { uri: "https://cdn.luxstay.com/users/381488/BBYXdXYezsh8ebtEMuR-Gb7K.jpg" },
        title: "Joi Homestay",
        type: "Studio",
        area: "20m2",
        people: "4 Người",
        bedroom: "2 Phòng Ngủ",
        price: "450.000",
        priceInt: 450000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 13,
        img: { uri: "https://cdn.luxstay.com/users/398916/HYxfB2sJhfzBcAaClc9cZLCt.jpg" },
        title: "Best Studio Phan Kế Bình",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "480.000",
        priceInt: 480000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 14,
        img: { uri: "https://cdn.luxstay.com/users/419998/xNdGXrwocu0jC0Xq_WaTAl6x.jpg" },
        title: "Neko Tây Hồ",
        type: "Căn Hộ",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "550.000",
        priceInt: 550000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 15,
        img: { uri: "https://cdn.luxstay.com/users/47608/X2Swqa-wSRPhevvzwSevj1aF.jpg" },
        title: "Korhan Apartment 1",
        type: "Khách sạn",
        area: "25m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "460.000",
        priceInt: 460000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 16,
        img: { uri: "https://cdn.luxstay.com/users/407757/BXSWxc8JJfPItWkkKpNpwqMf.jpg" },
        title: "Lii's Homestay",
        type: "Homestay",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "1.200.000",
        priceInt: 1200000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 17,
        img: { uri: "https://cdn.luxstay.com/users/37752/AQ6iIGB9J_kOuNEpqQuGV6Uk.jpg" },
        title: "Paradise Home",
        type: "Căn Hộ",
        area: "35m2",
        people: "5 Người",
        favourite: true,
        bedroom: "2 Phòng Ngủ",
        price: "1.000.000",
        priceInt: 1000000,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 18,
        img: { uri: "https://cdn.luxstay.com/rooms/31040/large/room_31040_347_1566980827.jpg" },
        title: "Luxury 1BR",
        type: "Chung Cư",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "1.100.000",
        priceInt: 1100000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 19,
        img: { uri: "https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png" },
        title: "The GalaxyHome",
        type: "Căn Hộ",
        area: "30m2",
        people: "5 Người",
        bedroom: "2 Phòng Ngủ",
        price: "400.000",
        priceInt: 400000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 20,
        img: { uri: "https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg" },
        title: "HaNoi Home 3",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "350.000",
        priceInt: 350000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    },
    {
        id: 21,
        img: { uri: "https://cdn.luxstay.com/users/381488/BBYXdXYezsh8ebtEMuR-Gb7K.jpg" },
        title: "Joi Homestay",
        type: "Studio",
        area: "20m2",
        people: "4 Người",
        bedroom: "2 Phòng Ngủ",
        price: "450.000",
        priceInt: 450000,
        favourite: true,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 22,
        img: { uri: "https://cdn.luxstay.com/users/398916/HYxfB2sJhfzBcAaClc9cZLCt.jpg" },
        title: "Best Studio Phan Kế Bình",
        type: "Căn Hộ",
        area: "20m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "480.000",
        priceInt: 480000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 23,
        img: { uri: "https://cdn.luxstay.com/users/419998/xNdGXrwocu0jC0Xq_WaTAl6x.jpg" },
        title: "Neko Tây Hồ",
        type: "Căn Hộ",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "550.000",
        priceInt: 550000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 24,
        img: { uri: "https://cdn.luxstay.com/users/47608/X2Swqa-wSRPhevvzwSevj1aF.jpg" },
        title: "Korhan Apartment 1",
        type: "Khách sạn",
        area: "25m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "460.000",
        priceInt: 460000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 25,
        img: { uri: "https://cdn.luxstay.com/users/407757/BXSWxc8JJfPItWkkKpNpwqMf.jpg" },
        title: "Lii's Homestay",
        type: "Homestay",
        area: "35m2",
        people: "2 Người",
        bedroom: "1 Phòng Ngủ",
        price: "1.200.000",
        priceInt: 1200000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'

    },
    {
        id: 26,
        img: { uri: "https://cdn.luxstay.com/users/37752/AQ6iIGB9J_kOuNEpqQuGV6Uk.jpg" },
        title: "Paradise Home",
        type: "Căn Hộ",
        area: "35m2",
        people: "5 Người",
        bedroom: "2 Phòng Ngủ",
        price: "1.000.000",
        priceInt: 1000000,
        favourite: false,
        description: 'Nếu bạn đang tìm một Homestay hiện đại, trong lành với đầy đủ tiện nghi tiêu chuẩn thì Villa Viet Home là lựa chọn hoàn hảo. Mở cửa sổ mỗi buổi sáng, sương sớm lành lạnh hòa quyện với hương thơm cây cối sẽ tràn vào cả căn nhà. Đó sẽ là trải nghiệm tuyệt vời,1 làn gió tươi mới cho cuộc sống vốn đã rất bận rộn và căng thẳng.'
    }
];

export default apartments;
