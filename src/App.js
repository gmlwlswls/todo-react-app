import logo from './logo.svg';
import './App.css';

import React from "react" ;

import ToDo_component from './ToDo_component';

import {Paper, List, Container} from "@material-ui/core" ;

import AddToDo from './AddToDo' ;

class App extends React.Component {
  constructor(props){
    super(props)
    //3개의 객체를 가진 배열을 생성
    this.state = {items:[{id:0, title:"react", "done":true}, 
                        {id:1, title:"vue", done:false},
                        {id:2, title:"angular", done:false}]}
  }
  render(){
    //리턴하기 전 배열을 순회하면서 출력할 내용을 생성 , map(data,index)
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //item은 3개의 가진 배열 데이터 하나씩, idx 는 0,1,2
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야 합니다.
    //key를 설정하지 않으면 출력에는 문제가 없지만 콘솔에 에러가 출력됩니다.
    //생략하면 전역변수 선언 , let 변수 선언
    let display = this.state.items.length > 0 && (
      <Paper style = {{margin:16}}>
    {/* //idx 겹치지 않게 */}
        <list>
          {this.state.items.map((item,idx) => (
            <ToDo_component item = {item} key = {idx}/>
          ))}
        </list>
      </Paper>
    );
    return(
    <div className='App'>
      <Container maxWidth = "md">
        <AddToDo />
      </Container>
      <Container>
        {display}
      </Container>

    </div>
    )
  }
}
export default App;
