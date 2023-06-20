import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import Times from './componentes/Times/Times';

function App() {

  const times = [
    {
      time:'Dev',
      corP:'red',
      corS:''
    },
    {
      time:'Venda',
      corP:'green',
      corS:''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const [showForm, setShowForm] = useState('false')

  const novoColobarador = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
      console.log(colaborador)
    
  }
  const showFormFunction = () => {
    setShowForm(!showForm);
  }
  
  return (
    <div className="App">
        <Banner></Banner>
        <button onClick={showFormFunction}>Adicionar Item</button>
        {showForm && <Form aoCadastrar={colaborador => novoColobarador(colaborador)}></Form>}
        {times.map(time=><Times key={time.time} nomeTime={time.time} cor={time.corP}></Times>)}
        
    </div>
  );
}

export default App;
