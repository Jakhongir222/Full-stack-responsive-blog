ALTER TABLE article
    ALTER COLUMN article_text TYPE character varying(5000);


INSERT INTO article (article_id, article_text, article_title) VALUES
('1', 'Interesting facts about UzbekistanLocated in the heart of the Central Asia, the Republic of Uzbekistan is famous for its numerous architectural monuments, incredible natural landscapes, magnificent palaces, and ruins of fortresses of past civilizations, outstanding cultural events, gastronomic delights and famous craft workshops. From the first visit, our country evokes extraordinary feelings that prompt us to come here repeatedly.The Republic of Uzbekistan includes 12 regions and the autonomous Republic of Karakalpakstan.Each corner of Uzbekistan attracts with its features. In Tashkent, you can take a walk in the most beautiful metro in the world or see the most ancient manuscript – the Koran of Usman', 'Uzbekistan'),

('2', 'Sweden has a number of World Heritage Sites, which are popular as tourist destinations. These include: The agricultural landscape of the island of Öland, visited for its geological and geographical features, Birka and Hovgården on the islands Björkö and Adelsö in Mälaren near Stockholm, The church village of Gammelstad, Luleå, in northern Sweden ,Drottningholm Palace, Theatre, and the royal domain, Engelsberg Ironworks and Laponian area. Due to Sweden''s northern location, the summer sun sets for only short periods of time (not at all north of the Arctic Circle). This phenomenon allows outdoor activities later in the evening than usual.
Sweden has a large number of lakes and forests; the former are popular for fishing and canoeing. There are several large lakes, including lakes Vättern and Vänern. .
', 'Sweden'),

('3', 'Japan attracted 31.88 million international tourists in 2019. Japan has 21 World Heritage Sites, including Himeji Castle, Historic Monuments of Ancient Kyoto and Nara. Popular foreign attractions include Tokyo and Hiroshima, Mount Fuji, ski resorts such as Niseko in Hokkaido, Okinawa, riding the shinkansen and taking advantage of Japan''s hotel and hotspring network.
The 2017 Travel and Tourism Competitiveness Report ranked Japan 4th out of 141 countries overall, which was the highest in Asia. Japan gained relatively high scores in almost all of the featured aspects, such as health and hygiene, safety and security, cultural resources and business travel.
', 'Japan')
