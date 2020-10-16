import React, { Component } from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Media
} from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super(props)


    }

    renderDish(dish) {
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

    renderComments(dish) {
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

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )
    }

}

export default Dishdetail;