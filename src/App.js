import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Button variant='primary'>Primary</Button>
      {/* <Button variant='secondary'>Secondary</Button>
      <Button variant='success'>Success</Button>
      <Button variant='danger'>Danger</Button> */}
      <Input size='small'></Input>
      {/* <Input size='medium'></Input>
      <Input size='large'></Input> */}
    </div>
  );
}

export default App;
