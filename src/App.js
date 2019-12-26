import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
      mapData: null
    };

  }



  componentDidMount() {

    var dbData = [{ product: 'Bardak' }, { product: 'Banyo' }, { product: 'Bakır' }, { product: 'Çatı' }, { product: 'Ev' }, { product: 'Elektrik' }, {
      product: 'Dolap'
    }, { product: 'Dalgıç' }, { product: 'Çanta' }]

    this.setState({ data: dbData })

  }

  changeText(text) {
    var Datas = this.state.data
    var TextLength = text.length
    var newMapData = []
      for(var i = 0; i<Datas.length;i++){
        if(this.state.data[i].product.substring(0,TextLength).toLowerCase() == text.toLowerCase())
        {
          
          newMapData.push({product:this.state.data[i].product})
          this.setState({mapData:newMapData})
        }
      }
  }

  render() {
    return (
      <div className="App" style={{marginTop:200}}>
        <input type="text"  style={{padding:10,fontSize:20}} onChange={(text) => this.changeText(text.target.value)} />
        <div style={{ justifyContent: 'center', alignItems: 'center' }} >

          {
            this.state.mapData != null ?
              this.state.mapData.map((gelenveri =>
                <li class="item" key={gelenveri.id} >
                  <b style={{fontSize:20}} >{gelenveri.product}</b>

                  <br />

                </li>
              ))
              :
              null
          }
        </div>
      </div>
    )
  }
}
