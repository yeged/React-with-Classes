import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Media, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from "react-router-dom"

const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}


const RenderComments = ({ comments }) => {
    if (comments != null) {
        return (
            <div>
                <Media tag="li">
                    <Media body>
                        <h4>Comments</h4>
                        {comments.map(comment => {
                            return (
                                <div>
                                    <div>
                                        <p>{comment.comment}</p>
                                    </div>
                                    <p>-- {comment.author},  {new Date(comment.date).toUTCString()}</p>
                                </div>
                            )
                        })}
                    </Media>
                </Media>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}



const Dishdetail = (props) => {


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3> {props.dish.name} </h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    )


}

export default Dishdetail; 