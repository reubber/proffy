import React from 'react'

import PageHeader from '../../components/pageHeader'

import './styles.css'
import TeacherItem from '../../components/teacherItem'

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis">
        
        <form id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type='text' id="subject" />
          </div>
          
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type='text' id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type='text' id="subject" />
          </div>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
