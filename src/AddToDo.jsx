import React from "react"

import { TextField, Paper, Button, Grid } from "@material-ui/core"
//반응형 웹/Grid는 비율 설정할 때, 옆으로 배치 flex grid: 늘어나거나 줄어들었을 때 비율 유지 원할 때 

class AddToDo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Paper style={{margin:16, padding:16}}>
        <Grid container>
          <Grid xs = {7} md = {7} item style={{paddingRight:16}}>
            <TextField placeholder="여기에 작성하시오!!!" fullWidth />
          </Grid>
          <Grid xs = {5} md = {5} item>
            <Button fullwidth color="secondary">
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>

    )
  }
}

export default AddToDo