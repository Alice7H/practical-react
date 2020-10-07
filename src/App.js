import React from 'react';
import './App.css';
// import IconComponent from './components/IconComponent'
// import ToastifyComponent from './components/ToastifyComponent';
// import ModalComponent from './components/ModalComponent';
// import TooltipComponent from './components/TooltipComponent';
// import CountUpComponent from './components/CountUpComponent';
// import IdleTimerComponent from './components/IdleTimerComponent';
// import ColorPickerComponent from './components/ColorPickerComponent';
// import CreditCardComponent from './components/CreditCardComponent';
// import DatePickerComponent from './components/DatePickerComponent';
// import PlayerComponent from './components/PlayerComponent';
// import SpinnersComponent from './components/SpinnersComponent';
import LineChartComponent from './components/LineChartComponent';
import BarChartComponent from './components/BarCharComponent';
import DoughnutChartComponent from './components/DoughnutChartComponent';

function App() {
  return (
    <div className="App">
      {/* <IconComponent/>
      <ToastifyComponent/>
      <ModalComponent/> 
      <TooltipComponent/>
      <CountUpComponent/>
      <IdleTimerComponent/>
      <ColorPickerComponent/>
      <CreditCardComponent/>
      <DatePickerComponent/>
      <PlayerComponent/>
      <SpinnersComponent/>*/}
      <LineChartComponent/>
      <BarChartComponent/>
      <DoughnutChartComponent/>
    </div>
  );
}

export default App;
