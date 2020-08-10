import React, { useState, FormEvent } from 'react'

import TeacherItem, {Teacher} from '../../components/teacherForm'
import Input from '../../components/input'
import PageHeader from '../../components/pageHeader'
import Select from '../../components/select'

import './styles.css'
import api from '../../services/api'


function TeacherList () {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers (e: FormEvent) {
    e.preventDefault()
    
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis">
        
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => {setSubject(e.target.value)}}
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
            value={week_day}
            onChange={e => {setWeekDay(e.target.value)}}
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
          <Input 
            type='time' 
            name='time' 
            label='Hora' 
            value={time}
            onChange={e => {setTime(e.target.value)
            //searchTeachers(e)
            }}
          />

          <button type="submit">
            Buscar
          </button>

        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  )
}

export default TeacherList
