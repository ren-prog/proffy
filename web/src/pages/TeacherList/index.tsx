import React from 'react';

import './styles.css';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffs disponiveis ">
               <form action="" id="search-teachers">
                   <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                    <label htmlFor="week-day">Dia da semana</label>
                    <input type="text" id="week-day"/>
                   </div>

                   <div className="input-block">
                    <label htmlFor="subject">Hora</label>
                    <input type="text" id="time"/>
                   </div>
               </form>
           </PageHeader>

            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;