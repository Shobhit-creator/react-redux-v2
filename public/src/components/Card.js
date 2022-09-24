import React, { useEffect,useState } from 'react'
import {fetchUsers} from '../actions/actions';
import {connect} from 'react-redux';
import '../index.css';

function Card({ fetchUsers, user: {users, loading} }){

    const [page, setPage] = useState(1);

    useEffect(()=>{
        fetchUsers(page);
    }, [fetchUsers,page])


    let cards;

    if(users==null || loading){
        cards = (<div>Loading...</div>);
    }else{
        console.log(users);
        cards = users.map((user)=>(
              <div key={user.id} className="card">
                <img src={user.avatar} alt="Avatar" style={{width: "100%"}}></img>
                <div className='container'>
                    <p><b>{user.first_name} {user.last_name}</b></p>
                    <p>
                        <a href={`mailto: ${user.email}`}>{user.email}</a>
                    </p>
                </div>
              </div>
            )
        );
    }

    return(
        <div className='App'>
            <h1>Slider</h1>
            <div className='card-wrapper'>
            {
                cards
            }
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
     user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: (page) => dispatch(fetchUsers(page))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(
    Card
);
  
