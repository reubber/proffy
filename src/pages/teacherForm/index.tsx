import React, {useState, FormEvent} from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import Textarea from '../../components/textarea'
import Select from '../../components/select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api'


const TeacherForm = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('') 
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
    
  ])

  function addNewScheduleItem () {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}
     
    ])
  }

  function handleCreateClass (e: FormEvent) {
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastro realizado com sucesso')
      
      history.push('/')
    }).catch(()=>{
      alert('ERRO NO CADASTRO')
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
      if( index === position) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  return (
  <div id="page-teacher-form" className="container">
    <PageHeader 
      title='Que incrivel que você quer dar aulas.'
      description='o primeiro passo é preencher esse formulário de inscrição'
    />

    <main>
      <form onSubmit={handleCreateClass}>
      <fieldset>
        <legend>Seus Dados</legend>

        <Input 
          name="name"
          label="Nome completo"
          value={name} onChange={(e) => { setName(e.target.value)}}
        />
        <Input 
          name="avatar" 
          label="Avatar"
          value={avatar} onChange={(e) => { setAvatar(e.target.value)}}
        />
        
        <Input 
          name="whatsapp"
          label="Whatsapp"
          value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)}} 
        />
        
        <Textarea 
          name="bio"
          label="Biografia"
          value={bio} onChange={(e) => { setBio(e.target.value)}}
        />

      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>
        
        <Select 
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={(e) => { setSubject(e.target.value)}}
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

        <Input 
          name="cost"
          label="Custo da hora/aula"
          value={cost}
          onChange={(e) => { setCost(e.target.value)}}
        />

      </fieldset>

      <fieldset>
        <legend>Horários disponíveis
          <button type='button' onClick={addNewScheduleItem}> + Novo horario</button>
        </legend>
        
        {scheduleItems.map((scheduleItem, index) =>{
          return (
            <div key={index} className="schedule-item">
              <Select 
                  name="week_day" 
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={(e) => { setScheduleItemValue(index, 'week_day', e.target.value)}}

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
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) => { setScheduleItemValue(index, 'from', e.target.value)}}
                />

                <Input 
                  name="to" 
                  label="até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) => { setScheduleItemValue(index, 'to', e.target.value)}}
                />
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
        <button type='submit'>
          salvar cadastro
        </button>
      </footer>
      </form>
    </main>
  </div>
)}

export default TeacherForm