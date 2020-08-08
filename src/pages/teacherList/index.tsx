import React from 'react'

import TeacherItem from '../../components/teacherForm'
import Input from '../../components/input'
import PageHeader from '../../components/pageHeader'
import Select from '../../components/select'

import './styles.css'

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis">
        
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'English', label: 'English'},
              { value: 'Dutch', label: 'Dutch'},
              { value: 'Frances', label: 'Frances'},
              { value: 'Arabe', label: 'Arabe'},
              { value: 'Português', label: 'Português'},
              { value: 'Alemão', label: 'Alemão'},
              { value: 'Mandarim', label: 'Mandarim'},
              { value: 'Espanhol', label: 'Espanhol'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sabado'},
            ]}
          />
          <Input type='time' name='time' label='Hora' />

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
