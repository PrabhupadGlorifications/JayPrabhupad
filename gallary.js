const photoData = [
    // Singles Category
    {
        image: "images/WhatsApp Image 2025-07-04 at 10.41.09 AM (1).jpeg",
        title: "Acārya-śreshtha",
        category: "newyork",
    },
    {
        image: "images/WhatsApp Image 2025-07-04 at 10.41.09 AM.jpeg",
        title: "Acārya-śreshtha",
        category: "newyork",
    },
    {
        image: "images/rath.jpg",
        title: "Śrīla Prabhupāda ki!",
        category: "newyork",
    },
    {
        image: "images/photo_6260457297335667713_y.jpg",
        title: "Servant of the servant",
        category: "newyork",
    },
    {
        image: "images/photo_6260457297335667714_y.jpg",
        title: "HH Tamal Krishna Goswami Maharaj",
        category: "newyork",
    },
    {
        image: "images/photo_6217652454967855080_y.jpg",
        title: "HDG AC Bhaktivedanta Swami Prabhupad ki jay!",
        category: "newyork",
    },
    {
        image: "images/photo_6215530101173503968_x.jpg",
        title: "Śrimad Varadarāja Perumal",
        description: "Worshipped by Śripād Rāmānujācārya.",
        category: "newyork",
    },
    {
        image: "images/photo_6215530101173503967_y.jpg",
        title: "Jaya Prabhupāda! Jaya Prabhupāda!",
        category: "newyork",
    },
    {
        video: "images/document_6197075433700202888.mp4",
        type: "video",
        title: "Sri Sri Radhā rasa bihari",
        category: "quotes",
    },
    {
        image: "images/photo_6190240174093486345_y.jpg",
        title: "HH Vishnujan Swami Maharaj",
        category: "newyork",
    },
    {
        image: "images/photo_6190645369898124240_y.jpg",
        title: "HH Bhakti Vikasa Swami & HH Sivarama Swami distribute a “𝐒𝐚𝐩𝐭𝐚𝐫𝐢𝐬𝐡𝐢” set on the streets of Atlanta!",
        description: "Jaya Shrila Prabhupāda!",
        category: "newyork",
    },
    {
        image: "images/photo_6177226616460133760_y.jpg",
        title: "Love Nowadays",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6159055103751996069_x (1).jpg",
        title: "#Ritwiks",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6159055103751996290_y (1).jpg",
        title: "#Ritwiks",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6136242157326025776_y (1).jpg",
        title: "Jay Shrila Prabhupad!",
        category: "newyork",
    },
    {
        image: "images/photo_6132023000497767434_y (1).jpg",
        title: "The Mood and Mission of Śrīla Prabhupāda",
        description: "Author : HH Vishnujan Swami Maharaj",
        category: "newyork",
    },
    {
        image: "images/photo_6127394284178098073_y (1).jpg",
        title: "Namaste Narasimhāya!",
        category: "newyork",
    },
    {
        image: "images/photo_6129639851994236181_y.jpg",
        title: "This is called Perfection!",
        category: "newyork",
    },
    {
        video: "images/document_6122890684094486811.mp4",
        type: "video",
        title: "New Book!!",
        description: "This will be Historic! Revival of this movement is Started. Śrīla Prabhupāda ki!! Jay. ",
        category: "quotes",
    },
    {
        image: "images/photo_6111507874460059146_y (1).jpg",
        title: "Another Treasure.. Treasure of Gaur-dhan Jan!",
        description: "Srila Jayapatāka swami Mahārāja always stands like a great mountain to protect his Gurumaharaj's ISKCON.",
        category: "newyork",
    },
    {
        image: "images/photo_6100230883773628924_y (1).jpg",
        title: "Hare Krsna!",
        category: "newyork",
    },
    {
        image: "images/photo_6098312274637865755_y (1).jpg",
        description: "Srila Prabhupada with Gauri Devi Dasi. July 18th 1971, ISKCON  Boston Temple, 38 North Beacon Street.",
        category: "newyork",
    },
    {
        image: "images/photo_6057782308943022109_y (1).jpg",
        title: "Sāndhrānanda : Form of Condensed bliss.",
        description: "~ Vālmiki Mool Rāmayana, Aranya khand.",
        category: "newyork",
    },
    {
        image: "images/WhatsApp Image 2025-04-16 at 11.37.13 AM (2).jpeg",
        title: "What Prabhupāda has done, no one has done.",
        description: "~ Vinoba Bhave",
        category: "newyork",
    },
    {
        image: "images/photo_6330256537439814392_y (1).jpg",
        title: "Just Some Treasure..",
        category: "newyork",
    },
    {
        image: "images/photo_6057782308943022109_y (1).jpg",
        title: "Sāndhrānanda : Form of Condensed bliss.",
        description: "~ Vālmiki Mool Rāmayana, Aranya khand.",
        category: "newyork",
    },
    {
        image: "images/photo_6327902702088078105_x (1).jpg",
        description: "In the material world there is no love. Because everyone is directed by lust. ",
        category: "newyork",
    },
    {
        image: "images/photo_6325650902274393336_y (1).jpg",
        title: "How many of you have this book?",
        category: "newyork",
    },
    {
        image: "images/photo_6314275080095515541_y (1).jpg",
        title: "Where is the trouble?",
        category: "newyork",
    },
    {
        image: "images/photo_6312023280281832547_y (1).jpg",
        description: "Today The Lord is Special because they are Srīla Prabhupāda's Lords.",
        category: "ann",
    },
    {
        image: "images/photo_6312023280281832548_y (1).jpg",
        description: "Today The Lord is Special because they are Srīla Prabhupāda's Lords.",
        category: "ann",
    },
    {
        image: "images/photo_6312023280281832549_y.jpg",
        description: "Today The Lord is Special because they are Srīla Prabhupāda's Lords.",
        category: "ann",
    },
    {
        image: "images/photo_6312023280281832550_x.jpg",
        description: "Today The Lord is Special because they are Srīla Prabhupāda's Lords.",
        category: "ann",
    },
    {
        image: "images/photo_6312023280281832545_y (1).jpg",
        title: "'Think of Krsna always and try to work sincerely.'",
        category: "newyork",
    },
    {
        video: "images/document_6298686590327724049.mp4",
        type: "video",
        title: "If this is what Parkinsons does, then I want it.",
        category: "quotes",
    },
    {
        image: "images/photo_6298686590783963243_x (1).jpg",
        title: "Hare Krsna Student Matajis & Prabhujis.",
        category: "newyork",
    },
    {
        image: "images/photo_6289608314115443166_y (1).jpg",
        title: "Jay Prabhupad!",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6289608314115443164_y (1).jpg",
        description: "A Visionary Saint for the Modern Scientific Age and Founder Acharya of Bhaktivedanta Institute.",
        category: "newyork",
    },
    {
        image: "images/photo_6289608314115443163_y (1).jpg",
        title: "This is worthless!",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6289608314115443152_y (1).jpg",
        description: "ISKCON Thane Maharashtra, comes up with unique presentation of Srila Prabhupād's divine Book Distribution.",
        category: "newyork",
    },
    {
        image: "images/photo_6282869746651218507_y (1).jpg",
        description: "Yesterday we Presented All the posts, growth and scores of Prabhupād Glorifications to HH Bhaktivikās Swāmi Mahārāj.",
        category: "newyork",
    },
    {
        image: "images/photo_6282869746651218500_y (1).jpg",
        description: "First day of Srutakirti prabhu as Srila prabhupada's servant",
        category: "newyork",
    },
    {
        video: "images/document_6282869746194977683.mp4",
        description: "The Making Of Abhay Charan TV Series. Biography Of His Divine Grace A.C Bhaktivedanta Swami Srila Prabhupada.",
        type: "video",
        category: "quotes",
    },
    {
        image: "images/photo_6271478076043019387_y (1).jpg",
        description: "Woman should be addressed as “mother.”",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6271478076043019125_y (1).jpg",
        description: "You always get pointed, someday please break the consistency. Otherwise you will be listed in Yamaraj's book of sin records.",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6266856145771677336_y (2).jpg",
        description: "On the way to Krishna.",
        category: "newyork",
    },
    {
        image: "images/photo_6266856145771676261_m (1).jpg",
        title: "Who is this? Calm, steady, grave and peacefull bhakti-yogi?",
        category: "newyork",
    },
    {
        image: "images/photo_6266856145771676259_y (1).jpg",
        title: "Google Sakhi-bekhi Vaniquotes to know more about the subject.",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6260564160416957100_x (1).jpg",
        title: "🔑 You want?",
        description: "A key which will take us to the one who has the back door key.",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6255588221761208967_y (1).jpg",
        description: "māyāvādi-bhāṣya śunile haya sarva-nāśa",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6255588221761208701_y (1).jpg",
        title: "Gauraaanga!",
        category: "newyork",
    },
    {
        image: "images/photo_6255588221761208699_x (1).jpg",
        title: "You are not god you are dog!",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6255588221761208597_y (1).jpg",
        description: "Ever well-wisher",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6251379085091653732_y (1).jpg",
        title: "Sleep less!",
        category: "newyork",
    },
    {
        image: "images/photo_6251379085091652799_x (1).jpg",
        title: "Merry Christmas!",
        category: "maharaj-sanand",
    },
    {
        image: "images/photo_6251233352556331823_y (1).jpg",
        title: " It is not A-B-C-D translation.",
        category: "maharaj-sanand",
    },
    {
        title: "This is Chaitanya Bhāgvata.",
        image: "images/photo_6242041027326231307_y (1).jpg",
        category: "cb",
    },
    {
        title: "This is part 1 of Antya khanda..",
        image: "images/photo_6242041027326231308_y.jpg",
        category: "cb",
    },
    {
        description: "And in this... Is a prediction made by Lord Chaitanya which got fulfilled by some spiritual aristocrat..",
        image: "images/photo_6242041027326231310_y.jpg",
        category: "cb",
    },
    {
        image: "images/photo_6237537427698860483_x (1).jpg",
        title: "The lotus footprints of Shrila Prabhupad.",
        category: "newyork",
    },
    {
        image: "images/photo_6233201233011786638_x (1).jpg",
        title: "Prabhupād and little Saraswati",
        description: "Vaishnava means Childlike Simplicity",
        category: "newyork",
    },
    {
        image: "images/WhatsApp Image 2025-02-28 at 1.32.25 PM.jpeg",
        title: "'It is not very encouraging, still I'm not a man to be disappointed.'",
        description: "~ HDG A.C Bhaktivedanta Swami Srila Prabhupāda.",
        category: "newyork",
    },
    {
        image: "images/photo_6230883587054485802_y (1).jpg",
        description: "Prabhupad taught us what other gurus are not able to.",
        category: "newyork",
    },
    {
        image: "images/photo_6230883587054485801_y (1).jpg",
        description: "Sri Siddhānta Saraswati as a young man.",
        category: "newyork",
    },
    {
        image: "images/photo_6230883587054485800_y (2).jpg",
        title: "Elon and his Muskies",
        category: "newyork",
    },
    {
        video: "images/document_6230883586598247079.mp4",
        type: "video",
        title: "Prabhupad, Fiji island and Great snake Kalia.",
        category: "quotes",
    },
    {
        description: "Prabhupad with Maharaj Sanand",
        image: "images/sanand1.jpg",
        category: "pms",
    },
    {
        description: "Prabhupad with Maharaj Sanand",
        image: "images/sanand2.jpg",
        category: "pms",
    },
    {
        description: "Prabhupad with Maharaj Sanand",
        image: "images/sanand3.jpg",
        category: "pms",
    },
    {
        description: "Prabhupad with Maharaj Sanand",
        image: "images/sanand4.jpg",
        category: "pms",
    },
    {
        image: "images/photo_6208375020665818222_x (1).jpg",
        title: "Seriously. How many of you are Chanting your 16 rounds?",
        category: "newyork",
    },
    {
        video: "images/document_6181302711766487520.mp4",
        type: "video",
        title: "Prabhupād chanting Narasimha Arati.",
        category: "quotes",
    },
    {
        video: "images/document_6145676817039627922.mp4",
        type: "video",
        title: "The curse of travelling",
        category: "quotes",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811077_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811078_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811079_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811080_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811081_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811082_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811083_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811084_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811085_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811086_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811087_x.jpg",
        category: "shave",
    },
    {
        description: "Prabhupād shaving",
        image: "images/photo_6124929548475811088_x.jpg",
        category: "shave",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686212_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686213_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686214_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686215_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686216_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686217_x (4).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686217_x (5).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686218_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686219_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686220_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686221_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686222_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686223_x (2).jpg",
        category: "km",
    },
    {
        description: "Srila Prabhupāda at the 1971 Allahabad Kumbh Mela.",
        image: "images/photo_6093549276165686224_x (3).jpg",
        category: "km",
    },
    {
        title: "Priceless moments with a pure devotee",
        description: "Author : Trivikrama Swami",
        image: "images/photo_6082631271730758946_y (3).jpg",
        category: "newyork",
    },
    {
        description: "Looking at Lord Jagganath on Rathyatra,1974.",
        image: "images/photo_6066833939634438475_x (1).jpg",
        category: "newyork",
    },
    {
        video: "images/document_6316577680326136448.mp4",
        type: "video",
        title: "When prabhupada would ring that bell everyone would go wild!",
        category: "quotes",
    },
    {
        video: "images/document_6240152963541636055.mp4",
        type: "video",
        title: "His Throne",
        category: "quotes",
    },
    {
        video: "images/document_6222117579821945844.mp4",
        type: "video",
        title: "Vaikuntha people",
        category: "quotes",
    },
    {
        video: "images/vover.mp4",
        type: "video",
        title: "When He Takes Over!",
        category: "quotes",
    },
    {
        video: "images/document_6212814912587043538.mp4",
        type: "video",
        title: "At that moment everyone went Absolutely Mad!",
        description: "Patitpāvan Srila Prabhupād ki! Jay! Kirtan Samrāt Sripad Visnujana Maharaj ki! Jay! All Glories to Sankirtan Devotees.",
        category: "quotes",
    },
    {
        video: "images/document_6208311312959673747.mp4",
        type: "video",
        description: "Everything that Prabhupada was saying, there is evidence for",
        category: "quotes",
    },
    {
        video: "images/vjagat.mp4",
        type: "video",
        title: "The Real Jagat-Guru",
        category: "quotes",
    },
    {
        video: "images/document_6154335569892611140.mp4",
        type: "video",
        title: "Let me spoil your sleeps.. Don't sleep!..Getup!",
        category: "quotes",
    },
    {
        title: "Shrila Prabhupad's original sweater",
        description: "Disciples distributing Prabhupad's books on New York streets.",
        image: "images/photo_6149867189453308691_y (2).jpg",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        title: "No one!",
        image: "images/photo_6149867189453308466_y (2).jpg",
        category: "newyork",
    },
    {
        title: "Both are looking at Rose in Prabhupād's hand.",
        image: "images/photo_6136679157363490919_x (2).jpg",
        category: "newyork",
    },
    {
        description: "Jay Rādhā Rās Bihāri.. Rādhā Rās Bihāri Rādhe..Prabhupādera Prāna dhana he!",
        image: "images/rasbihari.jpg",
        category: "newyork",
    },
    {
        video: "images/document_6075885827567654201.mp4",
        type: "video",
        title: "ISKCON Thane Yagya",
        category: "quotes",
    },
    {
        video: "images/mode.mp4",
        type: "video",
        title: "A new mode of thinking",
        category: "quotes",
    },
    {
        title: "CHĀRU VILĀS Reviving moments with HH Bhakti Charu Swami Maharaja",
        description: "Author : Krsna-Kisora Das",
        image: "images/photo_6062113822115741592_y (1).jpg",
        category: "newyork",
        categoryName: "Prabhupad at New York"
    },
    {
        video: "images/notsaying.mp4",
        type: "video",
        title: "I am not saying anything",
        category: "quotes",
    },
    {
        video: "images/document_6329900887921660112.mp4",
        type: "video",
        title: "Prabhupād devotees are everywhere! 🚩😂",
        description: "(Yes but don't go to watch the movie now..🙂 Prabhupād will not like it) ⚠Warning ⚠",
        category: "quotes",
    },
    {
        description: "'Great unalloyed devotees of the Lord are compassionate toward the fallen, and therefore they travel all over the world with the mission of bringing souls back to Godhead, back to home.'",
        image: "images/photo_6327649088564216351_y (1).jpg",
        category: "newyork",
    },
    {
        title: "'I have never known a superhero, but I know of Prabhupada!'",
        description: "Jaya Om Vishnu-pada paramahamsa parivrajakacharya ashtottara-shata Shri Srimad His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada ki Jay !",
        image: "images/photo_6327649088564216350_y (2).jpg",
        category: "newyork",
    },
    {
        title: "Question: Is there a Prayer to Krsna for a devotee who is Unwilling to Become Krishna Conscious?",
        image: "images/photo_6327649088564216348_y (1).jpg",
        category: "newyork",
    },
    {
        title: "Speaking strongly in Shrila Prabhupada's service",
        description: "Author : HH Bhakti Vikas Swami Maharaj",
        image: "images/speak.jpg",
        category: "newyork",
    },
    {
        title: "Finally Sadhguru gets 'Sat-guru'",
        description: "O life air of all the Supreme Lord's devotees.",
        image: "images/photo_6327649088564216343_y (1).jpg",
        category: "newyork",
    },
    {
        title: "O master, Srimad-Bhagavatam!",
        description: "All glories to Śrīla Prabhupāda!",
        image: "images/photo_6327649088564216341_y (2).jpg",
        category: "newyork",
    },
    {
        video: "images/hhbcsm.mp4",
        type: "video",
        title: "Vaishnavas Love can Melt Mountains!",
        description: "Beloved Prabhupāda's most Loved Solider who United everyone kept everyone together in service to Srila Prabhupāda.",
        category: "quotes",
    },
    {
        title: "The symbol of devotional service in the highest degree is Radharani.",
        description: "(Nectar of Devotion, Chapter 1)",
        image: "images/photo_6327649088564216294_x (2).jpg",
        category: "newyork",
    },
    {
        description: "For them I am always ready to come back from Goloka Vrindaban.",
        image: "images/photo_6327649088564216278_y (2).jpg",
        category: "newyork",
    }
];

