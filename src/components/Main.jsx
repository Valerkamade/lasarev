export default function Main({
                               onCardClick,
                               onCardLike,
                               onCardDelete,
                               cards,
                             }) {

  return (
    <main className='main'>
      <section className='gallery page__gallery' aria-label='Галерея'>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src="https://i.postimg.cc/q7zJwYST/1939-001.jpg"
               alt='Лазарев Пётр Герасимович'/>
          <p className='gallery__description'>Мой прапрадед Лазарев Пётр Герасимович родился <b>18 марта 1909 г.</b> в
            р.п.Раевка Баш.АССР.
            Окончил Уфимский сельскохозяйственный институт по специальности агроном - полевод.
            Работал научным
            сотрудником по селекции зерновых культур. Были опубликованы несколько научных работ по результатам выведения
            новых сортов зерновых культур.<br/>
            <b>22 сентября 1941 г.</b> был призван на службу в ряды Советской Армии и отправлен на фронт Мелеузовским
            райвоенкоматом БАССР.<br/>
            <b>Дома остались:</b> жена - Напольская Ольга Дмитриевна и четверо детей - Галина и Виталий - 1937 г.р.,
            Ирина -
            1939 г.р., Светлана - 1941 г.р.
          </p>
        </div>
        <div className='gallery__wrapper'>
          <p className='gallery__description'><b>Последнее письмо с фронта датировано 7 сентября 1943 г.</b>
          </p>
        </div>
        <div className='gallery__wrapper'>
          <p className='gallery__description'>
            <b>Погиб 8 сентября 1943 г.</b> при освобождении г.Ельня Смоленской обл.
            Был похоронен в лесу под хутором Лапино недалеко от г.Ельня. Позже был перезахоронен на Братском воинском
            кладбище №1 в г.Ельня Смоленской обл.<br/> Имя Лазарева Петра Герасимовича увековечено в <b>Памятном альбоме
            г.Ельня под №3717</b>.
            Об этом дети узнали в результате поиска через военкоматы г.Смоленска и г.Ельня и личного посещения могилы на
            Братском кладбище.
          </p>
        </div>
        {/*<div className='gallery__wrapper gallery__wrapper_column'>*/}
        {/*  <p className='gallery__description gallery__description_center'>*/}
        {/*    <b>Боевой путь</b>*/}
        {/*  </p>*/}
        {/*  <img className='gallery__img' src="https://i.postimg.cc/ryt1CCv7/2025-04-29-07-18-54.png"*/}
        {/*       alt='Боевой путь'/>*/}

        {/*</div>*/}
        <div className='gallery__wrapper gallery__wrapper_column'>
          <p className='gallery__description gallery__description_center'>
            <b>Извещение</b>
          </p>
          <img className='gallery__img' src="https://i.postimg.cc/NFTRsB6Q/00000079.jpg"
               alt='Извещение'/>
          <p className='gallery__description'>
            "Извещение. Гвардии сержант Лазарев Пётр Герасимович, состоявший в должности командира отделения, уроженец
            БАССР, рабочий посёлок Раевка, в бою за Социалистическую Родину, верный воинской присяге, проявив геройство
            и мужество, был убит в бою с немецкими захватчиками 8 сентября 1943 г.
            Похоронен: лес возле Лапинского хутора Ельнинского района Смоленской области.
            Обоснование: Дело №5 за 1942 - 1944 г. стр.30
            Мелеузов. райвоенком майор Боярко.
            1909 г. рождения, март. Призван в ряды Сов.Армии 22 сентября 1941 г."
          </p>
        </div>
        <div className='gallery__wrapper gallery__wrapper_column'>
          <p className='gallery__description gallery__description_center'><b>Посмертно награжден медалью "За
            отвагу".</b>
          </p>
          <div className='gallery__inner'>
            <img className='gallery__img' src="https://i.postimg.cc/wjwpZpsr/Medal-Za-Otvagu.png"
                 alt='Медаль "За отвагу"'/>
            <img className='gallery__img' src="https://i.postimg.cc/NfDQcBwt/2025-04-28-21-32-40.png" alt='Выписки'/>
          </div>
        </div>
        <div className='gallery__wrapper gallery__wrapper_column'>
          <p className='gallery__description gallery__description_center'>
            <b>Лазарев Пётр Герасимович оставил после себя наследие в виде</b>
          </p>
          <p className='gallery__description'>
            <ul className='gallery__list'>
              <li><b>4</b> детей</li>
              <li><b>5</b> внуков</li>
              <li><b>9</b> правнуков</li>
              <li><b>10</b> праправнуков</li>
            </ul>
          </p>
          <img className='gallery__img' src="https://i.postimg.cc/X7TdRpTZ/familio-my-tree-29-04-2025-01-24-02.png"
               alt='Древо'/>
        </div>
      </section>
    </main>
  );
}
