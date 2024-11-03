import { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Modal, Row } from "react-bootstrap";

export default function UserApp() {
  const [userArr, setUserArr] = useState([]);
  const [user, setUser] = useState({userInfo:{}, post:{}, todo:{}});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  //처음 한번 유저 목록 불러오기
  useEffect(()=>{
    const bringUser = async() => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      setUserArr(data)
    }
    bringUser()
  },[])

  //모달 창 불러오는 경우, id를 매개변수로 post, todo를 가져와서 하나라도 실패하는 경우 가져오지 않음(promise.all)
  const bringModal = (id) =>{
    Promise.all([bringPost(id), bringTodo(id)])
    .then(([post, todo])=>{
      setUser({userInfo: userArr[id], post, todo})
    })
    handleShow();
  }
  const bringTodo = async(id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    return response.data
  }
  const bringPost = async(id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return response.data
  }

  return (
    <div>
      <h1>Users</h1>
      <ListGroup>
        {userArr.map((el, id)=>{

          return(
            <ListGroup.Item key={id} onClick={()=>{bringModal(id)}} style={{cursor:"pointer"}}>{el.id}. {el.name} - {el.email}</ListGroup.Item>
          )
        })}
        
      </ListGroup>
      
      {
        user.post[0] ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{user.userInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    <div>
                      <h3>Posts</h3>
                      <ul>
                        {(user.post).map((el, id)=>{
                          return (<li key={id}>{el.title}</li>)
                        })}
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <h3>Todos</h3>
                      <ul>
                        {(user.todo).map((el, id)=>{
                          return (<li key={id}>{el.title}</li>)
                        })}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        ): 'none'
      }
    </div>
  );
}
