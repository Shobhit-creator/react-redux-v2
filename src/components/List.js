import React, { useEffect,useState,useRef } from 'react'
import {fetchUsers, fetchUsersRequest, fetchSetPage} from '../actions/actions';
import {connect} from 'react-redux';
import Card from './Card';
import '../index.css';

function  List({fetchUsers, fetchSetPage, fetchUsersRequest, user: {users, loading, page} }){

    const [lastElement, setLastElement] = useState(null);
  
  
    const observer = useRef(
      new IntersectionObserver(
        (users) => {
          const first = users[0];
          if (first.isIntersecting) {
            fetchSetPage(page+1);
          }
        })
    );

      
    useEffect(() => {
      fetchUsersRequest(true);
      if (page <= 2){
        setTimeout(() => {
          fetchUsers(users, page);
        },1000);
      }
    },[page])
  

    useEffect(() => {
      const currentElement = lastElement;
      const currentObserver = observer.current;
  
      if (currentElement) {
        currentObserver.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          currentObserver.unobserve(currentElement);
        }
      };
    }, [lastElement]);


    return(
        <div className='App'>
        <h1>Slider</h1>
        <div className='card-wrapper'>
        {users.length > 0 && users.map((user, i) => {
          return i === users.length - 1 && !loading && page<=2 ? (
            <div key={user.id} ref={setLastElement}>
              <Card key={user.id} user={user} />
            </div>
          )
            : <Card key={user.id} user={user} />
        })
       }
      </div>
        {loading && <h1> Loading ... </h1>}
      </div>
    )

}

const mapStateToProps = (state) => ({
     user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: (users, page) => dispatch(fetchUsers(users, page)),
      fetchSetPage: (page)=>dispatch(fetchSetPage(page)),
      fetchUsersRequest: (flag)=>dispatch(fetchUsersRequest(flag))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(
    List
);
