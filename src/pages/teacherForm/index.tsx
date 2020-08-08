import React, {useState} from 'react'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import Textarea from '../../components/textarea'
import Select from '../../components/select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'


const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem () {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
    
  }


  return (
  <div id="page-teacher-form" className="container">
    <PageHeader 
      title='Que incrivel que você quer dar aulas.'
      description='o primeiro passo é preencher esse formulário de inscrição'
    />

    <main>
      <fieldset>
        <legend>Seus Dados</legend>

        <Input name="name" label="nome completo" />
        <Input name="avatar" label="Avatar" />
        <Input name="whatsapp" label="Whatsapp" />
        <Textarea name="bio" label="biografia" />
      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>
        
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
        <Input name="cost" label="Custo da hora/aula" />
      </fieldset>

      <fieldset>
        <legend>Horários disponíveis
          <button type='button' onClick={addNewScheduleItem}> + Novo horario</button>
        </legend>
        
        {scheduleItems.map(scheduleItem =>{
          return (
            <div key={scheduleItem.week_day} className="schedule-item">
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="até" type="time" />
            </div>
            )
          })}
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt='aviso importante' />
          importante <br />
          Preeencha todos os dados
        </p>
        <button type='button'>
          salvar cadastro
        </button>
      </footer>
    </main>
  </div>
)}

export default TeacherForm