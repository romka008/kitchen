import one from './homeGallery/1.jpg'
import oneMin from './homeGallery/1min.jpg'
import two from './homeGallery/2.jpg'
import twoMin from './homeGallery/2min.jpg'
import three from './homeGallery/3.jpg'
import threeMin from './homeGallery/3min.jpg'

import onePortfolio_1 from './portfolio/1.1.jpg'
import onePortfolio_1min from './portfolio/1.1min.jpg'
import onePortfolio_1_2 from './portfolio/1.2.jpg'
import onePortfolio_1_2min from './portfolio/1.2min.jpg'
import onePortfolio_1_3 from './portfolio/1.3.jpg'
import onePortfolio_1_3min from './portfolio/1.3min.jpg'

import twoPortfolio_1 from './portfolio/2.1.jpg'
import twoPortfolio_1min from './portfolio/2.1min.jpg'
import twoPortfolio_1_2 from './portfolio/2.2.jpg'
import twoPortfolio_1_2min from './portfolio/2.2min.jpg'
import twoPortfolio_1_3 from './portfolio/2.3.jpg'
import twoPortfolio_1_3min from './portfolio/2.3min.jpg'

import threePortfolio_1 from './portfolio/3.1.jpg'
import threePortfolio_1min from './portfolio/3.1min.jpg'
import threePortfolio_1_2 from './portfolio/3.2.jpg'
import threePortfolio_1_2min from './portfolio/3.2min.jpg'
import threePortfolio_1_3 from './portfolio/3.3.jpg'
import threePortfolio_1_3min from './portfolio/3.3min.jpg'

import fourPortfolio_1 from './portfolio/4.1.jpg'
import fourPortfolio_1min from './portfolio/4.1min.jpg'
import fourPortfolio_1_2 from './portfolio/4.2.jpg'
import fourPortfolio_1_2min from './portfolio/4.2min.jpg'
import fourPortfolio_1_3 from './portfolio/4.3.jpg'
import fourPortfolio_1_3min from './portfolio/4.3min.jpg'

import stages1 from './stages/1.jpg'
import stages2 from './stages/2.jpg'
import stages3 from './stages/3.jpg'
import stages4 from './stages/4.jpg'
import stages5 from './stages/5.jpg'

import development from './development/development.jpg'

export const homeGalleryImg = [
    { id: 1, img: { fullSize: one, min: oneMin } },
    { id: 2, img: { fullSize: two, min: twoMin } },
    { id: 3, img: { fullSize: three, min: threeMin } },
]

export const portfolioGalleryImg1 = [
    { id: 1, img: { fullSize: onePortfolio_1, min: onePortfolio_1min } },
    { id: 2, img: { fullSize: onePortfolio_1_2, min: onePortfolio_1_2min } },
    { id: 3, img: { fullSize: onePortfolio_1_3, min: onePortfolio_1_3min } },
]
export const portfolioGalleryImg2 = [
    { id: 1, img: { fullSize: twoPortfolio_1, min: twoPortfolio_1min } },
    { id: 2, img: { fullSize: twoPortfolio_1_2, min: twoPortfolio_1_2min } },
    { id: 3, img: { fullSize: twoPortfolio_1_3, min: twoPortfolio_1_3min } },
]
export const portfolioGalleryImg3 = [
    { id: 1, img: { fullSize: threePortfolio_1, min: threePortfolio_1min } },
    { id: 2, img: { fullSize: threePortfolio_1_2, min: threePortfolio_1_2min } },
    { id: 3, img: { fullSize: threePortfolio_1_3, min: threePortfolio_1_3min } },
]
export const portfolioGalleryImg4 = [
    { id: 1, img: { fullSize: fourPortfolio_1, min: fourPortfolio_1min } },
    { id: 2, img: { fullSize: fourPortfolio_1_2, min: fourPortfolio_1_2min } },
    { id: 3, img: { fullSize: fourPortfolio_1_3, min: fourPortfolio_1_3min } },
]

export const stagesData = [
    {
        id: 1,
        title: 'ЗАМЕР',
        text: 'По предварительной записи специалист приезжает на объект и производит замер помещения на профессиональное оборудование.',
        img: stages1,
    },
    {
        id: 2,
        title: 'ПОДБОР МАТЕРИАЛОВ',
        text: 'В удобное время заказчик встречается с дизайнером нашей студии для подбора цветов и материалов.',
        img: stages2,
    },
    {
        id: 3,
        title: 'СОЗДАНИЕ ДИЗАЙН-ПРОЕКТА',
        text: 'С учетом предпочтений и желаний заказчика разрабатываем детальный 3д дизайн проект.',
        img: stages3,
    },
    {
        id: 4,
        title: 'ИЗГОТОВЛЕНИЕ',
        text: 'Утверждённый дизайн-проект отправляется в производство с окончательной проверкой всех деталей.',
        img: stages4,
    },
    {
        id: 5,
        title: 'МОНТАЖ',
        text: 'В установленные сроки наши мастера, используя профессиональное и современное оборудование производят монтаж мебели.',
        img: stages5,
    },
]

export { development }
