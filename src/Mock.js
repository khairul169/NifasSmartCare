import {Content} from './Consts';

const articleList = [
  {
    title: 'Mobilisasi Dini Setelah Melahirkan',
    image: require('../assets/illust/article_109668.jpg'),
    time: 5,
    desc:
      'ibu nifas perlu untuk melakukan mobilisasi dini agar dapat mempertahankan fungsi mobilitas fisik ibu nifas.',
    content: [
      [
        Content.TEXT,
        'Pada masa nifas, ibu nifas perlu untuk melakukan mobilisasi dini agar dapat mempertahankan fungsi mobilitas fisik ibu nifas. Latihan bergerak juga dapat memperlancar peredaran darah, merangsang fungsi saluran cerna, dan mengatasi masalah nyeri.',
      ],
      [
        Content.LISTS,
        'Cara melakukan mobilisasi dini:',
        [
          'Bergerak sesegera mungkin dilakukan 2 jam setelah melahirkan dengan cara miring kiri-kanan atau bangun dari tempat tidur.',
          'Pada ibu yang bersalin secara sesar (SC) dapat bergerak sesegera mungkin dalam 6 jam pertama dengan cara menggerakkan tangan, jari, dan kaki.',
        ],
        true,
      ],
      [Content.YTVIDEO, '16u4P4xm8io'],
      [Content.SEPARATOR],
      [
        Content.LISTS,
        'Referensi:',
        [
          'Nurafifah D, Kusbiantoro D. 2019. Effectiveness of Early Exercise Against Uterine Involution in Spontaneous Postpartum Patients. https://journal.unnes.ac.id/nju/index.php/kemas/article/view/11936',
        ],
        false,
      ],
    ],
  },
  {
    title: 'Pentingnya Menjaga Kebersihan Diri',
    image: require('../assets/illust/ilustrasi-mandi-2.jpg'),
    time: 5,
    desc:
      'Kebersihan diri penting bagi ibu nifas. Saat menjalani masa nifas, ibu nifas perlu untuk menjaga kebersihkan dirinya agar terhindar dari ketidaknyamanan dan mencegah terjadinya komplikasi.',
    content: [
      [
        Content.TEXT,
        'Saat menjalani masa nifas, ibu nifas perlu untuk menjaga kebersihkan dirinya. Setelah persalinan, ibu akan mengeluarkan keringat dan cairan lebih banyak daripada biasanya. Ibu juga perlu menjaga kebersihan untuk mencegah terjadinya ketidaknyamanan dan komplikasi infeksi.',
      ],
      [
        Content.LISTS,
        'Cara perawatan:',
        [
          'Usahakan untuk sering mandi (3x sehari atau lebih).',
          'Menggunakan pakaian yang longgar dan mudah menyerap keringat.',
          'Menjaga kebersihan tubuh.',
        ],
        true,
      ],
      [
        Content.QUIZ,
        'Menjaga kebersihan tubuh setelah melahirkan sangat penting untuk mencegah terjadinya?',
        [
          'Demam',
          {
            label: 'Infeksi',
            reason:
              'Menjaga kebersihan tubuh akan dapat mencegah terjadinya infeksi.',
          },
          'Perdarahan',
          'Kesakitan',
        ],
      ],
      [Content.SEPARATOR],
      [
        Content.LISTS,
        'Referensi:',
        [
          'Arlinda. 2017. Pengetahuan Ibu Post Partum Tentang Personal Hygiene Di Rumah Sakit Umum Dewi Sartika Provinsi Sulawesi Tenggara Tahun 2017. http://repository.poltekkes-kdi.ac.id/94/',
        ],
        false,
      ],
    ],
  },
  {
    title: 'Kenali Tanda Bahaya: Perdarahan',
    image: require('../assets/illust/blood.jpg'),
    desc: 'Perdarahan merupakan salah satu tanda bahaya saat nifas.',
    time: 8,
    content: [
      [
        Content.TEXT,
        'Perdarahan hebat atau peningkatan perdarahan secara tiba-tiba melebihi 500 ml dengan persalinan normal ataupun melebihi 1000 ml pada persalinan dengan sectio caesaria (SC) pada saat nifas merupakan tanda bahaya pada ibu nifas dengan gejala sebagai berikut:',
      ],
      [
        Content.LISTS,
        'Tanda dan gejala perdarahan:',
        [
          'Lemah',
          'Limbung',
          'Berkeringat dingin',
          'Menggigil',
          'Nafas cepat',
          'Denyut nadi >100 x/menit',
        ],
        true,
      ],
      [Content.IMAGE, require('../assets/illust/pp-bleeding.jpg'), 694, 482],
      [
        Content.TEXT,
        'Kehilangan darah dengan jumlah banyak berbahaya bagi ibu nifas, terlebih pada ibu nifas dengan penyakit anemia.',
      ],
      [
        Content.TEXT,
        'Perdarahan yang berkepanjangan dapat menyebabkan kekurangan darah yang berat (anemia berat) pada ibu nifas. Ibu nifas yang kekurangan darah akan mengalami masalah kesehatan yang berkepanjangan.',
      ],
      [Content.SEPARATOR],
      [
        Content.TEXT,
        'Perdarahan yang berkepanjangan dan sulit untuk dihentikan dapat mendorong keadaan syok hemoragik pada ibu nifas. Segera pergi ke fasilitas kesehatan terdekat jika menemukan tanda dan gejala perdarahan.',
      ],
      [
        Content.QUIZ,
        'Apa yang harus dilakukan apabila terjadi perdarahan > 500 ml dan ibu merasa lemah, berkeringat dingin, menggigil, serta bernafas dengan cepat?',
        [
          'Meminum Air Manis',
          {
            label: 'Pergi Ke Fasilitas Kesehatan Terdekat',
            reason:
              'Tanda bahaya perdarahan apabila timbul harus segera diperiksakan pada fasilitas kesehatan terdekat agar tidak terjadi komplikasi yang membahayakan ibu nifas.',
          },
          'Tidur dan Istirahat',
        ],
      ],
      [Content.SEPARATOR],
      [
        Content.LISTS,
        'Referensi:',
        [
          'Hikmah N, Yani DP. 2015. Gambaran Hemoragic Post Partum Pada Ibu Bersalin Dengan Kejadian Anemia Di Ruang Ponek Rsud Kabupaten Jombang. https://www.journal.unipdu.ac.id/index.php/eduhealth/article/view/482',
        ],
        false,
      ],
    ],
  },
  {
    title: 'Senam Nifas',
    image: require('../assets/illust/senam-nifas.jpg'),
    time: 15,
    desc:
      'Senam nifas adalah senam yang bertujuan untuk mengembalikan otot-otot terutama rahim dan perut kembali ke keadaan semula sebelum hamil.',
    content: [
      [
        Content.TEXT,
        'Senam nifas adalah senam yang bertujuan untuk mengembalikan otot-otot terutama rahim dan perut kembali ke keadaan semula sebelum hamil.',
      ],
      [
        Content.LISTS,
        'Tujuan senam nifas:',
        [
          'Memperkuat elastisitas otot dinding perut',
          'Membentuk sikap tubuh',
          'Memperoleh relaksasi tubuh yang sempurna',
        ],
        true,
      ],
      [Content.IMAGE, require('../assets/illust/senam-nifas-1.jpg'), 309, 167],
      [Content.TEXT, 'Langkah-langkah Senam Nifas:'],
      [Content.YTVIDEO, 'eh8TqV4MkMs'],
      [Content.SEPARATOR],
      [Content.LISTS, 'Referensi:', ['-'], false],
    ],
  },
];

export {articleList};
