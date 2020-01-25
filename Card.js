import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from '../Config/Firebase';

class BukuCard extends Component {
    state = {
        notes: []
    }



    componentDidMount() {


        firebase.database().ref('Buku').on('value', (snapshot) => {
            this.setState({
                name: snapshot.val().namaBuku,
                category: snapshot.val().categoryBuku
            })
            const data = [];
            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                });
                this.setState({
                    notes: data
                })
            });


        })





    }

    render() {
        return (
            <div>

        <Fragment>
            {
                this.state.notes.map (note =>{
                    return (
                        <div key={note.id} >
                            <br></br>
                        <Card  >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={note.data.namaBuku}
                            height="140"
                            image={note.data.bukuProfile}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                               {note.data.namaBuku}
                  </Typography>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>View Detail</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                    <p>Rilis Tanggal {note.data.tanggalRilis}</p>
                    <p>Penulis {note.data.penulisBuku}</p>
                    <p>Category {note.data.categoryBuku}</p>
                  </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                    </CardActions>
                </Card>
                <br></br>
                </div>

                    )
                })
            }
        </Fragment>
                
            </div>

        );
    }
}

export default BukuCard;