// DOM elements
const filterBtns = document.querySelectorAll('.filter-btn');
const photosGrid = document.getElementById('photos-grid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCounter = document.getElementById('modal-counter');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const noResults = document.getElementById('no-results');

let currentFilter = 'all';
let currentPhotoIndex = 0;
let filteredPhotos = [];
function updateFilteredPhotos() {
    if (currentFilter === 'all') {
        filteredPhotos = photoData;
    } else {
        filteredPhotos = photoData.filter(p => p.category === currentFilter);
    }
}

// Initialize the gallery
function initGallery() {
    updateCounts();
    updateFilteredPhotos();
    renderFilteredPhotos(); // Only render filtered photos
    setupEventListeners();
    addScrollAnimations();
}

function filterPhotos(filter, btn) {
    currentFilter = filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update filtered photos array
    updateFilteredPhotos();

    // Re-render grid based on filter
    renderFilteredPhotos();

    // Show/hide no results message
    noResults.style.display = filteredPhotos.length === 0 ? 'block' : 'none';
}



// Update photo counts for each category
function updateCounts() {
    const counts = {
        'all': photoData.length,
        'maharaj-sanand': photoData.filter(p => p.category === 'maharaj-sanand').length,
        'newyork': photoData.filter(p => p.category === 'newyork').length,
        'quotes': photoData.filter(p => p.category === 'quotes').length,
        'comics': photoData.filter(p => p.category === 'comics').length,
        'shave': photoData.filter(p => p.category === 'shave').length,
        'ann': photoData.filter(p => p.category === 'ann').length,
        'cb': photoData.filter(p => p.category === 'cb').length,
        'pms': photoData.filter(p => p.category === 'pms').length,
        'km': photoData.filter(p => p.category === 'km').length
    };

    Object.keys(counts).forEach(category => {
        const countEl = document.getElementById(`${category}-count`);
        if (countEl) countEl.textContent = counts[category];
    });
}


// Render all photos
function renderAllPhotos() {
    photosGrid.innerHTML = '';

    photoData.forEach(photo => {
        const photoCard = createPhotoCard(photo);
        photosGrid.appendChild(photoCard);
    });
}
// Render filtered photos only (used after filtering)
function renderFilteredPhotos() {
    photosGrid.innerHTML = ''; // Clear the grid

    filteredPhotos.forEach(photo => {
        const photoCard = createPhotoCard(photo);
        photosGrid.appendChild(photoCard);
    });

    addScrollAnimations(); // Optional: keep scroll effects
}

function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.category = photo.category;
    card.style.position = 'relative'; // ensure overlay works

    const hasContent = photo.title || photo.description;

    let mediaHTML = '';

    if (photo.type === 'video') {
        mediaHTML = `<video class="photo-img" src="${photo.video}" muted autoplay loop playsinline></video>`;
    } else {
        mediaHTML = `<img src="${photo.image}" alt="${photo.title || 'Photo'}" class="photo-img">`;
    }

    card.innerHTML = `
        ${mediaHTML}
        ${hasContent ? `
            <div class="photo-content">
                ${photo.title ? `<div class="photo-title">${photo.title}</div>` : ''}
                ${photo.description ? `<div class="photo-description">${photo.description}</div>` : ''}
                
                <div class="card-actions flex items-center space-x-4 mt-2">
                    <button class="like-btn text-gray-500 text-xl hover:scale-110 transition-transform duration-200">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="share-btn text-gray-500 text-xl hover:scale-110 transition-transform duration-200">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        ` : ''}
    `;

    const likeBtn = card.querySelector('.like-btn');
    const shareBtn = card.querySelector('.share-btn');
    const mediaElement = card.querySelector('.photo-img, video');

    // LIKE Button click
    likeBtn.addEventListener('click', () => {
        const heartIcon = likeBtn.querySelector('i');
        heartIcon.classList.toggle('fas');
        heartIcon.classList.toggle('far');
        likeBtn.classList.toggle('text-red-500');
    });

    // SHARE Button
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: photo.title || "Photo",
            text: photo.description || "Check out this photo",
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Sharing failed:', err);
            }
        } else {
            alert('Share not supported in your browser.');
        }
    });

    // Single Click => open modal
    mediaElement.addEventListener('click', () => {
        openModal(photo);
    });

    // Double Click => like
    mediaElement.addEventListener('dblclick', () => {
        const heartIcon = likeBtn.querySelector('i');
        const isLiked = heartIcon.classList.contains('fas');

        if (!isLiked) {
            heartIcon.classList.add('fas');
            heartIcon.classList.remove('far');
            likeBtn.classList.add('text-red-500');

            // Floating Heart animation
            const heartOverlay = document.createElement('div');
            heartOverlay.innerHTML = `<i class="fas fa-heart text-red-500 text-6xl"></i>`;
            heartOverlay.style.position = 'absolute';
            heartOverlay.style.top = '50%';
            heartOverlay.style.left = '50%';
            heartOverlay.style.transform = 'translate(-50%, -50%)';
            heartOverlay.style.pointerEvents = 'none';
            heartOverlay.style.opacity = '0.8';
            heartOverlay.style.zIndex = '10';
            card.appendChild(heartOverlay);

            setTimeout(() => {
                heartOverlay.remove();
            }, 700);
        }
    });

    return card;
}



// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterPhotos(filter, btn);
        });
    });

    // Modal close events
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navigation buttons
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch (e.key) {
                case 'Escape':
                    modal.style.display = 'none';
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    showPrevious();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    showNext();
                    break;
            }
        }
    });
}
function filterPhotos(filter, btn) {
    currentFilter = filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update filtered photos array
    updateFilteredPhotos();

    // Re-render grid based on filter
    renderFilteredPhotos();

    // Show/hide no results message
    noResults.style.display = filteredPhotos.length === 0 ? 'block' : 'none';
}


// Open modal with photo details
function openModal(photo) {
    // Find the index of this photo in the filtered array
    currentPhotoIndex = filteredPhotos.findIndex(p => p.id === photo.id);
    updateModalContent(photo);
    updateNavigationButtons();
    modal.style.display = 'block';
}

function updateModalContent(photo) {
    const modalVideo = document.getElementById('modal-video');
    const isVideo = photo.type === 'video';

    if (isVideo) {
        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = photo.video;
        modalVideo.load();
        modalVideo.play();
    } else {
        modalImg.src = photo.image;
        modalImg.style.display = 'block';
        modalVideo.pause();
        modalVideo.style.display = 'none';
    }

    const hasTitle = photo.title && photo.title.trim() !== "";
    const hasDescription = photo.description && photo.description.trim() !== "";

    if (hasTitle || hasDescription) {
        document.querySelector('.modal-info').style.display = 'block';
        modalTitle.textContent = hasTitle ? photo.title : "";
        modalDescription.textContent = hasDescription ? photo.description : "";
    } else {
        document.querySelector('.modal-info').style.display = 'none';
    }

    modalCounter.textContent = `${currentPhotoIndex + 1} / ${filteredPhotos.length}`;
    // Modal Like Button
    const modalLikeBtn = document.getElementById('modal-like-btn');
    const modalHeartIcon = modalLikeBtn.querySelector('i');

    modalLikeBtn.onclick = () => {
        modalHeartIcon.classList.toggle('fas');
        modalHeartIcon.classList.toggle('far');
        modalLikeBtn.classList.toggle('text-red-500');
    };

    // Modal Share Button
    const modalShareBtn = document.getElementById('modal-share-btn');
    modalShareBtn.onclick = async () => {
        const shareData = {
            title: photo.title || "Photo",
            text: photo.description || "Check out this photo",
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Sharing failed:', err);
                alert("Sharing failed.");
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareData.url);
                alert("Link copied to clipboard!");
            } catch {
                alert("Share not supported.");
            }
        }
    };

}



// Update navigation button states
function updateNavigationButtons() {
    prevBtn.disabled = currentPhotoIndex === 0;
    nextBtn.disabled = currentPhotoIndex === filteredPhotos.length - 1;
}

// Show previous photo
function showPrevious() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        const photo = filteredPhotos[currentPhotoIndex];
        updateModalContent(photo);
        updateNavigationButtons();
    }
}

// Show next photo
function showNext() {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
        currentPhotoIndex++;
        const photo = filteredPhotos[currentPhotoIndex];
        updateModalContent(photo);
        updateNavigationButtons();
    }
}

// Add scroll animations
function addScrollAnimations() {
    const cards = document.querySelectorAll('.photo-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', initGallery);