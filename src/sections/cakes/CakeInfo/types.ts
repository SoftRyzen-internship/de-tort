export type CakeInfoProps = {
  cake: any;
};

/*
title: 'Міні-торти',
    description: 'Маленькі порційні тортики по 130-150 грам!\n' +
      'Начинки: фісташка-малина, шоколад-вишня, груша-карамель-пекан, кокос-мигдаль, морква-карамель, ваніль-полуниця, манго-маракуйя, шоколад-карамель',
    price: 'Мін: 600 грн за 4 шт / 1050 грн за 8 шт',
    decor: null,
    production_time: '1 робочий день',
    portion_size: { label: 'Розрахований:', size: '6-8 людей' },
    images: [ [Object] ],
*/

export type TImage = {
  url: string;
  desc: string;
};
