import React from 'react';

import FeaturesSectionImage from './ImagePhone/FeaturesSectionImage';

import FeaturesSectionDescListLeft from './ListLeft/FeaturesSectionDescListLeft';

import FeaturesSectionDescListRight from './ListRight/FeaturesSectionDescRight';

import s from './FeaturesSectionDesc.module.css';

const FeaturesSectionDesc = () => {
  const markupLeft = [
    {
      id: 1,

      text: 'Возможность создать свой тест и опубликовать его',

      descr: 'в разработке',

      icon: 'svg_1',
    },

    {
      id: 2,

      text:
        'просмотр детальной статистики по пользователям, которые прошли тест',

      descr: 'в разработке',

      icon: 'svg_2',
    },

    {
      id: 3,

      text:
        'возможность добавлять текст в зависимости от процента прохождения пользователем',

      descr: 'в разработке',

      icon: 'svg_3',
    },

    {
      id: 4,

      text: 'возможность загружать текст из Excel',

      descr: 'в разработке',

      icon: 'svg_4',
    },
  ];

  const markupRight = [
    {
      id: 1,

      text: 'авторские тесты от практикующих специалистов',

      icon: 'svg_5',
    },

    {
      id: 2,

      text: 'начни проходить тест на компьютере продолжи на телефоне',

      icon: 'svg_6',
    },

    {
      id: 3,

      text: 'подробная оценка результатов с указанием того, что нужно улучшить',

      icon: 'svg_7',
    },

    {
      id: 4,

      text: 'поделись своими результатами с друзьями',

      icon: 'svg_8',
    },
  ];

  return (
    <div className={s.block}>
      <FeaturesSectionDescListLeft list={markupLeft} />

      <FeaturesSectionImage />

      <FeaturesSectionDescListRight list={markupRight} />
    </div>
  );
};

export default FeaturesSectionDesc;
