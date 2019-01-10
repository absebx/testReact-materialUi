import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from '../components/Course';

const SPACE_ID = 'j6m5fcpk6vy9';
const ACCES_TOKEN = 'd0cebbf08d6d415f16be4796c22696eb53f81d2046b81fa2a0bca0af3f02a49b';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCES_TOKEN
});

class CourseList extends Component{
  constructor(props){
    super(props);

    this.state = {
      courses: [],
      searchString: ''
    };

    this.getCourses();

  }

  getCourses = ()=>{
    client.getEntries({
      content_type: 'course',
      query: this.state.searchString
    })
    .then((response)=>{
      console.log(response.items);
      this.setState({
        courses: response.items
      });
    })
    .catch((error)=>{
      console.log("ERROR: ",error);
    });
  }

  onSearchInputChange = (event) => {
    if(event.target.value){
      this.setState({searchString: event.target.value});
    }else{
      this.setState({searchString: ''});
    }

    this.getCourses(); //al hacer un setState actualiza render
  }

  render(){
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              placeholder='Buscar cursos'
              margin='normal'
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{padding: 24}}>
              {this.state.courses.map(currentCourse=>{
                return (
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Course course={currentCourse} />  
                  </Grid>
                )
              })}
            </Grid>
          </div>
        ): (
          'NO se encontraron cursos'
        )}
      </div>
    );
  }
}

export default CourseList;