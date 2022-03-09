import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  arregloPosts = [
    {
      numVotes: 25.5,
      subrName: 'r/news',
      subrPhoto: 'https://image.winudf.com/v2/image1/Y29tLndvcmxkbmV3c19pY29uXzE1NjY5OTU5NjlfMDMx/icon.png?w=&fakeurl=1',
      postData: 'Posted by u/PapiJuancho 2 hours ago',
      postTitle: 'As Sinema Defends Filibuster, Progressives Say Vote Her the Hell Out',
      postImage: 'https://www.commondreams.org/sites/default/files/styles/banner_image_1x_xl/public/2022-01/arizona-voting-rights.jpg.webp?h=04762a9d&itok=GMHzNOhQ',
      numComments: 23
    },
    {
      numVotes: 4.1,
      subrName: 'r/Coronavirus',
      subrPhoto: 'https://image.winudf.com/v2/image1/Y29tLndvcmxkbmV3c19pY29uXzE1NjY5OTU5NjlfMDMx/icon.png?w=&fakeurl=1',
      postData: 'Posted by u/DangitBebby 4 hours ago',
      postTitle: 'The US government has launched an official website that will offer free COVID-19 tests to US homes. ' +
        'Starting next Wed, Jan 19th, every home in the U.S. can order 4 free at-⁠home COVID-⁠19 tests.' +
        ' The tests will be completely free—there are no shipping costs. (This is a direct link to the website)',
      postImage: 'https://www.gavi.org/sites/default/files/vaccineswork/2021/Thumb/shutterstock_1656883729_h2.jpg',
      numComments: 5
    },
    {
      numVotes: 9.5,
      subrName: 'r/technews',
      subrPhoto: 'https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png?width=256&s=7a61d06f46b02b5269fde1257f5cdbe01dbb9408',
      postData: 'Posted by u/GoMx808-0 5 hours ago',
      postTitle: ' Lawsuit against Amazon filed in tornado swarm that left 6 dead in Illinois warehouse',
      postImage: 'https://www.reuters.com/resizer/ak3QQA82zNxV8TMOMipN4sQCzxA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HHM7DMXAPVLCLF545WBIV7R4QY.jpg',
      numComments: 2
    },
    {
      numVotes: 145.2,
      subrName: 'r/parents',
      subrPhoto: 'https://styles.redditmedia.com/t5_3pkgv/styles/communityIcon_v8w24z9lj6c31.png?width=256&s=031b48dd450bf4a5c9f7bb5bf7533bbdd85c4ab2',
      postData: 'Posted by u/elJefe 2 hours ago',
      postTitle: 'Had half day at school, decided to go out with friends. asked dad for permission to go out he said yes but didn’t tell stepmom, she texted me pissed and demanding I come home now even though I had permission to go',
      postImage: 'https://www.commondreams.org/sites/default/files/styles/banner_image_1x_xl/public/2022-01/arizona-voting-rights.jpg.webp?h=04762a9d&itok=GMHzNOhQ',
      numComments: 21
    },

  ]
  arregloTrending= [
    {
      trendingPhoto:'https://images.newrepublic.com/58062cda2c4b24a877c6c026eac1435dd293e1f1.jpeg?auto=compress&ar=3%3A2&fit=crop&crop=faces&fm=jpg&ixlib=react-9.0.2&w=768&q=65&dpr=1',
      trendingSubr:'r/politics and more',
      trendingName:'Health Insurance',
      trendingDescription:'Enlisting Health Insurance Giants to Help With Rapid Covid test .',
      trendingIcon:'https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&format=pjpg&s=16279ee48ed3c9c4f9d05ad03da3be8368afea4f'
    },
    {
      trendingPhoto:'https://media.npr.org/assets/img/2022/01/17/ap22017316535449-a396e4ddfc4086c073929e5534f84bd602ed4765-s1100-c50.jpg',
      trendingSubr:'r/world and more',
      trendingName:'Ukraine',
      trendingDescription:'Canada deploys special forces to Ukraine amid rising tensions .',
      trendingIcon:'https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&format=pjpg&s=16279ee48ed3c9c4f9d05ad03da3be8368afea4f'
    },
    {
      trendingPhoto:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F09%252F29%252Fdonald-trump-1.jpg&q=85',
      trendingSubr:'r/politics and more',
      trendingName:'Donald Trump',
      trendingDescription:'Democrats see good chance of Garland prosecuting Trump',
      trendingIcon:'https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&format=pjpg&s=16279ee48ed3c9c4f9d05ad03da3be8368afea4f'
    },
    {
      trendingPhoto:'https://i.guim.co.uk/img/media/2c28504b30d7dc96bdcfc31a880d406168c41472/0_295_3508_2105/master/3508.jpg?width=1200&quality=85&auto=format&fit=max&s=fd8c8c729f7d159b7e69afd32aaa4d2b',
      trendingSubr:'r/news',
      trendingName:'CDC School Proposal',
      trendingDescription:'CDC\'s suggestion to cancel football, band in nearly every .',
      trendingIcon:'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png'
    }
  ]
  arregloTop=[
    {
      topPhoto:'https://i.scdn.co/image/ab67616d0000b2739ad2a9d4362443234a1a70b6',
      topName:'r/Comic',
      rising:true
    },
    {
      topPhoto:'https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png',
      topName:'r/technology',
      rising:false
    },
    {
      topPhoto:'https://styles.redditmedia.com/t5_2sc3f/styles/communityIcon_x6dymnk82f861.png?width=256&s=5bf37fd056dab6777f11a3dca33c60e6faa179ec',
      topName:'r/gamernews',
      rising:false
    },
    {
      topPhoto:'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png',
      topName:'/news',
      rising:true
    },
    {
      topPhoto:'https://styles.redditmedia.com/t5_2qjpg/styles/communityIcon_4fv0susv2j981.png?width=256&s=b9463b92dd5785ca5b0abfa73c83600af2527826',
      topName:'r/memes',
      rising:false
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
