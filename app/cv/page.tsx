import React from 'react';
import css from "./cv.module.css"
import HeaderCv from "./dashboard/headerCv";

const Page = () => {
    return (
        <div className={css.cv}>
            <HeaderCv/>
            <div>
                <div className={css.size24}>
                    Проекты, задачи, функционал, используемые технологии
                </div>

                <div className={css.colorBlack}>
                    Элитная недвижимость, админ панель.
                </div>
                <div>
                    - разработка от начала до окончания проекта.
                </div>
                <div>
                    - авторизация,управление данными, внесение, редактирование, удаление.
                </div>
                <div>
                    - redux Toolkit, material UI, typeScript, axios, rest api
                </div>

            </div>
            <div>
                <div className={css.colorBlack}>
                    Кредитование.
                </div>
               <div>
                   сервис по проверки документов / договороспособности.
               </div>
               <div>
                   - логика, работа с данными, авторизация, верска.
               </div>
               <div>
                   - material UI, typeScript, axios, redux, rest api
               </div>
            </div>
            <div>
                <div className={css.colorBlack}>
                Недвижимость.
                </div>
                <div>
                    - взаимодействие с разработчиками, внесение изменений в проект как в логике, так и дизайне, программирование
                </div>
                <div>
                    - авторизация, графики, взаимодействие с данными, верска.
                </div>
                <div>
                    - next, mobx, material UI, typeScript, axios, recharts ( графики )
                </div>
            </div>
            <div>
                <div  className={css.colorBlack}> Комерческий опыт в программировании. </div>
                <div>
                    OOO Финкейс с 07.2021г. до 06.2022г
                </div>
            </div>
            <div  className={css.colorBlack}> Образование. </div>
            <div> - КККМТ техник-ортопед протезист </div>
            <div> - ГУП Метрополитен машинист электропоезда </div>
            <div> - курсы IT Incubator Frontend (2020-2021) </div>
            <div> - курсы IT Incubator backEnd (2022-2023) </div>
            <div  className={css.colorBlack}> Технологии которые задействовались в программировании :  </div>
            - React, Next,TypeScript, Redux, Mobx, Redux Toolkit, Axios, Material Ul, Ant design, Blind Printing,
            Express, Nest js, Node, MongoDB, MongoAtlas, Rest Api ,Socket.IO


        </div>
    );
};

export default Page;