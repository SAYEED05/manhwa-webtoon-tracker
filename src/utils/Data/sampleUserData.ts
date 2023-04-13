export const sampleUserData = {
  name: "john doe",
  email: "john@test.com",
  user_preferences: {
    preferred_theme: "dark",
  },
  bookmarked: [
    {
      id: "01",
      title: "Solo Leveling",
      cover_image:
        "https://mangatx.com/wp-content/uploads/2019/10/c28c05c7e232803ac538689a4dc0785a0b5a51der1-921-1244v2_hq-1-193x278.jpg",
      alternate_title: [" I alone level up"],
      rating_details: {
        general_rating: {
          rating: "4.8",
          votes: "13000",
        },
        our_rating: {
          rating: "4.5",
          votes: "1000",
        },
        your_rating: null,
      },
      is_faviourate: true,
      chapters: [
        {
          chapter_id: "sl_01",
          chapter_title: "Chapter 01",
          marked_as_red: true,
          read_date: "02/01/2021",
        },
        {
          chapter_id: "sl_02",
          chapter_title: "Chapter 02",
          marked_as_red: true,
          read_date: "02/01/2021",
        },
        {
          chapter_id: "sl_03",
          chapter_title: "Chapter 03",
          marked_as_red: true,
          read_date: "02/01/2021",
        },
        {
          chapter_id: "sl_04",
          chapter_title: "Chapter 04",
          marked_as_red: false,
          read_date: null,
        },
        {
          chapter_id: "sl_03",
          chapter_title: "Chapter 03",
          marked_as_red: false,
          read_date: null,
        },
      ],
    },
  ],
};
