const CONTENT_TEXT = 0;
const CONTENT_SEPARATOR = 1;
const CONTENT_IMAGE = 2;
const CONTENT_LISTS = 3;
const CONTENT_YTVIDEO = 4;

const articleList = [
  {
    title: 'Mobilisasi Dini Setelah Melahirkan',
    image: require('../assets/illust/article_109668.jpg'),
    desc:
      'ibu nifas perlu untuk melakukan mobilisasi dini agar dapat mempertahankan fungsi mobilitas fisik ibu nifas.',
    content: [
      [
        CONTENT_TEXT,
        'Pada masa nifas, ibu nifas perlu untuk melakukan mobilisasi dini agar dapat mempertahankan fungsi mobilitas fisik ibu nifas. Latihan bergerak juga dapat memperlancar peredaran darah, merangsang fungsi saluran cerna, dan mengatasi masalah nyeri.',
      ],
      [
        CONTENT_LISTS,
        'Cara melakukan mobilisasi dini:',
        [
          'Bergerak sesegera mungkin dilakukan 2 jam setelah melahirkan dengan cara miring kiri-kanan atau bangun dari tempat tidur.',
          'Pada ibu yang bersalin secara sesar (SC) dapat bergerak sesegera mungkin dalam 6 jam pertama dengan cara menggerakkan tangan, jari, dan kaki.',
        ],
        true,
      ],
      [CONTENT_YTVIDEO, '16u4P4xm8io'],
      [CONTENT_SEPARATOR],
      [
        CONTENT_LISTS,
        'Referensi:',
        ['WHO. 2016. Dapat diakses pada: http://who.int/'],
        false,
      ],
    ],
  },
  {
    title: 'Pentingnya Menjaga Kebersihan Diri',
    image: require('../assets/illust/ilustrasi-mandi-2.jpg'),
    desc:
      'Kebersihan diri penting bagi ibu nifas. Saat menjalani masa nifas, ibu nifas perlu untuk menjaga kebersihkan dirinya agar terhindar dari ketidaknyamanan dan mencegah terjadinya komplikasi.',
    content: [
      [
        CONTENT_TEXT,
        'Saat menjalani masa nifas, ibu nifas perlu untuk menjaga kebersihkan dirinya. Setelah persalinan, ibu akan mengeluarkan keringat dan cairan lebih banyak daripada biasanya. Ibu juga perlu menjaga kebersihan untuk mencegah terjadinya ketidaknyamanan dan komplikasi infeksi.',
      ],
      [
        CONTENT_LISTS,
        'Cara perawatan:',
        [
          'Usahakan untuk sering mandi (3x sehari atau lebih).',
          'Menggunakan pakaian yang longgar dan mudah menyerap keringat.',
          'Menjaga kebersihan tubuh.',
        ],
        true,
      ],
      [CONTENT_SEPARATOR],
      [
        CONTENT_LISTS,
        'Referensi:',
        ['WHO. 2016. Dapat diakses pada: http://who.int/'],
        false,
      ],
    ],
  },
];

export {articleList};
