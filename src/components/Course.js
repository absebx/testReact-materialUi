import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Course extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>
        {this.props.course ? (
          <Card>
            <CardMedia 
              style={{height: 0, paddingTop: '26.25%'}}
              image={this.props.course.fields.image.fields.file.url}
              />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.course.fields.title}
              </Typography>
              <Typography component="p">
                {this.props.course.fields.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={this.props.course.fields.url} target="_blank">
                Go to Course
              </Button>
            </CardActions>
          </Card>
        ): (
          null
        )}
      </div>
    );
  }
}

export default Course;