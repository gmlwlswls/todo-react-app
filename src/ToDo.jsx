import React from "react"

//react에서 컴포넌트 클래스를 만들기 위해서 Component로부터 상속을 받기
// div 입장에서 ToDo 프롭스
class ToDo extends React.Component {
  //생성자
  constructor(props){
    //App.js에서 넘겨준 속성들을 자신의 props에 저장
    //this.props.item 이라는 속성에 앞에서 전달한 데이터를 저장
    super(props); //상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
    //state 생성
    //item 이라는 이름으로 props 중에서 item 이라는 값을 state로 저장
    //props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만 
    //수정이나 삭제가 안되므로 수정이나 삭제를 하고자 하는 경우는 state로 변환 / 출력만 하면 바꿀 필요 x
    this.state = {item:props.item}
    //props는 항상 app.js에서 만들어짐, item app.js에서 만들어야 함
  }
  //화면에 출력할 내용을 리턴하는 메서드
    render(){
      return(
        <div className="ToDo"> 
          <input type="checkbox" 
            id= {this.state.item.id}
            name = {this.state.item.id}
            checked = {this.state.item.done}/>
          <label id = {this.state.item.id}>{this.state.item.title}</label>
        </div>
      )
    }
  }
export default ToDo;