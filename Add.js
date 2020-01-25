import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Add.css'
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../Config/Firebase'

class Add extends Component {
    state = {
        idBuku : "",
        nama : "",
        category : "",
        penulis : "",
        tanggal : "",
        image : ""
      };
      handleChangeText = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };

      handleTambahSumbit = () => {
        const {idBuku, nama, category, penulis, tanggal, image} = this.state;
        firebase.database().ref('Buku/' + idBuku).set({
            namaBuku: nama,
            categoryBuku: category,
            penulisBuku: penulis,
            tanggalRilis: tanggal,
            bukuProfile: image,
          });
        alert('succsess')
      }


    render (){
    return (
        <div className='tengah' >
            <div>
            <TextField required id="idBuku" label="id Buku" onChange={this.handleChangeText} />
            <br></br>
            <TextField required id="nama" label="Nama Buku" onChange={this.handleChangeText} />
            <br></br>
            <TextField required id="category" label="Category" onChange={this.handleChangeText} />
            <br></br>
            <TextField required id="penulis" label="Penulis" onChange={this.handleChangeText} />
            <br></br>
            <TextField required id="tanggal" label="Tanggal Rilis" onChange={this.handleChangeText} />
            <br></br>
            <TextField required id="image" label="Url Gambar" onChange={this.handleChangeText} />
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" onClick={this.handleTambahSumbit}>Tambahkan</Button>
            </div>

        </div>
    )
    }
}

function writeUserData(idBuku, nama, category, penulis, tanggal, image,) {
    firebase.database().ref('Buku/' + idBuku).set({
      namaBuku: nama,
      categoryBuku: category,
      penulisBuku: penulis,
      tanggalRilis: tanggal,
      bukuProfile: image,
    });
  }

  export default Add
