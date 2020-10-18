import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Media
} from 'reactstrap';

const RenderDish = ({dish}) => {
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


const RenderComments = ({dish}) => {
    if (dish != null) {
        if (dish.comments.length > 0) {
            return (
                <div>
                    <Media tag="li">
                        <Media body>
                            <h4>Comments</h4>
                            {dish.comments.map(comment => {
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
                <div className="col-12 col-md-5 m-1">
                    <RenderDish  dish={props.selectedDish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.selectedDish} />
                </div>
            </div>
        </div>
    )


}

export default Dishdetail; 